import React, { Component } from 'react'
import ModuleStats from './moduleStats'

const PROP_TYPES = {
  moduleStats: React.PropTypes.object.isRequired,
  primaryCopy: React.PropTypes.string,
  secondaryCopy: React.PropTypes.string,
}

export default class DocsHeader extends Component {
  render() {

    const stats = this.props.moduleStats;

    return (
      <article className="bg-near-white bt b--black-10 pa3 ph5-ns">
        <h4 className="f4 mv0 fw6 dib mr4">
          {stats.name}
        </h4>
        <span className="f4 b dib pl0 ml0 mr4">{`v${stats.version}`}</span>
        <span className="f4 b dib pl0 ml0 mr4">{stats.fileSize}</span>

        <ModuleStats stats={stats} />

        <p className="measure f4 f3-ns lh-copy">
          {this.props.primaryCopy}
        </p>
        <p className="measure lh-copy f5 f4-ns">
          {this.props.secondaryCopy}
        </p>
      </article>
    )
  }
}

DocsHeader.propTypes = PROP_TYPES;

