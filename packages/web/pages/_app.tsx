import * as React from 'react';
import Error from 'next/error';
import Router from 'next/router';
import App, { Container, NextAppContext } from 'next/app';
import { ReactRelayContext, fetchQuery } from 'react-relay';
import Layout from '@regneva/components/container';
import RouterProvider from '@regneva/components/routerProvider';
import { appQuery } from '@regneva/relay/custom/queries';
import { AppContext as MyAppContext } from '@regneva/hooks/useAppContext';
import { createRelay, getQueryArgs } from '../utils';
import { RegnevaProps } from '../utils/types';

// 路由变化，用于客户端逻辑获取参数
Router.events.on('routeChangeStart', (url: any) => {
  (window as any).nextUrl = url;
})
Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
})

export default class Regneva extends App<RegnevaProps> {
  static async getInitialProps({ ctx }: NextAppContext): Promise<RegnevaProps> {
    // 这里会区分服务端、客户端
    const { variables, isMobile, apiEndPoint, environment } = getQueryArgs(ctx);

    const props = {
      pageProps: { data: null },
      relayRecords: {},
      variables,
      isMobile,
      apiEndPoint,
      statusCode: ctx.res && ctx.res.statusCode,
    }

    // 服务端请求400以上
    if (props.statusCode != null && props.statusCode >= 400) {
      return props;
    }

    try {
      // environment会区分
      // 客户端 -> fetch
      // 服务端 -> graphql.execute
      props.pageProps.data = await fetchQuery(
        environment,
        appQuery,
        props.variables,
      );
    } catch (error) {
      console.log(`FETCHDATA ERROR: ${error}`);
      if (ctx.res && props.statusCode) {
        ctx.res.statusCode = props.statusCode;
      };
    }

    // 需要多一次createEnvironment，将服务端的data放入relay store
    props.relayRecords = environment
      .getStore()
      .getSource()
      .toJSON();

    return props;
  }

  render() {
    const { Component: Page, pageProps, relayRecords, statusCode, variables, isMobile, apiEndPoint } = this.props;

    if (statusCode != null && statusCode >= 400) {
      return <Error title="出错啦" statusCode={statusCode}/>
    }

    // 创建客户端environment
    // 传入初始化好了的relayRecords
    const environment = createRelay(
      apiEndPoint,
      relayRecords,
      {},
    );

    return (
      <Container>
        <ReactRelayContext.Provider
          value={{ environment, variables }}
        >
          <Layout data={pageProps.data} isMobile={isMobile}>
            {() => (
              <RouterProvider>
                {router => (
                  <MyAppContext.Provider
                    value={{ router }}
                  >
                    <Page {...pageProps} />
                  </MyAppContext.Provider>
                )}
              </RouterProvider>
            )}
          </Layout>
        </ReactRelayContext.Provider>
      </Container>
    )
  }
}

