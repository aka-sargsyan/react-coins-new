import React from 'react'
import Home from './Home'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {

  render(){
    return(
      <Home newProduct={this.props.newProduct} newProductImgs={this.props.newProductImgs}/>
    )
  }
}


let mapStateToProps = (state) => {
  return{
    newProduct: state.homePage.newProduct,
    newProductImgs: state.homePage.newProductImgs
  }
}

export default connect(mapStateToProps,{})(HomeContainer)

