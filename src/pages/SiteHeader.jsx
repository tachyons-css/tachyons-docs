import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class SiteHeader extends Component {

  render() {
    return (
      <header className="w-100 dt pa3 ph5-ns bg-near-white">
        <div className="dtc v-mid tl w-50">
          <Link to="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70 dim">
            Tachyons
            <div className="dib">
              <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">&nbsp; v{this.props.tachyons.version}</small>
            </div>
          </Link>
        </div>

        <nav className="db dtc v-mid w-100 tr">
          <Link to="/docs" className="f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
            Docs
          </Link>
          <Link to="/components" className="f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
            Components
          </Link>
          <a title="Tachyons on GitHub" href="http://github.com/mrmrs/tachyons/" className="f6 fw6 dim link black-70 mr1 mr3-m mr4-l dn dib-ns">
            GitHub
          </a>
        </nav>
      </header>
    )
  }
};
