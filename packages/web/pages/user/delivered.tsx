import moment from 'moment';
import { Button, Comment } from 'antd';
import { FunctionComponent } from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import Avatar from '@regneva/components/avatar';
import useAppContext from '@regneva/hooks/useAppContext';
import { DeliveredPageProps } from '../../utils/types';

const deliveredTopicListQuery = graphql`
  query deliveredTopicListQuery($count: Int, $cursor: Cursor, $condition: TopicCondition) {
    ...delivered_data @arguments(count: $count, cursor: $cursor, condition: $condition)
  }
`

const DeliveredPage: FunctionComponent<DeliveredPageProps> = ({ data, relay }) => {
  const { deliveredTopics: { edges, pageInfo: { hasNextPage } } } = data;
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
            topicId,
            title,
            updatedAt,
            section,
            userByUserCode,
          },
        } = item;
        return (
          <Comment
            key={topicId}
            style={{ borderBottom: '1px solid #eee' }}
            avatar={
              <Avatar {...userByUserCode} />
            }
            author={<a>发布在 {section && section.name}</a>}
            datetime={moment(updatedAt).format('MM-DD HH:mm')}
            content={<div dangerouslySetInnerHTML={{ __html: title || '' }} />}
            actions={[<span onClick={() => router.push(`/topic/$tid`, `/topic/${topicId}`)}>去看看</span>]}
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

export default createPaginationContainer(DeliveredPage, {
  data: graphql`
    fragment delivered_data on Query
      @argumentDefinitions(
        count: { type: Int, defaultValue: 20 }
        cursor: { type: Cursor }
        condition: { type: TopicCondition }
        orderBy: { type: "[TopicsOrderBy!]", defaultValue: [CREATED_AT_DESC] }
      ) {
      deliveredTopics :topics(first: $count, after: $cursor, condition: $condition, orderBy: $orderBy)
        @connection(key: "delivered_deliveredTopics") {
        totalCount
        edges {
          cursor
          node {
            ...fragments_topicBasic @relay(mask: false)
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
      return props.data && props.data.deliveredTopics;
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
    query: deliveredTopicListQuery,
  }
);