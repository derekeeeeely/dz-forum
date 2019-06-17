import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Tabs, Icon } from 'antd';
import { FunctionComponent } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Panel from '@regneva/components/panel';
import { UserCenterPageProps } from '../../utils/types';
import './index.less';

const { TabPane } = Tabs;

// 动态引入
const DynamicBasicInfo = dynamic(
  () => import('./basic'),
  { ssr: false }
)
const DynamicDelivered = dynamic(
  () => import('./delivered'),
  { ssr: false }
)
const DynamicParticipated = dynamic(
  () => import('./participated'),
  { ssr: false }
)
const DynamicComment = dynamic(
  () => import('./comment'),
  { ssr: false }
)
const DynamicMention = dynamic(
  () => import('./mention'),
  { ssr: false }
)
const UserCenterPage: FunctionComponent<UserCenterPageProps> = ({ data }) => {
  const { user: { topicNum, commentNum, receivedCommentNum, unreadCommentNum, unreadMentionNum, receivedMentionNum } } = data;
  return (
    <Panel>
      <Head>
        <title>个人中心</title>
      </Head>
      <DynamicBasicInfo />
      <Tabs style={{ textAlign: 'center' }}>
        <TabPane
          key="receivedMention"
          tab={<span><Icon type="message" />@我的 ({unreadMentionNum}/{receivedMentionNum}）</span>}
        >
          <DynamicMention data={data} />
        </TabPane>
        <TabPane
          key="receivedComment"
          tab={<span><Icon type="message" />评论我的（{unreadCommentNum}/{receivedCommentNum}）</span>}
        >
          <DynamicComment data={data} />
        </TabPane>
        <TabPane
          key="topic"
          tab={<span><Icon type="pushpin" />我的帖子（{topicNum}）</span>}
        >
          <DynamicDelivered data={data} />
        </TabPane>
        <TabPane
          key="comment"
          tab={<span><Icon type="paper-clip" />我的评论（{commentNum}）</span>}
        >
          <DynamicParticipated data={data}/>
        </TabPane>
      </Tabs>
    </Panel>
  );
};

export default createFragmentContainer(UserCenterPage, {
  data: graphql`
    fragment user_data on Query
      @argumentDefinitions(
        userCode: { type: "String!" }
        delivered: { type: TopicCondition }
        participated: { type: CommentCondition }
        mentioned: { type: MentionCondition }
      ) {
      user(code: $userCode) {
        ...fragments_userStatistic @relay(mask: false)
      }
      ...delivered_data @arguments(condition: $delivered)
      ...participated_data @arguments(condition: $participated)
      ...comment_data @arguments(userCode: $userCode)
      ...mention_data @arguments(condition: $mentioned)
    }
  `,
});

