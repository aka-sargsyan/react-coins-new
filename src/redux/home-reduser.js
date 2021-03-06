import newProductImg1 from '../assets/images/20181217_235144.jpg';
import newProductImg2 from '../assets/images/20181217_235029.jpg';
import newProductImg3 from '../assets/images/gor-davtyan-519330-unsplash.png';
import fotos1 from '../assets/images/1-oz-queen-s-beasts-dragon-gold-2017-f6b1571573c84852738bb32430774268.png';
import fotos2 from '../assets/images/1-oz-queen-s-beasts-dragon-gold-2017-f6b1571573c84852738bb32430774268.png';
import pleaceFoto1 from '../assets/images/opera.png';
import pleaceFoto2 from '../assets/images/matenadaran.png';
import pleaceFoto3 from '../assets/images/output-onlinejpgtools_(7).png';
import pleaceFoto4 from '../assets/images/zvartnots.png';
import pleaceFoto5 from '../assets/images/garni.png';
import pleaceFoto6 from '../assets/images/garni.png';
////////map pleace picture///////
import terminalAdd1 from '../assets/images/DJI_0020.JPG'
import terminalAdd2 from '../assets/images/garni.png'

const DISPLAY_SHADOW = 'DISPLAY-SHADOW';
const DISPLAY_SHADOW_CLOSE = 'DISPLAY-SHADOW-CLOSE';
const PLEACE_PICTURE_INDEX = 'PLEACE-PICTURE-INDEX';
const EXPLORE_MORE = 'EXPLORE-MORE';

let initialState = {
  // newProduct: 'NEW PRODUCT FROM MATENADARAN',
  newProduct: [
    { id: 1_1, productImg: newProductImg1, name: 'մատենադարան' },
    { id: 1_2, productImg: newProductImg2, name: 'մատենադարան1' },
    { id: 1_3, productImg: newProductImg3, name: 'մատենադարան2' },
    { id: 1_4, productImg: pleaceFoto6, name: 'գառնի' },
  ],
  slideNumber: 0,
  treavelCollectInform: {
    header: 'TRAVEL AND COLLECT ARMENIAN COINS',
    description: [
      {
        id: 2_1, text: `While visiting the biggest tourist attractions in the world, such as sanctuaries, 
                      churches, castles, mines, museums and theme parks, tourists search for unique souvenirs 
                      that – after they return to their cozy homes – will allow them to remember their visit and 
                      enjoy it for a long time. In order to meet that need, we created a concept of unique touristic 
                      coins available only in our souvenir coins vending machines. GW COIN tokens, known as souvenir coins, 
                      have become precious collector's trophies as they cannot be purchased anywhere else except at particular tourist sites.`
      },
      { id: 2_2, text: `Acquiring a GW COIN token is a perfect answer to the need of a tourist, enchanted with the site that they visited.` },

    ],
    footer: `We invite you to become our partner and join us in building the Golden World Coin!`,

    fotos: [
      { id: 1, img: fotos1 },
      { id: 2, img: fotos2 }
    ],
  },
  pleacesArmenia: {
    foto: [
      { id: 1, pleaceFoto: pleaceFoto1, text: 'A.Spendiaryan Opera and Ballet National Academic Theatre' },
      { id: 2, pleaceFoto: pleaceFoto2, text: 'A.Spendiaryan Opera and Ballet National Academic Theatre' },
      { id: 3, pleaceFoto: pleaceFoto3, text: 'A.Spendiaryan Opera and Ballet National Academic Theatre' },
      { id: 4, pleaceFoto: pleaceFoto4, text: 'A.Spendiaryan Opera and Ballet National Academic Theatre' },
      { id: 5, pleaceFoto: pleaceFoto5, text: 'A.Spendiaryan Opera and Ballet National Academic Theatre' },
      { id: 6, pleaceFoto: pleaceFoto6, text: 'A.Spendiaryan Opera and Ballet National Academic Theatre' },
    ],
    displayShadowBool: true,
    index: null
  },
  findeOurProduct: {
    positionCenter: {
      lat: 40.171644,
      lng: 44.519673,
      zoom: 25,
    },
    positionsMarker: [
      {
        lat: 40.171644,
        lng: 44.519673,
        popup: 'tatevi vanq',
        picture: terminalAdd1,
      },
      {
        lat: 40.182844,
        lng: 44.489860,
        popup: 'patkerasrah',
        picture: terminalAdd2,
      }
    ],
    pictureIndex: 1,
  }
}

let _addShadow = (state, action) => {
  let copyStaet = { ...state };
  copyStaet.pleacesArmenia = { ...state.pleacesArmenia, displayShadowBool: false, index: action };
  return copyStaet;
}

let _closeShadow = (state) => {
  let copyStaet = { ...state };
  copyStaet.pleacesArmenia = { ...state.pleacesArmenia, displayShadowBool: true, index: null };
  return copyStaet;
}

let _openPleacePicture = (state, action) => {
  let copyStaet = { ...state };
  copyStaet.findeOurProduct = { ...state.findeOurProduct, pictureIndex: action };
  return copyStaet;
}

const homeReduser = (state = initialState, action) => {
  switch (action.type) {

    case DISPLAY_SHADOW: {
      return _addShadow(state, action.index)
    }

    case DISPLAY_SHADOW_CLOSE: {
      return _closeShadow(state)
    }

    case PLEACE_PICTURE_INDEX: {
      return _openPleacePicture(state, action.index)
    }

    case EXPLORE_MORE: {
      return {...state, slideNumber: action.number}
    }

    default:
      return state;
  }
};

export const displayShadow = (index) => ({ type: DISPLAY_SHADOW, index });
export const displayShadowClose = () => ({ type: DISPLAY_SHADOW_CLOSE });
export const pleacePictureIndex = (index) => ({ type: PLEACE_PICTURE_INDEX, index });
export const exploreMoreNumber = (number) => ({ type: EXPLORE_MORE, number });

export default homeReduser;