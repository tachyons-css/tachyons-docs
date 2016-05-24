import React, { Component } from 'react'
import { Link } from 'react-router'

export default class DocsNav extends Component {

  render() {
    return (
      <footer>
        <Link to="/docs/elements/links" className="dib f5 f4-ns fw6 mt0 mb1 link black-70 dim"> Links </Link>
        <Link to="/docs/elements/lists" className="dib f5 f4-ns fw6 mt0 mb1 link black-70 dim"> Lists </Link>
      </footer>
    )
  }
}

