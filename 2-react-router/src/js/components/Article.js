import React, { PropTypes } from 'react'

class Article extends React.Component {
  render () {
    return (
      <div className="col-xs-4">
        <h2>{this.props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="btn btn-default">More Info</a>
      </div>
    );
  }
}

export default Article;
