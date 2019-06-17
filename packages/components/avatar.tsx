import { Avatar, Popover, Icon } from 'antd';
import { defaultAvatar } from '@regneva/web/utils';
import useAppContext from '@regneva/hooks/useAppContext';
import useLayoutContext from '@regneva/hooks/useLayoutContext';

export const UserCard = (props: any) => {
  const { user: { userCode: currentUser } } = useLayoutContext();
  const { name, nickname, age, sex, about, signature, avatar, userCode } = props;
  const { router } = useAppContext();
  return (
    <div className="avatar-pop">
      <img src={avatar || defaultAvatar}/>
      {currentUser === userCode ? (
        <p className="avatar-des">没错，就是你，帅气逼人的你自己</p>
      ) : (
        <>
          <p className="avatar-des">
            <span style={{ marginRight: 5 }}>{nickname || name}</span>
            <span>{age}</span>
            <Icon type={sex === 1 ? 'man' : 'woman'} />
          </p>
          <p className="avatar-des">{signature}</p>
          <div className="avatar-des" dangerouslySetInnerHTML={{ __html: about }} />
          <a onClick={() => {
            router.push(`/user/$uid`, `/user/other/${userCode}`)
          }}>去看看</a>
        </>
      )}
    </div>
  )
}

export default function DAvatar(props: any) {
  return (
    <Popover content={<UserCard {...props} />} trigger="click">
      <Avatar src={props.avatar || defaultAvatar}/>
    </Popover>
  )
}