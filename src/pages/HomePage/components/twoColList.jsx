import React, { Component, PropTypes } from 'react'
import TitleText from './titleText'

const PROP_TYPES = {
  title: React.PropTypes.string,
  items: React.PropTypes.array.isRequired,
}

export default class TwoColList extends Component {

  createSection(firstItem, secondItem, index) {
    return (
      <div key={'item' + index} className="cf">
        <TitleText title={firstItem.title} copy={firstItem.copy} colOne />
        {secondItem ?
          <TitleText title={secondItem.title} copy={secondItem.copy} colTwo />
        : null}
      </div>
    )
  }

  renderSections(items) {
    let sections = [];
    for(var i = 0; i < items.length; i+=2) {
      const section = this.createSection(items[i], items[i+1], i);
      sections.push(section);
    }
    return sections;
  }

  render() {
    return (
      <div className="ph3 ph5-ns tl tl-ns bt b--light-gray pv3 pv5-ns">
        {this.props.title ?
          <h1>{this.props.title}</h1>
        : null}
        {this.renderSections(this.props.items)}
      </div>
    )
  }
}

TwoColList.propTypes = PROP_TYPES;

