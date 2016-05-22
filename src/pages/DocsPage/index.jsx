import React, { Component } from 'react'

import DocsHeader from './components/docsHeader'
import DocsContent from 'data/docsPage'
import ModuleStats from 'data/tachyonsStats'

export default class DocsPage extends Component {
  constructor(props){
    super(props);
    this.state = { currentModule: this.props.params.tachyonsModule };
  }

  getModuleStats() {
    return ModuleStats.find( module => {
      return module.id === `tachyons-${this.state.currentModule}`;
    })
  }

  renderHeader() {
    let module, primaryCopy, secondaryCopy;
    module = this.state.currentModule;

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

