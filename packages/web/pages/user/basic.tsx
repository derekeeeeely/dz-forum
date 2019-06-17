import { FunctionComponent } from 'react';
import { Divider, Icon, Badge } from 'antd';
import useLayoutContext from '@regneva/hooks/useLayoutContext';
import useAppContext from '@regneva/hooks/useAppContext';
import { defaultAvatar } from '../../utils';

const BasicInfo: FunctionComponent<any> = (props: any)  => {
  const { others } = props;
  const { router } = useAppContext();
  let user;
  if (others) {
    user = others;
  } else {
    user = useLayoutContext().user;
  }
  const { avatar, name, nickname, isonline, age, sex, signature, about } = user;

  return (
    <div className="user-basic">
      <Divider><img src={avatar || defaultAvatar} /></Divider>
      <p>
        <Badge status={isonline ? 'success' : 'default'} />
        <span style={{ marginRight: 20 }}>{nickname || name}</span>
        <span>{age}</span>
        <Icon type={sex === 1 ? 'man' : 'woman'} />
      </p>
      <p>{signature}</p>
      <div dangerouslySetInnerHTML={{ __html: about }} />
      {others ? '' : (
        <a style={{ marginLeft: 20 }} onClick={() => router.push('/user/useredit', '/user/edit')}>
          修改个人信息
      <Icon type="edit" />
        </a>
      )}
    </div>
  );
}

export default BasicInfo;