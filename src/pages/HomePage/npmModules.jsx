import React, { Component } from 'react'

const PROP_TYPES = {
  modules: React.PropTypes.array.isRequired,
}

export default class NpmModules extends Component {
  renderModules() {
    return this.props.modules.map( module => {
      return (
        <div key={module.name} className="mb3 mb4-ns fl w-100 w-50-m w-33-l">
          <a className="db f5 link mb1 dim near-black b" href={`http://github.com/tachyons-css/${module.name}`}>
            {module.name}
          </a>
          <code className="f6 di fw4 pr2">v{module.version}</code>
          <code className="f6 di black-60">{module.fileSize}</code>
        </div>
      )
    })
  }
  render() {
    return (
      <section className="ph3 ph5-ns bg-white cf pv5 pv6-ns" id="modules">
        <div className="fl w-100">
          <h1 className="f5 fw6 ttu tracked">
            <a href="#npm" className="link near-black">Module List</a>
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

        <div className="fl w-100">
          <h1 className="f5 fw6 ttu tracked">
            <a href="#related-projects" className="link near-black">Related Projects</a>
          </h1>
          <a className="db link f5 dim black-70" href="https://github.com/fab1an/react-native-tachyons">react native tachyons</a>
          <a className="db link f5 dim black-70" href="https://github.com/tachyons-css/tachyons-webpack">tachyons webpack</a>
          <a className="db link f5 dim black-70" href="http://basscss.com">BassCss</a>
        </div>
      </section>
    )
  }
}

NpmModules.propTypes = PROP_TYPES;

