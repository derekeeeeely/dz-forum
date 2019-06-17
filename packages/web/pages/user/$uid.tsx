import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Tabs, Icon } from 'antd';
import { FunctionComponent } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Panel from '@regneva/components/panel';
import { OtherCenterPageProps } from '../../utils/types';
import './index.less';

const { TabPane } = Tabs;

// 动态引入
const DynamicBasicInfo = dynamic(
  () => import('./basic'),
  { ssr: false }
)
const DynamicDelivered = dynamic(
  () => import('./otherDelivered'),
  { ssr: false }
)
const OtherCenterPage: FunctionComponent<OtherCenterPageProps> = ({ data }) => {
  const { otherUser } = data;
  const { topicNum, nickname, name } = otherUser;
  return (
    <Panel>
      <Head>
        <title>{nickname || name}</title>
      </Head>
      <DynamicBasicInfo others={otherUser}/>
      <Tabs style={{ textAlign: 'center' }}>
        <TabPane
          key="topic"
          tab={<span><Icon type="pushpin" />他的帖子（{topicNum}）</span>}
        >
          <DynamicDelivered data={data} />
        </TabPane>
      </Tabs>
    </Panel>
  );
};

export default createFragmentContainer(OtherCenterPage, {
  data: graphql`
    fragment Uid_data on Query
      @argumentDefinitions(
        otherCode: { type: "String!" }
        otherDelivered: { type: TopicCondition }
      ) {
      otherUser: user(code: $otherCode) {
        topicNum
        ...fragments_userBasic @relay(mask: false)
      }
      ...otherDelivered_data @arguments(condition: $otherDelivered)
    }
  `,
});

