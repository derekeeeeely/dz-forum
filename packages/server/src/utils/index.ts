/**
 * 服务端渲染时获取graphql query变量
 * @param url 访问url
 */
export function getParamPathFromUrl(url) {
  const params: any = {};
  let path: string = '';
  let needCache = false;
  if (url === '/') {
    params.isHomePage = true;
    path = '/home';
    // needCache = true;
  }
  if (url === '/user/center') {
    params.isUserCenterPage = true;
    path = '/user';
  }
  if (url === '/user/edit') {
    path = '/user/useredit';
  }
  if (url === '/topic/add') {
    params.isTopicAddPage = true;
    path = '/topic/topicAdd';
  }
  // 帖子详情
  if (url.match(/\/topic\/[0-9]+/)) {
    params.isTopicPage = true;
    const id = +url.split('/')[2];
    params.topicId = id;
    path = '/topic/$tid';
  }
  // 查看他人中心
  if (url.match(/\/user\/other\/[0-9a-zA-Z]+/)) {
    params.isOtherCenterPage = true;
    const id = url.split('/')[3];
    params.otherCode = id;
    params.otherDelivered = {
      userCode: id,
    }
    path = '/user/$uid';
  }
  // 板块详情
  if (url.match(/\/section\/[0-9]+/)) {
    params.isSectionPage = true;
    const id = +url.split('/')[2];
    params.sectionId = id;
    params.sectionTopicCondition = {
      sectionId: id,
    }
    path = '/section/$sid';
  }
  return {
    params,
    path,
    needCache
  }
}
