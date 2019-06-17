import Head from 'next/head';
import { FunctionComponent } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Panel from '@regneva/components/panel';
import { TopicDetailPageProps } from '../../utils/types';
import TopicContent from './topicContent';
import Comments from './comments';
import './index.less';

const TopicDetailPage: FunctionComponent<TopicDetailPageProps> = ({ data }) => {
  const { topic, likesList } = data;
  const { title, topicId, userByUserCode: { userCode } } = topic;

  return (
    <Panel>
      <Head>
        <title>{title}</title>
      </Head>
      <TopicContent data={topic} likesList={likesList}/>
      <Comments
        data={data}
        topicId={topicId}
        targetUser={userCode}
      />
    </Panel>
  );
};

export default createFragmentContainer(
  TopicDetailPage,
  {
    data: graphql`
      fragment Tid_data on Query
        @argumentDefinitions(
          id: { type: "Int!" }
          likes: { type: "LikeCondition" }
        ) {
        topic(id: $id) {
          ...fragments_topicBasic @relay(mask: false)
          userByUserCode{
            ...fragments_userBasic @relay(mask: false)
          }
        }
        likesList(first: 1, condition: $likes) {
          ...fragments_likesBasic @relay(mask: false)
        }
        ...comments_data @arguments(id: $id)
      }
    `
  }
);