import React from 'react';
import FindeOurProdutc from './FindeOurProduct';
import { connect } from 'react-redux';

class FindeOurProductContainer extends React.Component {
  render() {
    return (
      <FindeOurProdutc />
    )
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(FindeOurProductContainer)