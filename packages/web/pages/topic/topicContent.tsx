import { useState } from 'react';
import moment from 'moment';
import copy from 'copy-to-clipboard';
import { Card, Comment, Tag, notification, Icon, message } from 'antd';
import { commitMutation } from 'react-relay';
import Avatar from '@regneva/components/avatar';
import TopicDrawer from '@regneva/components/topicDrawer';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { topicUpdateMutation } from '@regneva/relay/custom/mutations';
import Like from '@regneva/components/like';
import { randomColor } from '../../utils';
import { TopicContentProps } from '../../utils/types';

export default function TopicContent({ data, likesList }: TopicContentProps) {
  const { deletedAt, title, content, updatedAt, tags, topicId, userByUserCode, likeNum } = data;
  const { userCode, name, nickname } = userByUserCode;
  const { user: { userCode: currentUserCode } } = useLayoutContext();
  const { environment } = useRelayContext();

  const [topicContent, setTopicContent] = useState(content);
  const [visible, setVisible] = useState(false);
  const [deleted, setDeleted] = useState(deletedAt);

  const actions = [
    <Like topicId={topicId} likeNum={likeNum} likesList={likesList}/>,
    <Icon type="share-alt" onClick={() => {
      copy(location.href);
      message.success('地址已复制到剪切板，快去分享吧~');
    }}/>
  ];

  // 删除帖子
  const deleteTopic = (topicId: number) => {
    const variables = {
      input: {
        id: topicId,
        patch: {
          deletedAt: moment(),
          content: '原帖已删除'
        }
      }
    }
    commitMutation(environment, {
      mutation: topicUpdateMutation,
      variables,
      onCompleted: (res) => {
        notification.open({
          message: '删除成功',
        });
        setTopicContent(res.updateTopic.topic.content);
        setDeleted(res.updateTopic.topic.deletedAt)
      },
      onError: err => console.error(err),
    });
  };

  // 编辑帖子回调
  const handleOk = (result: any) => {
    setVisible(false);
    setTopicContent(result);
  };

  if (userCode === currentUserCode && !deleted) {
    actions.push(
      <a onClick={() => setVisible(true)}>编辑</a>
    );
    actions.push(<a onClick={() => deleteTopic(topicId)}>删除</a>);
  }

  const titleWithTag = (
    <>
      <span className="topic-title">{title}</span>
      {(tags || []).map(tag => (
        <Tag key={tag || ''} color={randomColor()}>{tag}</Tag>
      ))}
    </>
  )

  return (
    <Card title={titleWithTag} bordered={false} className="topic-detail">
      <Comment
        key={userCode}
        avatar={<Avatar {...userByUserCode} />}
        author={<a>{nickname || name}</a>}
        datetime={moment(updatedAt).format('MM-DD HH:mm')}
        content={
          <div dangerouslySetInnerHTML={{ __html: topicContent || '' }} />
        }
        actions={actions}
      />
      <TopicDrawer
        visible={visible}
        onClose={() => setVisible(false)}
        data={{ id: topicId, content: topicContent, target: userCode }}
        onOk={handleOk}
      />
    </Card>
  );
}


