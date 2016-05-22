import React, { Component } from 'react'
import className from 'classnames'

const PROP_TYPES = {
  copy: React.PropTypes.string.isRequired,
  footer: React.PropTypes.string,
  colOne: React.PropTypes.bool,
  colTwo: React.PropTypes.bool,
}

export default class BlockQuote extends Component {
  createMarkup(html) {
    return {__html: html};
  }

  getSectionClasses() {
    return className({
      "fl w-100 w-50-ns mh0 mb2 mb5-ns border-box": true,
      "pr0 pr3-ns": this.props.colOne,
      "pl0 pl3-ns": this.props.colTwo,
    })
  }

  render() {
    return (
        <blockquote className={this.getSectionClasses()}>
          <p className="f6 f5-ns measure lh-copy pr1 pr0-l i" dangerouslySetInnerHTML={this.createMarkup(this.props.copy)} />
          {this.props.footer ?
            <footer>
              <p dangerouslySetInnerHTML={this.createMarkup(this.props.footer)} />
            </footer>
          : null}
        </blockquote>
    )
  }
}

BlockQuote.propTypes = PROP_TYPES;

