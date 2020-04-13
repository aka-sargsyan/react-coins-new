import React from 'react';
import moduleCss from './FindOurProduct.module.css'

const FindeOurProdutc = (props) => {
  return (
    <div>
      find oure product
      <div className={moduleCss.positionRelative}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1100829.9624775872!2d44.70096238982575!3d40.35028880089609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1585776706696!5m2!1sru!2s" width="600" height="450" ></iframe>
        <div className={moduleCss.positionAbsolute}>jjj</div>
      </div>
    </div>
  )
}

export default FindeOurProdutc;