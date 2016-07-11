import React, { Component } from 'react'

const PROP_TYPES = {
  title: React.PropTypes.string,
  items: React.PropTypes.array.isRequired,
}

export default class Principles extends Component {
  renderSections() {
    return this.props.items.map(item => {
      return (
        <article key={item.title} className="pv2 w-100">
          <h2 className="f4 f1-m f-headline-l fw6 mb0">
            {item.title}
          </h2>
          <p className="f5 f4-ns measure lh-copy mt0">
            {item.copy}
          </p>
        </article>
      )
    })
  }

  render() {
    return (
      <section className="ph3 ph5-ns tl tl-ns bt b--light-gray pv3 pv5-ns" id="principles">
        <h1 className="f5 ttu tracked fw6">
          {this.props.title}
        </h1>
        <section className="list pln lh-copy mt0">
          {this.renderSections()}
        </section>
      </section>
    )
  }
}

Principles.propTypes = PROP_TYPES;

