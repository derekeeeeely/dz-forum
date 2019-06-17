import Head from 'next/head';
import { Button } from 'antd';
import { FunctionComponent } from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
import TopicList from '@regneva/components/topicList';
import { SectionPageProps } from '../../utils/types';
import './index.less';

// 这是refetch的query
const SidTopicListQuery = graphql`
  query SidTopicListQuery($id: Int!, $count: Int, $cursor: Cursor, $condition: TopicCondition) {
    ...Sid_data @arguments(id: $id, count: $count, cursor: $cursor, condition: $condition)
  }
`

const SectionPage: FunctionComponent<SectionPageProps> = ({ data, relay }) => {
  const { section: { name, avatar, description } } = data;
  const { topics: { edges, pageInfo: { hasNextPage } } } = data;
  const { hasMore, isLoading, loadMore } = relay;

  // 加载更多
  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }
    loadMore(10, (err: any) => console.log(err));
  };

  const listData = edges.map(item => item.node);

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description || ''}></meta>
      </Head>
      <div className="section-info">
        <div className="section-title" >{name} </div>
        {description}
      </div>
      <img className="section-avatar" src={avatar || ''} />
      <div className="section-toplist">
        <TopicList data={listData} />
        {hasNextPage && (
          <div className="loadmore">
            <Button onClick={_loadMore} type="primary">
              加载更多
          </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default createPaginationContainer(
  SectionPage,
  {
    data: graphql`
      fragment Sid_data on Query
        @argumentDefinitions(
          id: { type: "Int!" }
          count: { type: Int, defaultValue: 10 }
          cursor: { type: Cursor }
          condition: { type: TopicCondition }
          orderBy: { type: "[TopicsOrderBy!]", defaultValue: [UPDATED_AT_DESC] }
        ) {
        section(id: $id) {
          ...fragments_sectionBasic @relay(mask: false)
        }
        topics(first: $count, after: $cursor, condition: $condition, orderBy: $orderBy)
          @connection(key: "section_topics") {
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
      return props.data && props.data.topics;
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
    query: SidTopicListQuery,
  }
);