import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Comment, Avatar, Drawer, Button, notification } from 'antd';
import { commitMutation } from 'react-relay';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { topicUpdateMutation } from '@regneva/relay/custom/mutations'
import './index.less';

interface TopicDrawerProps {
  visible: boolean,
  onClose: () => void,
  onOk: (res: any) => void,
  data: any
}
const Editor = dynamic(
  () => import('@regneva/components/editor'),
  { ssr: false }
)
export default function TopicDrawer(props: TopicDrawerProps) {
  const { user: { avatar } } = useLayoutContext();
  const { environment } = useRelayContext();

  const { visible, onClose, onOk, data } = props;
  const { id, content, target } = data;

  const [topicContent, setTopicContent] = useState(content);

  const onSubmit = () => {
    const mentions = topicContent.match(/data\-id="[a-zA-Z0-9]*"/g)
    let mentioncodes: any = null;
    if (mentions) {
      mentioncodes = mentions.map((item: string) => item.slice(9, -1));
      mentioncodes = mentioncodes.filter((item: string) => item !== target);
    }
    const variables = {
      input: {
        id,
        patch: {
          content: topicContent,
          mentioncodes
        }
      }
    }
    commitMutation(environment, {
      mutation: topicUpdateMutation,
      variables,
      onCompleted: (response) => {
        notification.open({
          message: '编辑成功',
        });
        onOk(response.updateTopic.topic.content);
      },
      onError: err => console.error(err),
    });
  };

  const editorChange = (value: any) => {
    setTopicContent(value);
  }

  return (
    <Drawer
      placement="bottom"
      visible={visible}
      onClose={onClose}
      destroyOnClose={true}
      className="comment-drawer"
    >
      <Comment
        avatar={<Avatar src={avatar} />}
        content={
          <Editor
            onChange={editorChange}
            value={topicContent}
          />
        }
      />
      <div style={{ position: 'fixed', right: 24, bottom: 10 }}>
        <Button onClick={onSubmit} type="primary">
          提交
        </Button>
      </div>
    </Drawer>
  );
}
