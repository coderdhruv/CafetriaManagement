import React from 'react';
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import SignUp from './components/SignUp/Signup';
import Login  from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';

class App extends React.Component{
  render(){
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/Login" component = {Login}></Route>
            <Route exact path="/SignUp" component = {SignUp}></Route>
            <Route exact path="/" component = {LandingPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
    }
}

export default App;
