import fetch from 'isomorphic-fetch';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import Cookie from 'cookie';
import { Environment, Network, RecordSource, Store, FetchFunction, SubscribeFunction } from 'relay-runtime';
import { NextAppContext } from 'next/app';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import queryMapJson from '@regneva/server/src/persisted-queries.json';

export const createRelay = (apiEndpoint: string, records: any, ctx: any) => {
  let fetchQueryFn: FetchFunction
  let subscribeFn: SubscribeFunction | undefined
  if (!ctx.query) {
    fetchQueryFn = async (operation, variables) => {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ queryId: operation.id, variables }),
      });
      const json = await response.json();
      return json;
    }

    subscribeFn = async (operation: any, variables: any, cacheConfig: any, observer: any) => {
      const subscriptionClient = new SubscriptionClient(
        apiEndpoint.replace('http', 'ws'),
        { reconnect: true },
      )
      const queryText = (queryMapJson as any)[operation.id];
      const { unsubscribe } = await subscriptionClient.request({ query: queryText, variables })
        .subscribe({
          next: (data) => {
            observer.onNext(data);
          },
          error: observer.onError,
          complete: observer.onCompleted,
        })
      return { dispose: unsubscribe };
    }

  } else {
    fetchQueryFn = async (operation, variables) => {
      const { performQuery } = ctx.req;
      const response = await performQuery({ queryId: operation.id, variables });
      return response
    }
  }
  return new Environment({
    network: Network.create(fetchQueryFn, subscribeFn),
    store: new Store(new RecordSource(records)),
  });
};

export const colorsets = [
  'geekblue',
  'purple',
  'blue',
  'cyan',
  'green',
  'geekblue',
  'lime',
  'gold',
  'orange',
  'volcano',
  'magenta',
  'red'
]

export const randomColor = () => {
  const num = Math.ceil(Math.random() * 11)
  return colorsets[num]
}

export const getUser = (ck: any) => {
  try {
    const cks = Cookie.parse(ck);
    const token: any = cks.__jwt || '';
    const userInfo: any = jwtDecode(token) || { user: {} };

    return userInfo.user.id;
  } catch (error) {
    return ''
  }

}

export const defaultAvatar = '';

export const formatTime = (time: string) => {
  moment.locale('zh-cn');
  return moment(time).fromNow();
}

export const isPhone = (ua: any) => {
  let flag = false;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  for (let i = 0; i < Agents.length; i++) {
    if (ua && ua.indexOf(Agents[i]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
}

export const defaultQueryArgs: any = {
  isMobile: false,
  isHomePage: false,
  isSectionPage: false,
  isUserCenterPage: false,
  isOtherCenterPage: false,
  isUserEditPage: false,
  isTopicAddPage: false,
  isTopicPage: false,
  sectionId: 1,
  topicId: 1,
  userCode: 'admin',
  otherCode: 'admin',
  otherDelivered: { userCode: 'admin' },
  delivered: { userCode: 'admin' },
  participated: { userCode: 'admin' },
  mentioned: { targetUser: 'admin' },
  likes: { userCode: 'admin' }
}


export const getQueryArgs = (ctx: NextAppContext['ctx']) => {
  let userCode = '';
  let isMobile = false;
  let apiEndPoint = '';
  let environment;
  let variables;

  const defaultArgs = Object.assign({}, defaultQueryArgs);

  if (ctx.req) {
    apiEndPoint = `${(ctx.req as any).serverHost}/graphql`;
    userCode = getUser(ctx.req.headers.cookie) || 'admin';
    isMobile = isPhone(ctx.req.headers['user-agent']);
    environment = createRelay(apiEndPoint, {}, ctx);
    variables = {
      ...defaultArgs,
      ...ctx.query,
      userCode,
      participated: { userCode },
      delivered: { userCode },
      mentioned: { targetUser: userCode },
      likes: { userCode, topicId: (ctx.query.topicId || defaultArgs.topicId) }
    }
  } else {
    apiEndPoint = `${location.origin}/graphql`;
    userCode = getUser(document.cookie) || 'admin';
    isMobile = isPhone(navigator.userAgent);
    environment = createRelay(apiEndPoint, {}, {});
    const { nextUrl } = (window as any);
    if (nextUrl === '/') {
      defaultArgs.isHomePage = true;
    }
    if (nextUrl === '/topic/add') {
      defaultArgs.isTopicAddPage = true;
    }
    // 个人中心
    if (nextUrl === '/user/center') {
      defaultArgs.isUserCenterPage = true;
    }
    // 帖子详情
    if (nextUrl.match(/\/topic\/[0-9]+/)) {
      defaultArgs.isTopicPage = true;
      const id = +nextUrl.split('#')[0].split('/')[2];
      defaultArgs.topicId = id;
    }
    // 查看他人中心
    if (nextUrl.match(/\/user\/other\/[0-9a-zA-Z]+/)) {
      defaultArgs.isOtherCenterPage = true;
      const id = nextUrl.split('/')[3];
      defaultArgs.otherCode = id;
      defaultArgs.otherDelivered = {
        userCode: id,
      }
    }
    // 板块详情
    if (nextUrl.match(/\/section\/[0-9]+/)) {
      defaultArgs.isSectionPage = true;
      const id = +nextUrl.split('#')[0].split('/')[2];
      defaultArgs.sectionId = id;
      defaultArgs.sectionTopicCondition = {
        sectionId: id,
      }
    }

    console.log(userCode, '----')
    variables = {
      ...defaultArgs,
      userCode,
      participated: { userCode },
      delivered: { userCode },
      mentioned: { targetUser: userCode },
      likes: { userCode, topicId: defaultArgs.topicId }
    }
  }

  return {
    variables,
    apiEndPoint,
    isMobile,
    environment
  }
}
