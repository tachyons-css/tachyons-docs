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
        { this.props.children }
        <SiteFooter modules={this.getTachyonsModulesStats()}/>
      </div>
    );
  }
};
