import React, { Component } from 'react';
import ModuleHeader from './moduleHeader'
import DocsContent from 'data/docsPage'
import ModuleStats from 'data/tachyonsStats'

export default class ModuleSection extends Component {
  getModuleStats() {
    return ModuleStats.find( module => {
      return module.id === `tachyons-${this.props.params.tachyonsModule}`;
    })
  }

  renderHeader() {
    const module = this.props.params.tachyonsModule;
    return (
      <ModuleHeader
        moduleName={module}
        moduleStats={this.getModuleStats()}
        />
    )
  }

  render() {
    return (
      <section>
        {this.renderHeader()}
      </section>
    )
  }
}

