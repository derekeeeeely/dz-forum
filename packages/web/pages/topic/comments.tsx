import moment from 'moment';
import { FunctionComponent, useState } from 'react';
import { Button, Comment, notification, Icon } from 'antd';
import { graphql, createPaginationContainer, commitMutation } from 'react-relay';
import Avatar from '@regneva/components/avatar';
import CommentDrawer from '@regneva/components/commentDrawer';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { topicDetailDeleteComment } from '@regneva/relay/custom/mutations';
import { TopicCommentsPageProps, commentNodeWithUser } from '../../utils/types';
import './index.less';

const commentsListQuery = graphql`
  query commentsListQuery($id: Int!, $count: Int, $cursor: Cursor) {
    ...comments_data @arguments(id: $id, count: $count, cursor: $cursor)
  }
`

const TopicComments: FunctionComponent<TopicCommentsPageProps> = ({ targetUser, topicId, data, relay }) => {
  const { user: { userCode: currentUserCode } } = useLayoutContext();
  const { environment } = useRelayContext();

  const { hasMore, isLoading, loadMore, refetchConnection } = relay;
  const { comments: { edges, pageInfo: { hasNextPage } } } = data;

  const [visible, setVisible] = useState(false);
  const [commentInfo, setCommentInfo] = useState({ topicId });

  // 加载更多
  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }
    loadMore(20, err => console.log(err));
  };

  // 回复成功 重新加载
  const handleOk = () => {
    setVisible(false);
    refetchConnection(20, () => { });
  };

  // 评论相关数据入state
  // 是否有commentId来区分回复帖子 | 回复回复
  const makeComment = (info: any) => {
    setCommentInfo(info);
    setVisible(true);
  };

  // 删除回复
  const deleteComment = (commendId: number) => {
    const variables = {
      input: {
        id: commendId,
        patch: {
          deletedAt: moment(),
        },
      },
    };
    commitMutation(environment, {
      mutation: topicDetailDeleteComment,
      variables,
      onCompleted: () => {
        notification.open({
          message: '删除成功',
        });
        handleOk();
      },
      onError: err => console.error(err),
    });
  };

  const allNodes = edges.map(node => Object.assign({}, node.node));
  const tree = { children: allNodes.filter(node => !node.parentId) };
  let leftNodes = allNodes.filter(node => tree.children.indexOf(node) === -1);

  // 数据转为树形结构
  const toEdgesTree = (stree: any) => {
    if (stree.children) {
      stree.children.map((node: any) => {
        const list = leftNodes.filter(_node => _node.parentId === node.commentId);
        node.children = list;
        leftNodes = leftNodes.filter(_node => node.children.indexOf(_node) === -1);
        toEdgesTree(node);
      });
    }
  };

  toEdgesTree(tree);

  // 渲染树形结构
  const renderTree = (lvx: any) => {
    return lvx.children.map((item: commentNodeWithUser) => {
      const {
        commentId,
        updatedAt,
        deletedAt,
        content,
        userByUserCode,
      } = item;

      const { userCode, nickname, name } = userByUserCode;

      const actions = [];

      // 自己的只能删除，不能编辑、回复，别人的只能回复
      if (userCode === currentUserCode) {
        actions.push(<a onClick={() => deleteComment(commentId)}>删除</a>);
      } else {
        actions.push(<a onClick={() => makeComment({ topicId, commentId, content, targetCode: userCode })}>回复</a>)
      }

      const commentContent = deletedAt ? (<div className="deleted-comment">原评论已删除</div>) : (<div dangerouslySetInnerHTML={{ __html: content || '' }} />);

      return (
        <div id={`comment-${commentId}`} key={commentId}>
          <Comment
            style={{ borderTop: '1px solid #eee' }}
            avatar={<Avatar {...userByUserCode} />}
            author={<a>{nickname || name}</a>}
            datetime={moment(updatedAt).format('MM-DD HH:mm')}
            content={commentContent}
            actions={actions}
          >
            {renderTree(item)}
          </Comment>
        </div>
      );
    });
  };

  return (
    <div >
      <Button
        type="primary"
        onClick={() =>
          makeComment({
            topicId,
            targetCode: targetUser
          })
        }
        style={{ marginBottom: 20 }}
      >
        回复
      </Button>
      {renderTree(tree)}
      {hasNextPage && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button onClick={_loadMore} type="primary">
            加载更多
        </Button>
        </div>
      )}
      <CommentDrawer
        visible={visible}
        onClose={() => setVisible(false)}
        data={commentInfo}
        onOk={handleOk}
      />
    </div>
  );
};

export default createPaginationContainer(
  TopicComments,
  {
    data: graphql`
      fragment comments_data on Query
        @argumentDefinitions(
          id: { type: "Int!" }
          count: { type: Int, defaultValue: 20 }
          cursor: { type: Cursor }
        ) {
        comments: getTopicReceivedComments(first: $count, after: $cursor, topicid: $id)
          @connection(key: "comments_comments") {
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
      return props.data && props.data.comments;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables({ }, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        count,
        cursor,
      };
    },
    query: commentsListQuery,
  }
);