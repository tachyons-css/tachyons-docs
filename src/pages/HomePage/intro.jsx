import React, { Component } from 'react'

const PROP_TYPES = {
  tachyons: React.PropTypes.object.isRequired,
}

export default class Intro extends Component {
  render() {
    return (
      <section className="bt b--black-10 bg-black-0125 w-100">
        {/*
          Intro Nav and Hero =================================================
        */}
        <article className="pb4 pb5-ns" style={{"backgroundColor": "#1b418d"}}>
          <header className="ph3 ph5-ns w-100 bg-transparent pv3 mb5 bb b--black-20">
            <div className="nowrap">
              <a title="Getting Started" href="#getting-started"
                className="pb2-ns f6 fw6 dim link white-80 mr2 mr3-m mr4-l dib">
                Getting Started
              </a>
              <a title="Principles" href="#principles"
                className="pb2-ns f6 fw6 dim link white-80 mr1 mr3-m mr4-l dib">
                Principles
              </a>
              <a title="Features" href="#features"
                className="pb2-ns f6 fw6 dim link white-80 mr1 mr3-m mr4-l dib">
                Features
              </a>
              <a title="Features" href="#testimonials"
                className="pb2-ns f6 fw6 dim link white-80 mr1 mr3-m mr4-l dib">
                Testimonials
              </a>
              <a title="Modules List" href="#modules"
                className="pb2-ns f6 fw6 dim link white-80 mr1 mr3-m mr4-l dib">
                Modules
              </a>
            </div>
          </header>
          <div className="cf ph3 ph5-ns">
            <div className="fl w-100">
              <iframe src="https://ghbtns.com/github-btn.html?user=tachyons-css&repo=tachyons&type=star&count=true" frameBorder="0" scrolling="0" width="100px" height="20px" className="mr2"></iframe>
              <iframe src="https://ghbtns.com/github-btn.html?user=tachyons-css&repo=tachyons&type=fork&count=true" frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
            </div>
            <div className="pb3 pt4 white-80 fl-l w-50-l">
              <h1 className="f4 f1-ns lh-title measure mtn">
                Built for designing.
              </h1>
              <p className="f5 f4-ns fw6 b measure lh-copy">
                Create fast loading, highly readable, and
                100% responsive interfaces with as little css as possible.
              </p>
              <p className="measure f5 f4-ns lh-copy dn">
                Modules can be altered, extended, or changed to meet your design needs.
                You shouldn't need to write css everytime you want to build a new
                ui component. By learning the composable building blocks in tachyons, you
                can quickly start to build out interfaces while writing little to no css.
              </p>
            </div>
            <div className="fl-l w-50-l tl tc-ns pt4 pt5-ns">
              <a className="dib ba b--black-20 bg-black-05 f5 small-caps ph4 pv3 link br2 white grow" href="https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.min.css">Download Tachyons</a>
              <div className="tc-ns mt2">
                <code className="f6 di white-60 mono">
                  v{this.props.tachyons.version}
                </code>
              </div>
            </div>
          </div>
        </article>

        {/*
          Getting Started =================================================
        */}
        <article className="bt b--black-10 white-80 ph3 ph5-ns pv4 pv5-ns" style={{"backgroundColor": "#1b418d"}} id="getting-started">
          <h1 className="mtn f5 ttu">Getting Started</h1>
          <p className="measure lh-copy">
            Copy the line of code below and paste it in the head of the html file(s) you want to include tachyons in.
          </p>
          <pre className="pre white-70" style={{"overflow": "auto"}}>
            <code className="code f6 dib pa2 bg-black-20" style={{"fontSize": "14px"}}>
              &lt;link rel="stylesheet" href="https://unpkg.com/{`tachyons@${this.props.tachyons.version}`}/css/tachyons.min.css"/&gt;
            </code>
          </pre>
          <p className="mt4"><b>or</b> install via npm</p>
          <pre className="pre white-70" style={{"overflow": "auto"}}>
            <code className="code f6 dib pa2 bg-black-20" style={{"fontSize": "14px"}}>
              npm install --save-dev {`tachyons@${this.props.tachyons.version}`}
            </code>
          </pre>
          <p className="mt4"><b>or</b> grab all the source files and build+develop locally</p>
          <pre className="pre white-70" style={{"overflow": "auto"}}>
            <code className="code f6 dib pa2 bg-black-20" style={{"fontSize": "14px"}}>
              git clone git@github.com:tachyons-css/tachyons.git
              cd tachyons
              npm install &amp;&amp; npm build
            </code>
          </pre>
        </article>

      </section>
    )
  }
}

Intro.propTypes = PROP_TYPES;

