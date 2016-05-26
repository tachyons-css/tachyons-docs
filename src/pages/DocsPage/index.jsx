import React, { Component } from 'react'
import DocsNav from './docsNav'

export default class DocsPage extends Component {
  render() {
    return (
      <section>
        {this.props.children}
        <DocsNav />
      </section>
    )
  }
}


