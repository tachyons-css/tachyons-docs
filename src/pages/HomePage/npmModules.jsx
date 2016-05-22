import React, { Component } from 'react'

const PROP_TYPES = {
  modules: React.PropTypes.array.isRequired,
}

export default class NpmModules extends Component {
  renderModules() {
    return this.props.modules.map( module => {
      return (
        <div key={module.name} className="mb3 fl w-100 w-50-m w-33-l">
          <a className="db f4 link mb1 dim near-black b" href={`http://npmjs.com/package/${module.name}`}>
            {module.name}
          </a>
          <div>
            <span className="fw4 pr2">v{module.version}</span>
            <span>{module.fileSize}</span>
            <a className="link dim near-black dib ml2 f6" href={`http://github.com/tachyons-css/${module.name}`}>View on GitHub</a>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <section className="ph3 ph5-ns bg-white cf pv5 pv6-ns" id="npm">
        <div className="fl w-100">
          <h1>
            <a href="#npm" className="link near-black">NPM</a>
          </h1>
          <p className="f5 f3-ns lh-copy mt0 mb4 measure">
            The main tachyons repo is just a group of of encapsulated css modules available on npm and github.
            You can grab the entire toolkit, or just a few selected modules.
            Mix and match them to suit your project's specific needs. Since tachyons modules are very focused on doing one thing well,
            most of them are extremely small (well under a kilobyte) so you
            can start using some or all of them without adding bloat to your css.
          </p>
          <code className="dib mb4 ba b--light-gray f6 ph2 pv3" style={{"backgroundColor": "#d1ffff"}}>npm install --save-dev tachyons-module-name</code>
        </div>
        {this.renderModules()}
      </section>
    )
  }
}

NpmModules.propTypes = PROP_TYPES;

