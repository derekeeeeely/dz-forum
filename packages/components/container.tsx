import Head from 'next/head';
import { ReactElement, FunctionComponent, useEffect } from 'react';
import { graphql, createFragmentContainer , requestSubscription, commitMutation } from 'react-relay';
import { Layout, Menu, Icon, Dropdown, Avatar, BackTop, Button, notification, Badge } from 'antd';
import { withRouter, SingletonRouter } from 'next/router';
import useRelayContext from '@regneva/hooks/useRelayContext';
import { LayoutContext } from '@regneva/hooks/useLayoutContext';
import { subscribeComment, subscribeMention } from '@regneva/relay/custom/subscriptions';
import { markCommentAsread, markMentionAsread } from '@regneva/relay/custom/mutations';
import './index.less';

interface LayoutProps {
  data: any;
  children: () => ReactElement<any> | null;
  router: SingletonRouter,
  isMobile: boolean
}

const { Header, Content, Footer } = Layout;

const Container: FunctionComponent<LayoutProps> = ({ children, data, router, isMobile }) => {
  const { user: { name, avatar, userCode, unreadCommentNum, unreadMentionNum, nickname } } = data;
  const { environment } = useRelayContext();

  /**
   * 去看看时标记为已读
   * @param id 回复id || 艾特id
   */
  const markAsread = (id: any, type: string) => {
    const variables = {
      input: {
        usercode: userCode,
      },
      userCode
    };
    if (type === 'comment') {
      (variables.input as any).commentid = id;
    }
    if (type === 'mention') {
      (variables.input as any).mentionid = id;
    }
    commitMutation(environment, {
      mutation: type === 'comment' ? markCommentAsread : markMentionAsread,
      variables,
      onCompleted: () => {},
      onError: err => console.error(err),
      updater: (store, res) => {
        const user: any = store.get(`client:root:user(code:"${userCode}")`);
        const unreadCommentNum = +res.markCommentAsread.query.user.unreadCommentNum;
        const unreadMentionNum = +res.markCommentAsread.query.user.unreadMentionNum;
        user.setValue(unreadCommentNum, 'unreadCommentNum');
        user.setValue(unreadMentionNum, 'unreadMentionNum');
      }
    });
  }

  /**
 * 更新未读消息数
 */
  const updateStore = (store: any, type: string) => {
    const user: any = store.get(`client:root:user(code:"${userCode}")`);
    if (type === 'comment') {
      const unreadCommentNum = +user.getValue('unreadCommentNum');
      user.setValue(unreadCommentNum + 1, 'unreadCommentNum');
    } else {
      const unreadMentionNum = +user.getValue('unreadMentionNum');
      user.setValue(unreadMentionNum + 1, 'unreadMentionNum');
    }
  }

  /**
   * 订阅评论通知
   */
  const commentNotify = (data: any) => {
    const { userByUserCode: { name }, commentId, topic: { topicId, title } } = (data as any).listen.query.getUserReceivedCommentsList[0];

    const key = `notify${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          router.push(`/topic/$tid`, `/topic/${topicId}#${commentId}`);
          notification.close(key);
          markAsread(commentId, 'comment')
        }}
      >
        去看看
      </Button>
    );
    const description = `${name} 在您的帖子： ${title} 回复你啦，快去看看吧~`;
    document.title = description;

    notification.open({
      duration: 10,
      message: '收到新的评论',
      btn,
      key,
      description
    });
  }

  /**
   * 订阅mention通知
   */
  const mentionNotify = (data: any) => {
    const { userByUserCode: { name }, commentId, topic: { topicId, title } } = (data as any).listen.query.getUserReceivedMentionsList[0];

    const key = `notify${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          router.push(`/topic/$tid`, `/topic/${topicId}#${commentId}`);
          notification.close(key);
          markAsread(commentId, 'mention')
        }}
      >
        去看看
      </Button>
    );
    const description = `${name} 在帖子： ${title} @你啦，快去看看吧~`;
    document.title = description;

    notification.open({
      duration: 10,
      message: '收到新的@',
      description,
      btn,
      key,
    });
  }


  useEffect(() => {
    const disposeableCommnet = requestSubscription(
      environment,
      {
        subscription: subscribeComment,
        variables: { userCode, topicName: `oncomment_${userCode}` },
        onCompleted: () => {},
        onNext: commentNotify,
        updater: data => updateStore(data, 'comment'),
        onError: error => console.error(error),
      }
    );
    return () => {
      disposeableCommnet.dispose();
    };
  }, [])

  useEffect(() => {
    const disposeableMention = requestSubscription(
      environment,
      {
        subscription: subscribeMention,
        variables: { userCode, condition: { targetUser: userCode }, topicName: `onmention_${userCode}` },
        onCompleted: () => {},
        onNext: mentionNotify,
        updater: data => updateStore(data, 'mention'),
        onError: error => console.error(error),
      }
    );
    return () => {
      disposeableMention.dispose();
    };
  }, [])

  const logout = () => {
    window.location.href = '/logout';
  };

  const goAddTopic = () => {
    let sectionId;
    if (location.pathname.match(/\/section\/[0-9]+/)) {
      sectionId = +location.pathname.replace('/section/', '');
    }
    router.push('/topic/topicAdd', '/topic/add', { sectionId })
  }

  const menu = (
    <Menu selectedKeys={[]}>
      <Menu.Item key="logout" onClick={logout}>
        <Icon type="logout" />
        退出
      </Menu.Item>
      <Menu.Item key="/user" onClick={() => router.push('/user', '/user/center')}>
        个人中心
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Head>
        <title>Regneva社区</title>
      </Head>
      <Header className="regneva-head">
        <div
          className="regneva-logo"
          onClick={() => router.push('/home', '/')}
        >
          <img src='/static/logo.svg' />
          <span>Regeneva</span>
        </div>
        <div className="regneva-user">
          <Dropdown overlay={menu} trigger={['click']}>
            <span>
              <Badge count={(+unreadMentionNum) + (+unreadCommentNum)}>
                <Avatar size="small" src={avatar}/>
              </Badge>
              <span style={{ marginLeft: 5 }}>{nickname || name}</span>
            </span>
          </Dropdown>
        </div>
      </Header>
      <Content className="regneva-container">
        <LayoutContext.Provider value={{ user: data.user, isMobile }}>
          {children()}
        </LayoutContext.Provider>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Copyright <Icon type="copyright" /> 2019 derekzhou
      </Footer>
      {router.pathname !== '/topic/topicAdd' && (
        <Button
          type="primary"
          className="go-topic"
          onClick={goAddTopic}
        ><Icon type="plus" /></Button>
      )}
      <BackTop />
    </Layout>
  )
};

export default createFragmentContainer(withRouter(Container), {
  data: graphql`
    fragment container_data on Query
    @argumentDefinitions(userCode: { type: "String!" }){
      user(code: $userCode){
        ...fragments_userBasic @relay(mask: false)
      }
    }
  `
});
