// import moment from 'moment';
import { List, Icon, Statistic, Tag } from 'antd';
import Avatar from '@regneva/components/avatar';
import { FunctionComponent } from 'react';
import useAppContext from '@regneva/hooks/useAppContext';
import { fragments_topicBasic } from '@regneva/relay/generated/fragments_topicBasic.graphql';
import { formatTime, randomColor } from '@regneva/web/utils';

interface TopicListProps {
  data: fragments_topicBasic[]
  getDescription?: any
}

const getInfo = (name: any, create: any) => {
  return `${name} 发布于 ${formatTime(create)}`
}

const TopicList: FunctionComponent<TopicListProps> = ({ data, getDescription }) => {
  const { router } = useAppContext();

  const titleWithTag = (title: any, tags: any, topicId: any) => (
    <a onClick={() => router.push(`/topic/$tid`, `/topic/${topicId}`)}>
      <span style={{ marginRight: 5 }}>{title}</span>
      {(tags || []).map((tag: any) => (
        <Tag key={tag || ''} color={randomColor()}>{tag}</Tag>
      ))}
    </a>
  )

  return (
    <List
      style={{ padding: 10 }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => {
        const { updatedAt, topicId, title: topicTitle, user, commentNum, createdAt, tags } = item;
        if (user) {
          const { nickname, name } = user;
          return <List.Item actions={[
            <Statistic
              value={commentNum}
              prefix={<Icon type="message" />}
              valueStyle={{ fontSize: 16 }}
            />
          ]}>
            <List.Item.Meta
              avatar={<Avatar {...user} />}
              title={titleWithTag(topicTitle, tags, topicId)}
              description={getDescription ? getDescription(nickname || name, createdAt, updatedAt) : getInfo(nickname || name, createdAt)}
            />
          </List.Item>
        }
      }}
    />
  );
}

export default TopicList