import React, { Component } from 'react'
import ModulesSlabStat from 'components/modulesSlabStat'

const PROP_TYPES = {
  moduleStats: React.PropTypes.object.isRequired
}

export default class ModuleHeader extends Component {
  render() {

    const stats = this.props.moduleStats;

    return (
      <article className="bg-near-white bt b--black-10 pa3 ph5-ns">
        <h4 className="f4 mv0 fw6 dib mr4">
          {stats.name}
        </h4>
        <span className="f4 b dib pl0 ml0 mr4">{`v${stats.version}`}</span>
        <span className="f4 b dib pl0 ml0 mr4">{stats.fileSize}</span>
        <ModulesSlabStat stats={stats} />
      </article>
    )
  }
}

ModuleHeader.propTypes = PROP_TYPES;

