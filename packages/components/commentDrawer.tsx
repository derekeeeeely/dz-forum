import * as React from 'react';
import dynamic from 'next/dynamic';
import { Comment, Avatar, Drawer, Button, notification } from 'antd';
import { commitMutation } from 'react-relay';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import { addCommentMutation } from '@regneva/relay/custom/mutations'
import './index.less';

interface CommentDrawerProps{
  visible: boolean,
  onClose: () => void,
  onOk: () => void,
  data: any,
}
const Editor = dynamic(
  () => import('@regneva/components/editor'),
  { ssr: false }
)
export default function CommentDrawer(props: CommentDrawerProps) {
  const { useState } = React;
  const { user: { userCode, avatar } } = useLayoutContext();
  const { environment } = useRelayContext();

  const { visible, onClose, onOk, data } = props;
  const { topicId, commentId, content, targetCode } = data;

  const [commentContent, setCommentContent] = useState(content);

  const onSubmit = () => {
    const mentions = commentContent.match(/data\-id="[a-zA-Z0-9]*"/g)
    let mentioncodes: any = null;
    if (mentions) {
      mentioncodes = mentions.map((item: string) => item.slice(9, -1));
      mentioncodes = mentioncodes.filter((item: string) => item !== targetCode);
    }
    const variables = {
      input: {
        comment: {
          topicId,
          userCode,
          content: commentContent,
          parentId: commentId,
          targetUser: targetCode,
          mentioncodes
        },
      },
    };
    commitMutation(environment, {
      mutation: addCommentMutation,
      variables,
      onCompleted: () => {
        notification.open({
          message: '回复成功',
        });
        onOk();
      },
      onError: err => console.error(err),
    });
  };

  const editorChange = (value: any) => {
    setCommentContent(value);
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
        avatar={<Avatar src={avatar}/>}
        content={<Editor
          onChange={editorChange}
          value={commentContent}
        />}
      />
      <div style={{ position: 'fixed', right: 24, bottom: 10 }}>
        <Button onClick={onSubmit} type="primary">
          提交
        </Button>
      </div>
    </Drawer>
  );
}
