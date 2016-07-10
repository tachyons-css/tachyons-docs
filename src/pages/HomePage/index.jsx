import React, { Component } from 'react'
import Intro from './intro'
import Principles from './principles'
import Features from './features'
import Testimonials from './testimonials'
import NpmModules from './npmModules'

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
      <main className="w-100 bt b--black-10">
        <Intro tachyons={this.getTachyonsStats()}/>
        <Principles items={PRINCIPLES} title="Principles" />
        <Features items={FEATURES} title="Features" />
        <Testimonials items={TESTIMONIALS} title="Testimonials" />
        <NpmModules modules={this.getTachyonsModulesStats()} />
      </main>
    )
  }
};

