import React, { Component } from 'react'
import ModuleStats from 'data/tachyonsStats'
import ModuleFooter from './moduleFooter'

import Forms from './modules/forms'

const Modules = {
  'forms': Forms
}

export default class ModuleSection extends Component {
  getModuleStats() {
    return ModuleStats.find( module => {
      return module.id === `tachyons-${this.props.params.tachyonsModule}`;
    })
  }

  renderModuleSection() {
    const CurrentModule = Modules[this.props.params.tachyonsModule];
    return <CurrentModule moduleStats={this.getModuleStats()} />
  }

  render() {
    return (
      <div>
        {this.renderModuleSection()}
        <ModuleFooter currentModule={`tachyons-${this.props.params.tachyonsModule}`} />
      </div>
    )
  }
}

