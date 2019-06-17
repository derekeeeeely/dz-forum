import moment from 'moment';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button, Comment, notification } from 'antd';
import Avatar from '@regneva/components/avatar';
import { graphql, createPaginationContainer, commitMutation } from 'react-relay';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useAppContext from '@regneva/hooks/useAppContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { markMentionAsread, markAllMentionAsread } from '@regneva/relay/custom/mutations';
import { MentionPageProps } from '../../utils/types';

const mentionReceivedQuery = graphql`
  query mentionReceivedQuery($condition: MentionCondition, $count: Int, $cursor: Cursor) {
    ...mention_data @arguments(condition: $condition, count: $count, cursor: $cursor)
  }
`

const MentionPage: FunctionComponent<MentionPageProps> = ({ data, relay }) => {
  const { receivedMentions: { edges, pageInfo: { hasNextPage } } } = data;
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
      mutation: markAllMentionAsread,
      variables,
      onCompleted: (response, errors) => {
        notification.open({
          message: '全部已读成功',
        });
        refetchConnection(10, () => { });
      },
      onError: err => console.error(err),
      updater: (store, res) => {
        const user: any = store.get(`client:root:user(code:"${userCode}")`);
        user.setValue(0, 'unreadMentionNum');
      }
    });
  }

  // 标记为已读
  const markAsread = (mentionId: any) => {
    const variables = {
      input: {
        usercode: userCode,
        mentionid: mentionId
      },
      userCode
    };
    commitMutation(environment, {
      mutation: markMentionAsread,
      variables,
      onCompleted: (response, errors) => {
        notification.open({
          message: '标记成功',
        });
        refetchConnection(10, () => { });
      },
      onError: err => console.error(err),
      updater: (store, res) => {
        const user: any = store.get(`client:root:user(code:"${userCode}")`);
        const unreadMentionNum = +res.markMentionAsread.query.user.unreadMentionNum;
        user.setValue(unreadMentionNum, 'unreadMentionNum');
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
              topic,
              commentId,
              mentionId,
              updatedAt,
              userByUserCode,
              read
            },
          } = item;
          const { name, nickname } = userByUserCode;

          const mentionContent = `${nickname || name} 在 ${topic && topic.title} @你了`

          const viewTopic = (<span onClick={() => router.push(`/topic/$tid`, `/topic/${topic && topic.topicId}#comment-${commentId}`)}>
            去看看
          </span>)

          const markRead = read ? '' : (<span
            style={{ color: '#fe751a' }}
            onClick={() => {
              markAsread(mentionId)
            }}
          >标记为已读</span>)

          return (
            <Comment
              key={mentionId}
              style={{ borderBottom: '1px solid #eee' }}
              avatar={
                <Avatar {...userByUserCode} />
              }
              author={<a>{nickname || name}</a>}
              datetime={moment(updatedAt).format('MM-DD HH:mm')}
              content={mentionContent}
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

export default createPaginationContainer(MentionPage, {
  data: graphql`
    fragment mention_data on Query
      @argumentDefinitions(
          condition: { type: MentionCondition }
          count: { type: Int, defaultValue: 20 }
          cursor: { type: Cursor }
        ) {
        receivedMentions: mentions(first: $count, after: $cursor, condition: $condition)
          @connection(key: "mention_receivedMentions") {
          edges {
            cursor
            node {
              ...fragments_mentionBasic @relay(mask: false)
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
      return props.data && props.data.receivedMentions;
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
    query: mentionReceivedQuery,
  }
);