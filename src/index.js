import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './product';
import Card1 from "./Card1";
import Card2 from "./Card2";
import ProductCard from './ProductCard';
import Routerex from './Routerex';
import Cardwrapper from './Cardwrapper';
import Counter from './Counter';
import OnOff from './OnOff';
import NameChanger from './NameChanger';
import DelayedAlert from './DelayedAlert';
import EmailValidation from './EmailValidation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div classname="wrapper">
    <Routerex/>
    <Card1/><Card2/>
    <Counter/>
    <OnOff/>
    <NameChanger/>
    <DelayedAlert/>
    <EmailValidation/>
    
   </div> 
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
