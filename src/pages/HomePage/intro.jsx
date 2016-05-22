import React, { Component } from 'react'

const PROP_TYPES = {
  tachyons: React.PropTypes.object.isRequired,
}

export default class Intro extends Component {
  render() {
    return (
      <section>
        <article className="ph3 ph5-ns">
          <iframe src="https://ghbtns.com/github-btn.html?user=tachyons-css&repo=tachyons&type=star&count=true" frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=tachyons-css&repo=tachyons&type=fork&count=true" frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
        </article>

        <div className="ph3 ph5-ns pb3 pt4">
          <h1 className="f4 f3-ns lh-title measure">
            Tachyons was built for designing.
          </h1>
          <p className="f5 f4-ns b measure lh-copy">
            Create fast loading, highly readable, and
            100% responsive interfaces with as little css as possible.
          </p>
          <p className="measure f5 f4-ns lh-copy">
            Modules can be altered, extended, or changed to meet your design needs.
            You shouldn't need to write css everytime you want to build a new
            ui component. By learning the composable building blocks in tachyons, you
            can quickly start to build out interfaces while writing little to no css.
          </p>
        </div>

        <article className="ph3 ph5-ns mb4 mb5-ns">
          <h1>Getting Started</h1>
          <p className="measure lh-copy">
            Copy the line of code below and paste it in the head of the html file(s) you want to include tachyons in.
          </p>
          <pre className="pre black-70" style={{ "overflow": "auto" }}>
            <code className="code f6 dib pa2 bg-near-white" style={{ "fontSize": "14px" }}>
              &lt;{`link rel="stylesheet" href="https://npmcdn.com/tachyons@${this.props.tachyons.version}/css/tachyons.min.css"`}&gt;
            </code>
          </pre>
          <p className="mt4">
            <b>or</b> install via npm
          </p>
          <pre className="pre black-70" style={{ "overflow": "auto" }}>
            <code className="code f6 dib pa2 bg-near-white" style={{ "fontSize": "14px" }}>{`npm install --save-dev tachyons@${this.props.tachyons.version}`}</code>
          </pre>
          <p className="mt4">
            <b>or</b> grab all the source files and build+develop locally
          </p>
          <pre className="pre black-70" style={{ "overflow": "auto" }}>
            <code className="code f6 dib pa2 bg-near-white" style={{ "fontSize": "14px" }}>
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

