import React, { Component } from 'react'
import { Link } from 'react-router'
import ModuleStats from 'data/tachyonsStats'
import { formatNickname, formatLabel } from '../../helpers/utils'

export default class DocsNav extends Component {

  getLinks(category) {
    return ModuleStats.filter( module => {
      if(module.category === category) {
        return module;
      }
    })
  }

  renderLinks(category) {
    const modules = this.getLinks(category);
    return modules.map( module => {
      let moduleName = module.nickName || module.name;
      const urlPath = formatNickname(module.name);
      const urlLabel = formatLabel(moduleName);
      return <Link key={urlPath} to={`/docs/${category}/${urlPath}`} className="f5 fw4 dim link blue db pv1">{urlLabel}</Link>
    })
  }

  render() {
    return (
      <div className="ph3 ph5-ns pt3 pb5">
        <section>
          <h2 className="f6 fw7 ttu tracked">Elements</h2>
          {this.renderLinks('elements')}

          <section className="cf w-100 mt3">
            <article className="fn fl-ns w-100 w-25-l">
              <h2 className="f6 fw7 ttu tracked" id="typography">Typography</h2>
              {this.renderLinks('typography')}
            </article>

            <article className="fn fl-ns w-100 w-25-l">
              <h2 className="f6 fw7 ttu tracked" id="layout">Layout</h2>
              {this.renderLinks('layout')}
            </article>

            <article className="fn fl-ns w-100 w-25-l">
              <h2 className="f6 fw7 ttu tracked">Theming</h2>
              {this.renderLinks('theming')}
            </article>

          </section>
        </section>
      </div>
    )
  }
}

