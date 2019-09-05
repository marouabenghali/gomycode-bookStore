import React from "react";
import {connect} from 'react-redux'
import {login} from '../../authaction'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   email:'',
   password:''
    }
}
onChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

    render(){ 
      const {login}=this.props
  return (
    <div className="wrapper" id="wrapper">
      <section className="my_account_area pt--80 pb--55 bg--white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="my__account__wrapper">
                <h3 className="account__title">Login</h3>

                <form >
                  <div className="account__form">
                    <div className="input__box">
                      <label>
                      Email address <span>*</span>
                      </label>
                      <input type="email" 
                      value={this.state.email}
                      onChange={this.onChange}
                      name="email" />
                    </div>
                    <div className="input__box">
                    <label>
                        Password<span>*</span>
                      </label>
                       <input type="password" 
                      value={this.state.password}
                      onChange={this.onChange}
                      name="password" />
                    </div>
                    <div className="form__btn">
                    <button onClick={()=>{login(this.state)}} >Login</button>
                      <label className="label-for-checkbox">
                        <input
                          id="rememberme"
                          className="input-checkbox"
                          name="rememberme"
                          value="forever"
                          type="checkbox"
                        />
                        <span>Remember me</span>
                      </label>
                    </div>
                    <a className="forget_pass" href="#">
                      Lost your password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
        <div className="footer-static-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__widget footer__menu">
                  <div className="ft__logo">
                    <a href="index.html">
                      {/* <img src={require("../images/logo/3.png")} alt="logo" /> */}
                    </a>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered duskam
                      alteration variations of passages
                    </p>
                  </div>
                  <div className="footer__content">
                    <ul className="social__net social__net--2 d-flex justify-content-center">
                      <li>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-youtube"></i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mainmenu d-flex justify-content-center">
                      <li>
                        <a href="index.html">Trending</a>
                      </li>
                      <li>
                        <a href="index.html">Best Seller</a>
                      </li>
                      <li>
                        <a href="index.html">All Product</a>
                      </li>
                      <li>
                        <a href="index.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="index.html">Blog</a>
                      </li>
                      <li>
                        <a href="index.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="copyright">
                  <div className="copy__right__inner text-left">
                    <p>
                      Copyright <i className="fa fa-copyright"></i>{" "}
                      <a href="https://freethemescloud.com/">
                        Free themes Cloud.
                      </a>{" "}
                      All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="payment text-right">
                  {/* <img src={require("../images/icons/payment.png")} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
    }
}
export default connect(null,{ login })(LoginForm)