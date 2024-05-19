import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home';
import { Shope } from '../pages/shope';
import { Wallet } from '../pages/wallet';
import { useCallback, useState } from 'react';
import { Navbar } from '../components/navbar/Navbar.jsx';

import img1 from '../images/tea1.png';
import img2 from '../images/tea2.png';
import img3 from '../images/tea3.png';
import img4 from '../images/tea4.png';
import img5 from '../images/tea5.png';
import img6 from '../images/tea6.png';
import img7 from '../images/tea7.png';
import img8 from '../images/tea8.png';
import img9 from '../images/tea9.png';
import img10 from '../images/tea10.png';
import img11 from '../images/tea11.png';
import img12 from '../images/tea12.png';
import img13 from '../images/tea13.png';
import img14 from '../images/tea14.png';
import { useReducer } from 'react';


let num = 0;
class ShopeData {
  constructor(productName, price, imgSrc, limit) {
    this.name = productName;
    this.price = price;
    this.src = imgSrc;
    this.id = num++; 
    this.buysCount = 1;
    this.isBuy = false;
    this.limit = limit;
  }
}

const date = [
  new ShopeData('Կոճապղպեղով թեյ', '1500AMD', img14, 10),
  new ShopeData('Անանուխով թեյ', '1250AMD', img14, 20),
  new ShopeData('Սև թեյ', '2500AMD', img14, 45),
  new ShopeData('ՈՒրցով թեյ', '550AMD', img14, 50),
  new ShopeData('Երիցուկով թեյ', '600AMD', img14, 70),
  new ShopeData('Դաղձով թեյ', '1110AMD', img14, 13),
  new ShopeData('Խոտաբույսերով թեյ', '850AMD', img14, 9)
]

function reducer(state, action) {
  if(action.type === 'changebuy') {
    return state.map((obj, i) => {
      if(obj.id == action.payload.id) {
        return {...obj, isBuy: !obj.isBuy, buysCount: 1}
      }
      return obj;
    })
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, date);

  const callBack = useCallback((id) => {
    dispatch({
      type: "changebuy",
      payload: {
        id
      }
    })
  }, []);

  const count = state.reduce((aggr, val) => {
      if(val.isBuy) {
        aggr += 1; 
      }
      return aggr;
  }, 0);

  const bought = state.filter((val) => {
    if(val.isBuy) {
      return val;
    }
  });

console.log(count)

  return (
    <>
      <Navbar valid={'home'} productCount={count} />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/shop' element={<Shope state={state} callback={callBack} />}></Route>
          

          <Route path='/wallet' element={<Wallet state={bought} callback={callBack} />}></Route>
        </Routes>
    </>

  );
}

export default App;
