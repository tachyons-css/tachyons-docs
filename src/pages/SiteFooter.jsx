import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { IndexLink, Link } from 'react-router'

export default class SiteFooter extends Component {
  render() {
    return (
      <footer className="bg-near-white mid-gray ph3 ph5-ns pv5 pv6-ns bt b--black-10">
        <a href="https://twitter.com/intent/tweet?text=Tachyons: Functional CSS for Humans.&url=http://tachyons.io" target="_blank" className="dn mb3 twitter bg-white link dim br2 ph2 pb1 pt0 lh-solid" style={{"backgroundColor": "#55acee"}}>
          <svg className="geomicon dib v-mid" viewBox="0 0 32 32" width="16" height="16" fill="#fff">
            <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"/>
          </svg>
          <span className="dib v-mid white fw6" style={{"fontSize": "12px"}}>Tweet</span>
        </a>
        <div className="mb4">
          <IndexLink to="/" className="black-70 link dim b dib mr3">
            Home
          </IndexLink>
          <Link to="/docs" className="black-70 link dim b dib mr3">
            Docs
          </Link>
          <Link to="/components" className="black-70 link dim b dib mr3">
            Components
          </Link>
        </div>
        <article>
          <iframe src="https://ghbtns.com/github-btn.html?user=tachyons-css&repo=tachyons&type=star&count=true" frameBorder="0" scrolling="0" width="100px" height="20px" className="mr2"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=tachyons-css&repo=tachyons&type=fork&count=true" frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
        </article>
        <div className="mt4">
          <a className="ba b--black-20 bg-white black-70 link br2 dim b dib mr3 mb4 pv2 ph3" href="http://tachyons-slack-invite.herokuapp.com" title="Join our Slack Channel">
            Join our Slack Channel
          </a>
          <a className="ba b--black-20 bg-white br2 black-70 link dim b dib pv2 ph3" href="https://github.com/tachyons-css/tachyons/issues" title="File a bug, request a feature, ask a question!">
            Open an Issue
          </a>
        </div>
        <p className="measure copy lh-copy">
          Have a question? Need help? Feel free to open an issue on GitHub or ask a
          question in our slack channel. We're here to try and help make designing in
          the browser fun.
        </p>
        <div className="pt4 cf mw5">
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=tachyonsio" id="_carbonads_js"></script>
        </div>
        <small className="f6 measure db lh-copy mt5">
          A tachyon /ˈtæki.ɒn/ or tachyonic particle is a hypothetical particle
          that always moves faster than light.
          The word comes from the Greek:
          <br />
          <br />
          ταχύς or tachys, meaning "swift, quick, fast, rapid"
        </small>

      </footer>

    )
  }
};
