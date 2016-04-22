import React, { PropTypes } from 'react';
import Title from './Header/Title';

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input />
      </div>
    );
  }
}
