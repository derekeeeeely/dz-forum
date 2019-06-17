import { ReactElement, FunctionComponent } from 'react';
import { withRouter, SingletonRouter } from 'next/router';

// Pass old React context into a new React context.

interface RouterProviderWithRouterProps {
  router: SingletonRouter;
  children: (router: SingletonRouter) => ReactElement<any>;
}

const RouterProviderWithRouter: FunctionComponent<
  RouterProviderWithRouterProps
> = props => {
  return props.children(props.router);
};

const RouterProvider = withRouter(RouterProviderWithRouter);

export default RouterProvider;