import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './pages/root'
import HomePage from './pages/homePage'
import ComponentsPage from './pages/componentsPage'
import DocsPage from './pages/docsPage'
import ModuleSection from './pages/docsPage/moduleSection'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage}/>
    <Route path="/components" component={ComponentsPage}/>
    <Route path="/docs" component={DocsPage}>
      <Route path="/docs/:category/:tachyonsModule" component={ModuleSection}/>
    </Route>
  </Route>
);
