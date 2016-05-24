import React, { Component, PropTypes } from 'react'
import BlockQuote from './components/blockQuote'
import TwoColQuote from './components/twoColQuote'

const PROP_TYPES = {
  title: React.PropTypes.string,
  items: React.PropTypes.array.isRequired,
}

export default class Testimonials extends Component {
  createRow(item1, item2, index) {
    return (
      <div key={'quote' + index} className="cf w-100">
        <BlockQuote copy={item1.copy} footer={item1.footer} colOne />
        {item2 ?
          <BlockQuote copy={item2.copy} footer={item2.footer} colTwo />
        : null
        }
      </div>
    )
  }

  renderRows(items) {
    let rows = [];
    for(var i = 0; i < items.length; i+=2) {
      const row = this.createRow(items[i], items[i+1], i);
      rows.push(row);
    }
    return rows;
  }

  render() {

    const highlightedTestimonial = this.props.items.shift();
    const otherTestimonials = this.props.items;

    return (
      <section className="bg-white pv5 pv6-ns bb bt b--light-gray" id="testimonials">
        <div className="ph3 ph5-ns">
          {this.props.title ?
            <h1>{this.props.title}</h1>
          : null }
          <TwoColQuote copy={highlightedTestimonial.copy} footer={highlightedTestimonial.footer} />
          {this.renderRows(otherTestimonials)}
        </div>
      </section>
    )
  }
}

Testimonials.propTypes = PROP_TYPES;

