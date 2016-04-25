import React, { PropTypes } from 'react';
import Title from './Header/Title';

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    changeTitle: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    this.props.changeTitle(event.target.value);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input onChange={this.handleChange} />
      </div>
    );
  }
}
