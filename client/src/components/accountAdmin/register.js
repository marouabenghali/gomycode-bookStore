import React from 'react';
import {connect} from 'react-redux'
import {adminSignupRequest} from '../../actions'


class AdminSignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
     name:'',
     email:'',
     password:'',
     passwordconfirmation:''
      }
  }
  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  // onSubmit =(e)=>{
  //   e.preventDefault();
  //   this.props.userSignupRequest(this.state);
  //   // axios.post('/customer-list/register',{user:this.state})
  // }
        render(){
          const {adminSignupRequest}= this.props
  return (
    <div className="wrapper" id="wrapper">
      <section className="my_account_area pt--80 pb--55 bg--white">
        <div className="container">
          <div className="row">
           
            <div className="col-lg-6 col-12">
              <div className="my__account__wrapper">
                <h3 className="account__title">Register</h3>
                {/* <form > */}
                  <div className="account__form">
                    <div className="input__box">
                      <label>
                        Username <span>*</span>
                      </label>
                      <input type="text" 
                      value={this.state.name}
                      onChange={this.onChange}
                      name="name" />
                      </div>
                     <div className="input__box">
                      <label>
                        Email <span>*</span>
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
                    <div className="input__box">
                      <label>
                        Password Confirmation<span>*</span>
                      </label>
                       <input type="password" 
                      value={this.state.passwordconfirmation}
                      onChange={this.onChange}
                      name="passwordconfirmation" />
                    </div>
                    <div className="form__btn">
    
                      <button onClick={()=>{adminSignupRequest(this.state)}} >Register</button>
                    </div>
                  </div>
                {/* </form> */}
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

export default connect(null,{ adminSignupRequest })(AdminSignupForm)