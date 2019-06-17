import moment from 'moment';
import { Button, Comment } from 'antd';
import { FunctionComponent } from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import Avatar from '@regneva/components/avatar';
import useAppContext from '@regneva/hooks/useAppContext';
import { ParticipatedPageProps } from '../../utils/types';

const participatedCommentsQuery = graphql`
  query participatedCommentsQuery($count: Int, $cursor: Cursor, $condition: CommentCondition) {
    ...participated_data @arguments(count: $count, cursor: $cursor, condition: $condition)
  }
`

const ParticipatedPage: FunctionComponent<ParticipatedPageProps> = ({ data, relay }) => {
  const { participatedComments: { edges, pageInfo: { hasNextPage } } } = data;
  const { hasMore, isLoading, loadMore } = relay;

  const { router } = useAppContext();

  // 加载更多
  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }
    loadMore(20, (err: any) => console.log(err));
  };

  return (
    <div style={{ textAlign: 'left' }}>
      {edges.map(item => {
        const {
          node: {
            commentId,
            updatedAt,
            content,
            topic,
            userByUserCode,
            deletedAt
          },
        } = item;
        const { name, nickname } = userByUserCode;

        const commentContent = deletedAt ? (<div className="deleted-comment">原评论已删除</div>) : (<div dangerouslySetInnerHTML={{ __html: content || '' }} />);

        return (
          <Comment
            key={commentId}
            style={{ borderBottom: '1px solid #eee' }}
            avatar={
              <Avatar {...userByUserCode} />
            }
            author={<a>{nickname || name}</a>}
            datetime={moment(updatedAt).format('MM-DD HH:mm')}
            content={commentContent}
            actions={[
              <span onClick={() => router.push(`/topic/$tid`, `/topic/${topic && topic.topicId}#comment-${commentId}`)}>
                查看原帖：{topic && topic.title}
              </span>,
            ]}
          />
        );
      })}
      {hasNextPage && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button onClick={_loadMore} type="primary">
            加载更多
          </Button>
        </div>
      )}
    </div>
  )
}

export default createPaginationContainer(ParticipatedPage, {
  data: graphql`
    fragment participated_data on Query
      @argumentDefinitions(
        count: { type: Int, defaultValue: 20 }
        cursor: { type: Cursor }
        condition: { type: CommentCondition }
        orderBy: { type: "[CommentsOrderBy!]", defaultValue: [UPDATED_AT_DESC] }
      ) {
        participatedComments: comments(first: $count, after: $cursor, condition: $condition, orderBy: $orderBy)
          @connection(key: "participated_participatedComments") {
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
      return props.data && props.data.participatedComments;
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
    query: participatedCommentsQuery,
  }
);