import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SiteHeader from './siteHeader'
import SiteFooter from './siteFooter'
import ModuleStats from '../data/tachyonsStats'
import {checkPerformance} from '../helpers/utils'

export default class Root extends Component {
  getTachyonsStats() {
    return ModuleStats.find( module => {
      return module.id === 'tachyons';
    });
  }

  getTachyonsModulesStats() {
    return ModuleStats.filter( module => {
      return module.id !== 'tachyons';
    });
  }

  render() {
    return (
      <div>
        <SiteHeader tachyons={this.getTachyonsStats()} />
        <main>
          { this.props.children }
        </main>
        <SiteFooter modules={this.getTachyonsModulesStats()}/>
      </div>
    );
  }
};
