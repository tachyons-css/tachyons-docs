import React, { Component } from 'react'
import { Link } from 'react-router'

export default class DocsNav extends Component {

  render() {
    return (
      <footer className="ph3 ph5-ns pt3 pb5">
        <h2 className="f6 fw7 ttu tracked">Elements</h2>
        <Link className="f5 fw4 dim link blue db pv1" to="/docs/elements/images">Images</Link>
        <Link className="f5 fw4 dim link blue db pv1" to="/docs/elements/links">Links</Link>
        <Link className="f5 fw4 dim link blue db pv1" to="/docs/elements/lists">Lists</Link>
        <Link className="f5 fw4 dim link blue db pv1 dn" to="/docs/elements/forms">Forms</Link>
        <section className="cf w-100 mt3">
          <article className="fn fl-ns w-100 w-25-l">
            <h2 className="f6 fw7 ttu tracked" id="typography">Typography</h2>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/type-scale">Type Scale</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/typography">Measure</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/line-height">Line Height / Leading</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/letter-spacing">Tracking</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/font-weight">Font Weights</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/font-family">Font Families</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/font-style">Font Style</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/vertical-align">Vertical Align</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/text-align">Text Align</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/text-transform">Text Transform</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/text-decoration">Text Decoration</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/typography/white-space">White Space</Link>
          </article>
          <article className="fn fl-ns w-100 w-25-l">
            <h2 className="f6 fw7 ttu tracked" id="layout">Layout</h2>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/debug">Debugging</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/box-sizing">Box Sizing</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/spacing">Spacing</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/floats">Floats</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/clears">Clearfix</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/display">Display</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/widths">Widths</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/max-widths">Max Widths</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/heights">Heights</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/layout/position">Position</Link>
          </article>
          <article className="fn fl-ns w-100 w-25-l">
            <h2 className="f6 fw7 ttu tracked">Theming</h2>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/themes/skins">Skins</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/themes/hovers">Hovers</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/themes/background-size">Background Size</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/themes/borders">Borders</Link>
            <Link className="f5 fw4 dim link blue db pv1" to="/docs/themes/border-radius">Border Radius</Link>
          </article>
        </section>
      </footer>
    )
  }
}

