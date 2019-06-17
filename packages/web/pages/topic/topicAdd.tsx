import { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Form, Button, Input, Select, notification } from 'antd';
import { commitMutation, graphql, createFragmentContainer } from 'react-relay';
import Panel from '@regneva/components/panel';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import useAppContext from '@regneva/hooks/useAppContext';
import useRelayContext from '@regneva/hooks/useRelayContext';
import { topicAddMutation } from '@regneva/relay/custom/mutations';
import { TopicAddProps } from '../../utils/types';

const FormItem = Form.Item;
const { Option } = Select;
const defaultLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const Editor = dynamic(
  () => import('@regneva/components/editor'),
  { ssr: false }
)
const TopicAdd = (props: TopicAddProps) => {
  const { user: { userCode } } = useLayoutContext();
  const { environment } = useRelayContext();
  const { router } = useAppContext();

  // 来自板块区时设置默认板块
  useEffect(() => {
    const { state: { options: { sectionId } } } = window.history;
    if (sectionId) {
      const { setFieldsValue } = props.form;
      setFieldsValue({ sectionId });
    }
  }, [])

  const {
    data: { lv2Section, tags },
    form: { getFieldDecorator },
  } = props;

  const showSections = lv2Section.filter(item => item.parent);

  const openNotification = (topicId: number) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          router.push(`/topic/$tid`, `/topic/${topicId}`);
          notification.close(key);
        }}
      >
        走起
      </Button>
    );
    notification.open({
      message: '发帖成功',
      description: '小姐姐已经迫不及待围观了哦，快去看看吧~',
      btn,
      key,
    });
  };

  const submit = () => {
    props.form.validateFieldsAndScroll((error, values) => {
      if (error) {
        return;
      }

      const mentions = values.content && values.content.match(/data\-id="[a-zA-Z0-9]*"/g)
      let mentioncodes: any = null;
      if (mentions) {
        mentioncodes = mentions.map((item: string) => item.slice(9, -1));
      }
      const variables = {
        input: {
          topic: {
            ...values,
            userCode,
            mentioncodes
          },
        },
      };
      commitMutation(environment, {
        mutation: topicAddMutation,
        variables,
        onCompleted: (response) => {
          const {
            createTopic: {
              topic: { topicId },
            },
          } = response;
          openNotification(topicId);
          props.form.resetFields();
        },
        onError: err => console.error(err),
      });
    });
  };

  return (
    <Panel>
      <Head>
        <title>发帖</title>
      </Head>
      <FormItem label="版块" {...defaultLayout}>
        {getFieldDecorator('sectionId', {
          rules: [
            {
              required: true,
              message: '版块必选',
            },
          ],
        })(
          <Select style={{ width: '100%' }}>
            {showSections.map(item => (
              <Option key={item.name} value={item.sectionId}>
                {item.name}
              </Option>
            ))}
          </Select>
        )}
      </FormItem>
      <FormItem label="标签" {...defaultLayout}>
        {getFieldDecorator('tags', {
        })(
          <Select style={{ width: '100%' }} mode="tags">
            {tags.map((item) => (
              <Option key={item.name || ''} value={item.name || ''}>
                {item.name}
              </Option>
            ))}
          </Select>
        )}
      </FormItem>
      <FormItem label="标题" {...defaultLayout}>
        {getFieldDecorator('title', {
          rules: [
            {
              required: true,
              message: '标题必填',
            },
          ],
        })(<Input />)}
      </FormItem>
      <div className="form-editor">
        <FormItem label="内容" {...defaultLayout}>
          {getFieldDecorator('content', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '内容必填',
              },
            ],
          })(<Editor />)}
        </FormItem>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button onClick={submit} type="primary" style={{ margin: '0 5px' }}>
          发布
        </Button>
        <Button onClick={() => router.back()} type="primary" style={{ margin: '0 5px' }}>
          返回
        </Button>
      </div>
    </Panel>
  );
};

export default createFragmentContainer(Form.create()(TopicAdd), {
  data: graphql`
    fragment topicAdd_data on Query {
      lv2Section: sectionsList(first: 20) {
        sectionId: id
        name
        parent
      }
      tags: tagsList{
        ...fragments_tagsList @relay(mask: false)
      }
    }
  `,
});
