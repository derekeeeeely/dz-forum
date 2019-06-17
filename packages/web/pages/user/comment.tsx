import moment from 'moment';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button, Comment, notification } from 'antd';
import Avatar from '@regneva/components/avatar';
import { graphql, createPaginationContainer, commitMutation } from 'react-relay';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useAppContext from '@regneva/hooks/useAppContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { markCommentAsread, markAllCommentAsread } from '@regneva/relay/custom/mutations';
import { CommentPageProps } from '../../utils/types';

const commentsReceivedQuery = graphql`
  query commentsReceivedQuery($userCode: String!, $count: Int, $cursor: Cursor) {
    ...comment_data @arguments(userCode: $userCode, count: $count, cursor: $cursor)
  }
`

const CommentPage: FunctionComponent<CommentPageProps> = ({ data, relay }) => {
  const { receivedComments: { edges, pageInfo: { hasNextPage } } } = data;
  const { hasMore, isLoading, loadMore, refetchConnection } = relay;
  const { environment } = useRelayContext();
  const { user: { userCode } } = useLayoutContext();


  const { router } = useAppContext();

  // 加载更多
  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }
    loadMore(20, (err: any) => console.log(err));
  };

  // 全部标记为已读
  const readAll = () => {
    const variables = {
      input: {
        usercode: userCode,
      }
    };
    commitMutation(environment, {
      mutation: markAllCommentAsread,
      variables,
      onCompleted: () => {
        notification.open({
          message: '全部已读成功',
        });
        refetchConnection(10, () => { });
      },
      onError: err => console.error(err),
      updater: store => {
        const user: any = store.get(`client:root:user(code:"${userCode}")`);
        user.setValue(0, 'unreadCommentNum');
      }
    });
  }

  // 标记为已读
  const markAsread = (commentId: any) => {
    const variables = {
      input: {
        usercode: userCode,
        commentid: commentId
      },
      userCode
    };
    commitMutation(environment, {
      mutation: markCommentAsread,
      variables,
      onCompleted: () => {
        notification.open({
          message: '标记成功',
        });
        refetchConnection(10, () => { });
      },
      onError: err => console.error(err),
      updater: (store, res) => {
        const user: any = store.get(`client:root:user(code:"${userCode}")`);
        const unreadCommentNum = +res.markCommentAsread.query.user.unreadCommentNum;
        user.setValue(unreadCommentNum, 'unreadCommentNum');
      }
    });
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {edges.find(item => !item.node.read) ? (
        <Button type="primary" onClick={readAll}>全部已读</Button>
      ) : ''}
      <div style={{ textAlign: 'left' }}>

      {edges.map(item => {
        const {
          node: {
            commentId,
            updatedAt,
            content,
            topic,
            userByUserCode,
            read,
            deletedAt
          },
        } = item;
        const { name, nickname, userCode: commentUser } = userByUserCode;

        const commentContent = deletedAt ? (<div className="deleted-comment">原评论已删除</div>) : (<div dangerouslySetInnerHTML={{ __html: content || '' }} />);

        const viewTopic = (<span onClick={() => router.push(`/topic/$tid`, `/topic/${topic && topic.topicId}#comment-${commentId}`)}>
          查看原帖：{topic && topic.title}
        </span>)

        // 不是自己的回复可标记为已读
        const markRead = (read || commentUser === userCode) ? '' : (<span
          style={{ color: '#fe751a' }}
          onClick={() => {
            markAsread(commentId)
          }}
        >标记为已读</span>)

        return (
          <Comment
            key={commentId}
            style={{ borderBottom: '1px solid #eee' }}
            avatar={
              <Avatar {...userByUserCode}/>
            }
            author={<a>{nickname || name}</a>}
            datetime={moment(updatedAt).format('MM-DD HH:mm')}
            content={commentContent}
            actions={[viewTopic, markRead]}
          />
        );
      })}
      </div>
      {hasNextPage && (
        <div style={{ marginTop: 20 }}>
          <Button onClick={_loadMore} type="primary">
            加载更多
          </Button>
        </div>
      )}
    </div>
  )
}

export default createPaginationContainer(CommentPage, {
  data: graphql`
    fragment comment_data on Query
      @argumentDefinitions(
          userCode: { type: String }
          count: { type: Int, defaultValue: 20 }
          cursor: { type: Cursor }
        ) {
        receivedComments: getUserReceivedComments(first: $count, after: $cursor, usercode: $userCode)
          @connection(key: "comment_receivedComments") {
          edges {
            cursor
            node {
              ...fragments_commentBasic @relay(mask: false)
              userByUserCode {
                ...fragments_userBasic @relay(mask: false)
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.data && props.data.receivedComments;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables({}, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        count,
        cursor,
      };
    },
    query: commentsReceivedQuery,
  }
);