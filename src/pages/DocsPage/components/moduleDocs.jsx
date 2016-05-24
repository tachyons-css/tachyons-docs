import React, { Component } from 'react';
import DocsHeader from './docsHeader'
import DocsContent from 'data/docsPage'
import ModuleStats from 'data/tachyonsStats'

export default class ModuleDocs extends Component {
  getModuleStats() {
    return ModuleStats.find( module => {
      return module.id === `tachyons-${this.props.params.tachyonsModule}`;
    })
  }

  renderHeader() {
    let module, primaryCopy, secondaryCopy;
    module = this.props.params.tachyonsModule;

    if(DocsContent[module]){
      primaryCopy = DocsContent[module].PRIMARY_COPY ? DocsContent[module].PRIMARY_COPY : null;
      secondaryCopy = DocsContent[module].SECONDARY_COPY ? DocsContent[module].SECONDARY_COPY : null;
    }
    return (
      <DocsHeader
        moduleName={module}
        primaryCopy={primaryCopy}
        secondaryCopy={secondaryCopy}
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

