import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  toLower = (string) => string.toLowerCase();

  deleteSpace=(string) => this.toLower(string).split(" ").join("");

  render() {
    return (
      <Header logo={this.props.logo} menu={this.props.menu} deleteSpace={this.deleteSpace}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    logo: state.headerPage.logo,
    menu: state.headerPage.menu
  }
}

export default connect(mapStateToProps,{})(HeaderContainer)