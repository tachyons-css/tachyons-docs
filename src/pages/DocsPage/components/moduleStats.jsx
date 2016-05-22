import React, { Component } from 'react'

const PROP_TYPES = {
  stats: React.PropTypes.object.isRequired,
}

export default class ModuleStats extends Component {
  render() {
    return (
      <div>
        <dl className="dib mr4 mt0">
          <dt className="f6 db">Declarations </dt>
          <dd className="db pl0 ml0 f4 f2-ns b">
            {this.props.stats.declarations}
          </dd>
        </dl>
        <dl className="dib mr4">
          <dt className="f6 db pr2">Selectors </dt>
          <dd className="db pl0 ml0 f4 f2-ns b">
            {this.props.stats.selectors}
          </dd>
        </dl>
        <dl className="dib mr4">
          <dt className="f6 db pr2">Max. Specificity Score </dt>
          <dd className="db pl0 ml0 f4 f2-ns b">
            {this.props.stats.specificity.max}
          </dd>
        </dl>
        <dl className="dib mr4">
          <dt className="f6 db pr2">Size of Avg. Rule </dt>
          <dd className="db pl0 ml0 f4 f2-ns b">
            {this.props.stats.rules.average}
          </dd>
        </dl>
      </div>
    )
  }
}

ModuleStats.propTypes = PROP_TYPES;

