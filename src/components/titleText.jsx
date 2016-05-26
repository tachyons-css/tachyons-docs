import React, { Component } from 'react'
import className from 'classnames'

const PROP_TYPES = {
  title: React.PropTypes.string,
  copy: React.PropTypes.string,
  colOne: React.PropTypes.bool,
  colTwo: React.PropTypes.bool,
}

export default class TitleText extends Component {
  createMarkup(html) {
    return {__html: html};
  }

  renderTitle() {
    return <h2 className="f4 f3-ns fw6 mb0" dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
  }

  renderCopy() {
    return <p className="f5 measure lh-copy mt0" dangerouslySetInnerHTML={this.createMarkup(this.props.copy)} />
  }

  getSectionClasses() {
    return className({
      "pv2 fl w-100 w-50-ns": true,
      "pr0 pr2-ns": this.props.colOne,
      "pl0 pl2-ns": this.props.colTwo,
    })
  }

  render() {
    return (
      <article className={this.getSectionClasses()}>
        {this.props.title ? this.renderTitle() : null}
        {this.props.copy ? this.renderCopy() : null}
      </article>
    )
  }
}

TitleText.propTypes = PROP_TYPES;

