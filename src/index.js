import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'
import routes from './routes'

// Client render
if (typeof document !== 'undefined') {
  ReactDOM.render((
    <Router history={browserHistory}>
      { routes }
    </Router>
  ), document.getElementById('outlet'));
}

// Render function for static-site-generator-webpack-plugin
export default ({ path, assets, template }, callback) => {
  const history = createMemoryHistory(path);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    const html = renderToString(
      <RouterContext {...renderProps} />
    );
    callback(null, template({ html, assets }));
  });
};
