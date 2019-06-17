import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { FunctionComponent } from 'react';
import { Form, Button, Input, InputNumber, Radio, notification, Upload, Icon } from 'antd';
import { commitMutation } from 'react-relay';
import Panel from '@regneva/components/panel';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import useRelayContext from '@regneva/hooks/useRelayContext';
import useAppContext from '@regneva/hooks/useAppContext';
import { userEditMutation } from '@regneva/relay/custom/mutations';
import { UserEditProps } from '../../utils/types';
import './index.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { useState } = React;
const defaultLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const Editor = dynamic(
  () => import('@regneva/components/editor'),
  { ssr: false }
)
const UserEdit: FunctionComponent<UserEditProps> = (props: UserEditProps) => {
  const { user: { userCode, name, nickname, sex, age, avatar, signature, about } } = useLayoutContext();
  const { environment } = useRelayContext();
  const { router } = useAppContext();

  const {form: { getFieldDecorator }} = props;

  const [img, setImg] = useState(avatar);

  const handleImgChange = (info: any) => {
    if (info.file.status === 'done') {
      const url = info.file.response.data;
      setImg(url);
    }
  };

  const submit = () => {
    props.form.validateFieldsAndScroll((error: any, values: any) => {
      if (error) {
        return;
      }
      values.avatar = img;
      const variables = {
        input: {
          code: userCode,
          patch: values,
        },
      };
      commitMutation(environment, {
        mutation: userEditMutation,
        variables,
        onCompleted: () => {
          notification.open({
            message: '更新成功',
          });
          router.back();
        },
        onError: err => console.error(err),
      });
    });
  };

  return (
    <Panel>
      <Head>
        <title>个人信息编辑</title>
      </Head>
      <FormItem label="姓名" {...defaultLayout}>
        {getFieldDecorator('name', {
          initialValue: name,
        })(<Input disabled={true} />)}
      </FormItem>
      <FormItem label="昵称" {...defaultLayout}>
        {getFieldDecorator('nickname', {
          initialValue: nickname,
        })(<Input />)}
      </FormItem>
      <FormItem label="性别" {...defaultLayout}>
        {getFieldDecorator('sex', {
          initialValue: sex,
        })(
          <RadioGroup>
            <Radio value={1}>汉子</Radio>
            <Radio value={2}>仙女</Radio>
          </RadioGroup>
        )}
      </FormItem>
      <FormItem label="年龄" {...defaultLayout}>
        {getFieldDecorator('age', {
          initialValue: age,
        })(<InputNumber />)}
      </FormItem>
      <FormItem label="头像" {...defaultLayout}>
        {getFieldDecorator('avatar', {
          initialValue: avatar,
        })(
          <Upload
            action="/upload"
            listType="picture-card"
            showUploadList={false}
            onChange={handleImgChange}
          >
            {img ? (
              <img style={{ width: 200, height: 200 }} src={img} alt="" />
            ) : (
                <Icon type="plus" />
              )}
          </Upload>
        )}
      </FormItem>
      <FormItem label="签名" {...defaultLayout}>
        {getFieldDecorator('signature', {
          initialValue: signature,
        })(<Input />)}
      </FormItem>
      <FormItem label="关于我" {...defaultLayout}>
        {getFieldDecorator('about', {
          initialValue: about,
        })(<Editor mention={false}/>)}
      </FormItem>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={submit} type="primary">
          提交
        </Button>
      </div>
    </Panel>
  );
};

export default Form.create()(UserEdit);