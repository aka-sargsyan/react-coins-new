import logoImg from '../assets/images/6546.png';

let initialState = {
  logo: logoImg,
  menu: [
    { id: 1, part: 'SOUVENIR' },
    { id: 2, part: 'TERMINALS' },
    { id: 3, part: 'HISTORY' },
    { id: 4, part: 'CONTACT US' }
  ]
}

const headerReducer = (state = initialState) => state;

export default headerReducer;