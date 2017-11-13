/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/components/Home/HomePage').default);
        });
      }}
    />
    <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/components/Login/Login').default);
        });
      }}
    />
    <Route
      path="/resources"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/components/Resources/ResourcesPage').default);
        });
      }}
    />
    <Route
      path="/resource/:resourceId"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/components/Resources/ResourceDetailPage').default);
        });
      }}
    />
  </Route>
);
