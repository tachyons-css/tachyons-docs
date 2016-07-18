import React, { Component } from 'react'
import ModuleStats from 'data/tachyonsStats'

const PROP_TYPES = {
  currentModule: React.PropTypes.string
}

export default class ModuleFooter extends Component {
  render() {
    return (
      <section>
        <div className="mt5 cf">
          <div className="dib mr4">
            <h1 className="f4 ttu tracked fw6">Previous</h1>
            <a href="/docs/elements/lists/" className="link fw6 blue dim">Lists</a>
          </div>
          <div className="dib">
            <h1 className="f4 ttu tracked fw6">Next</h1>
            <a href="/docs/typography/scale/" className="link fw6 blue dim">Type Scale</a>
          </div>
        </div>
        <div className="mt5">
          <h1 className="f4 ttu tracked fw6">Reference</h1>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover" className="link db fw6 blue dim">MDN - Hover</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus" className="link db fw6 blue dim">MDN - Focus</a>
        </div>
      </section>
    )
  }
}

ModuleFooter.propTypes = PROP_TYPES;

