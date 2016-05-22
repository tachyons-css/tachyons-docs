import React, { Component } from 'react'
import { Link } from 'react-router';
import Intro from './intro'
import Testimonials from './testimonials'
import NpmModules from './npmModules'
import TwoColList from './components/twoColList'

import {PRINCIPLES, FEATURES, TESTIMONIALS} from 'src/data/homepageContent'
import ModuleStats from 'src/data/tachyonsStats'

export default class HomePage extends Component {
  //TODO: this is duplicate code from Root.jsx
  // Change the way data flows through app by either using Redux or React context when it's more stable (also check performance implications)
  // After you choose one, ONLY call these methods once and then pass the data through props
  getTachyonsStats() {
    return ModuleStats.find( module => {
      return module.id === 'tachyons';
    });
  }

  getTachyonsModulesStats() {
    return ModuleStats.filter( module => {
      return module.id !== 'tachyons';
    });
  }

  render() {
    return (
      <main className="w-100">
        {/*
          //Testing out Nested links for the doc pages
          <Link to="/docs/links" className="dib f5 f4-ns fw6 mt0 mb1 link black-70 dim"> Links </Link>
          <Link to="/docs/lists" className="dib f5 f4-ns fw6 mt0 mb1 link black-70 dim"> Lists </Link>
          */}
        <section className="bt b--black-10 bg-black-0125 w-100 pv5 pv6-ns">
          <Intro tachyons={this.getTachyonsStats()}/>
          <TwoColList items={PRINCIPLES} title="Principles" />
          <TwoColList items={FEATURES} title="Features" />
        </section>
        <Testimonials items={TESTIMONIALS} title="Testimonials" />
        <NpmModules modules={this.getTachyonsModulesStats()} />
      </main>
    )
  }
};

