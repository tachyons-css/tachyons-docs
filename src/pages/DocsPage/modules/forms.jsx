import React, { Component } from 'react'
import ModuleHeader from '../moduleHeader'

const PROP_TYPES = {
  moduleStats: React.PropTypes.object.isRequired
}

export default class Forms extends Component {
  renderHeader() {
    return (
      <ModuleHeader moduleStats={this.props.moduleStats}>
        <p className="measure f4 f3-ns lh-copy">
          Tachyons has some basic form control resets to remove default styles for mobile devices.
        </p>
      </ModuleHeader>
    )
  }

  renderExamples() {
    return (
      <div className="ph3 ph5-ns pt4 pb5">
        <h2 className="f3 bold">Examples</h2>
        <form>
          <label htmlFor="inputReset">
            <code className="f6 db">input-reset</code>
          </label>
          <input id="inputReset" type="text" className="input-reset" />
          </form>
        </div>
    )
  }

  render() {
    return (
      <section>
        {this.renderHeader()}
        {this.renderExamples()}
      </section>
    )
  }
}

