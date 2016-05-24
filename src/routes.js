import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './pages/root'
import HomePage from './pages/homePage'
import ComponentsPage from './pages/componentsPage'
import DocsPage from './pages/docsPage'
import ModuleDocs from './pages/docsPage/components/moduleDocs'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage}/>
    <Route path="/components" component={ComponentsPage}/>
    <Route path="/docs" component={DocsPage}>
      <Route path="/docs/:category/:tachyonsModule" component={ModuleDocs}/>
    </Route>
  </Route>
);
