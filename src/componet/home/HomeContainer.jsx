import React from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import {exploreMoreNumber} from '../../redux/home-reduser'

class HomeContainer extends React.Component {

  render(){
    return(
      <Home newProduct={this.props.newProduct} newProduct={this.props.newProduct} exploreMoreNumber={this.props.exploreMoreNumber}/>
    )
  }
}


let mapStateToProps = (state) => {
  return{
    // newProduct: state.homePage.newProduct,
    newProduct: state.homePage.newProduct
  }
}

export default connect(mapStateToProps,{exploreMoreNumber})(HomeContainer)

