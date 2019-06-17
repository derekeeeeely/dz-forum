// import moment from 'moment';
import { FunctionComponent } from 'react';
import TopicList from '@regneva/components/topicList';
import { fragments_topicBasic } from '@regneva/relay/generated/fragments_topicBasic.graphql';
import { formatTime } from '../../utils';

interface HotTopicProps {
  data: fragments_topicBasic[]
  title: string
}

const HotTopic: FunctionComponent<HotTopicProps> = ({ data, title }) => {

  const getInfo = (name: any, create: any, update: any) => {
    if (title === '热门') {
      return `${name} 最后更新于 ${formatTime(update)}`
    }
    return `${name} 发布于 ${formatTime(create)}`
  }

  return (
    <div className="hot-topics">
      <div className="hot-title">{title}</div>
      <TopicList data={data} getDescription={getInfo} />
    </div>
  );
}

export default HotTopic