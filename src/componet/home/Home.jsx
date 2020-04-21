import React from 'react';
import moduleCss from './Home.module.css'
import Slideshow from '../slider/SlideShow';
import TreavelCollectContainer from './travel&collect/TreavelCollectContainer';
import PleacesArmeniaContainer from './pleacesArmenia/PleacesArmeniaContainer';
import FindeOurProduct from './findeOurProduct/FindeOurProduct';

const Home = (props) => {


  return (
    <div>
      <div className="pb80">
        <Slideshow newProductImgs={props.newProductImgs} />
      </div>
      <div className="pb80">
        <TreavelCollectContainer />
      </div>
      <div>
        <PleacesArmeniaContainer />
      </div>
      <div>
        <FindeOurProduct />
      </div>      
    </div>
  )
}

export default Home;