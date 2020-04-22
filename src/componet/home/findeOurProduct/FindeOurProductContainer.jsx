import React from 'react';
import FindeOurProduct from './FindeOurProduct';
import { connect } from 'react-redux';
import {pleacePictureIndex} from '../../../redux/home-reduser'

class FindeOurProductContainer extends React.Component {

  render() {
    return (
      <FindeOurProduct {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    findeOurProduct: state.homePage.findeOurProduct
  }
}

export default connect(mapStateToProps, {pleacePictureIndex})(FindeOurProductContainer)