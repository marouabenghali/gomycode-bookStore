import React, { Component } from "react";
import Nav from "./navbar";
import Articles from "./articles";
import Shopping from "./shopping";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./Product";
// import Home from "./Home";
import Bookinfo from "./bookinfo";
// import Checkout from "./Checkout";
import SignupForm from "./account/register";

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
      <SignupForm/>
        {/* <Nav />
        <Route exact path="/" component={Articles} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/myshopping" component={Shopping} />
        <Route exact path="/bookinfo" component={Bookinfo}/> */}
        
      </BrowserRouter>
    );
  }
}
