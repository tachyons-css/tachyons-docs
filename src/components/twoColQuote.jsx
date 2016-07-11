import React, { Component } from 'react'

const PROP_TYPES = {
  copy: React.PropTypes.string.isRequired,
  footer: React.PropTypes.string,
}

export default class TwoColQuote extends Component {
  createMarkup(html) {
    return {__html: html};
  }

  splitContent() {
    const copy = this.props.copy;
    const brTag = '<br>';
    const breakPoint = copy.indexOf(brTag);
    const colOne = copy.slice(0, breakPoint);
    const colTwo = copy.slice(breakPoint + brTag.length, copy.length);
    return { colOne, colTwo };
  }

  render() {

    const { colOne, colTwo } = this.splitContent();

    return (
      <blockquote className="fl w-100 mh0 pa3 pa4-l mb2 mb5-ns border-box bg-near-white">
        <p className="fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure i lh-copy" dangerouslySetInnerHTML={this.createMarkup(colOne)} />
        <p className="fl w-100 w-50-l mh0 mt0 pl0 pl3-l measure i lh-copy" dangerouslySetInnerHTML={this.createMarkup(colTwo)} />

        <footer className="fl w-100">
          <p dangerouslySetInnerHTML={this.createMarkup(this.props.footer)} />
        </footer>
      </blockquote>
    )
  }
}

TwoColQuote.propTypes = PROP_TYPES;

