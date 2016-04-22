import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  state = {
    title: 'Wellcome'
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
