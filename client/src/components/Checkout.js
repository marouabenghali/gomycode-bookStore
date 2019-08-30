import React from 'react'

export default function Checkout() {
    return (
       
	<div className="wrapper" id="wrapper">
      
    <section className="wn__checkout__area section-padding--lg bg__white">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="wn_checkout_wrap">
                        <div className="checkout_info">
                            <span>Returning customer ?</span>
                            <a className="showlogin" href="#">Click here to login</a>
                        </div>
                        <div className="checkout_login">
                            <form className="wn__checkout__form" action="#">
                                <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>

                                <div className="input__box">
                                    <label>Username or email <span>*</span></label>
                                    <input type="text"/>
                                </div>

                                <div className="input__box">
                                    <label>password <span>*</span></label>
                                    <input type="password"/>
                                </div>
                                <div className="form__btn">
                                    <button>Login</button>
                                    <label className="label-for-checkbox">
                                        <input id="rememberme" name="rememberme" value="forever" type="checkbox"/>
                                        <span>Remember me</span>
                                    </label>
                                    <a href="#">Lost your password?</a>
                                </div>
                            </form>
                        </div>
                        <div className="checkout_info">
                            <span>Have a coupon? </span>
                            <a className="showcoupon" href="#">Click here to enter your code</a>
                        </div>
                        <div className="checkout_coupon">
                            <form action="#">
                                <div className="form__coupon">
                                    <input type="text" placeholder="Coupon code"/>
                                    <button>Apply coupon</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="customer_details">
                        <h3>Billing details</h3>
                        <div className="customar__field">
                            <div className="margin_between">
                                <div className="input_box space_between">
                                    <label>First name <span>*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="input_box space_between">
                                    <label>last name <span>*</span></label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="input_box">
                                <label>Company name <span>*</span></label>
                                <input type="text"/>
                            </div>
                            <div className="input_box">
                                <label>Country<span>*</span></label>
                                <select className="select__option">
                                    <option>Select a country…</option>
                                    <option>Afghanistan</option>
                                    <option>American Samoa</option>
                                    <option>Anguilla</option>
                                    <option>American Samoa</option>
                                    <option>Antarctica</option>
                                    <option>Antigua and Barbuda</option>
                                </select>
                            </div>
                            <div className="input_box">
                                <label>Address <span>*</span></label>
                                <input type="text" placeholder="Street address"/>
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)"/>
                            </div>
                            <div className="input_box">
                                <label>District<span>*</span></label>
                                <select className="select__option">
                                    <option>Select a country…</option>
                                    <option>Afghanistan</option>
                                    <option>American Samoa</option>
                                    <option>Anguilla</option>
                                    <option>American Samoa</option>
                                    <option>Antarctica</option>
                                    <option>Antigua and Barbuda</option>
                                </select>
                            </div>
                            <div className="input_box">
                                <label>Postcode / ZIP <span>*</span></label>
                                <input type="text"/>
                            </div>
                            <div className="margin_between">
                                <div className="input_box space_between">
                                    <label>Phone <span>*</span></label>
                                    <input type="text"/>
                                </div>

                                <div className="input_box space_between">
                                    <label>Email address <span>*</span></label>
                                    <input type="email"/>
                                </div>
                            </div>
                        </div>
                        <div className="create__account">
                            <div className="wn__accountbox">
                                <input className="input-checkbox" name="createaccount" value="1" type="checkbox"/>
                                <span>Create an account ?</span>
                            </div>
                            <div className="account__field">
                                <form action="#">
                                    <label>Account password <span>*</span></label>
                                    <input type="text" placeholder="password"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="customer_details mt--20">
                        <div className="differt__address">
                            <input name="ship_to_different_address" value="1" type="checkbox"/>
                            <span>Ship to a different address ?</span>
                        </div>
                        <div className="customar__field differt__form mt--40">
                            <div className="margin_between">
                                <div className="input_box space_between">
                                    <label>First name <span>*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="input_box space_between">
                                    <label>last name <span>*</span></label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="input_box">
                                <label>Company name <span>*</span></label>
                                <input type="text"/>
                            </div>
                            <div className="input_box">
                                <label>Country<span>*</span></label>
                                <select className="select__option">
                                    <option>Select a country…</option>
                                    <option>Afghanistan</option>
                                    <option>American Samoa</option>
                                    <option>Anguilla</option>
                                    <option>American Samoa</option>
                                    <option>Antarctica</option>
                                    <option>Antigua and Barbuda</option>
                                </select>
                            </div>
                            <div className="input_box">
                                <label>Address <span>*</span></label>
                                <input type="text" placeholder="Street address"/>
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)"/>
                            </div>
                            <div className="input_box">
                                <label>District<span>*</span></label>
                                <select className="select__option"> 
                                    <option>Select a country…</option>
                                    <option>Afghanistan</option>
                                    <option>American Samoa</option>
                                    <option>Anguilla</option>
                                    <option>American Samoa</option>
                                    <option>Antarctica</option>
                                    <option>Antigua and Barbuda</option>
                                </select>
                            </div>
                            <div className="input_box">
                                <label>Postcode / ZIP <span>*</span></label>
                                <input type="text"/>
                            </div>
                            <div className="margin_between">
                                <div className="input_box space_between">
                                    <label>Phone <span>*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className="input_box space_between">
                                    <label>Email address <span>*</span></label>
                                    <input type="email"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 md-mt-40 sm-mt-40">
                    <div className="wn__order__box">
                        <h3 className="onder__title">Your order</h3>
                        <ul className="order__total">
                            <li>Product</li>
                            <li>Total</li>
                        </ul>
                        <ul className="order_product">
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                        </ul>
                        <ul className="shipping__method">
                            <li>Cart Subtotal <span>$48.00</span></li>
                            <li>Shipping 
                                <ul>
                                    <li>
                                        <input name="shipping_method[0]" data-index="0" value="legacy_flat_rate" checked="checked" type="radio"/>
                                        <label>Flat Rate: $48.00</label>
                                    </li>
                                    <li>
                                        <input name="shipping_method[0]" data-index="0" value="legacy_flat_rate" checked="checked" type="radio"/>
                                        <label>Flat Rate: $48.00</label>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="total__amount">
                            <li>Order Total <span>$223.00</span></li>
                        </ul>
                    </div>
                    <div id="accordion" className="checkout_accordion mt--30" role="tablist">
                        <div className="payment">
                            <div className="che__header" role="tab" id="headingOne">
                                  <a className="checkout__title" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span>Direct Bank Transfer</span>
                                  </a>
                            </div>
                            <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="payment-body">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</div>
                            </div>
                        </div>
                        <div className="payment">
                            <div className="che__header" role="tab" id="headingTwo">
                                  <a className="collapsed checkout__title" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span>Cheque Payment</span>
                                  </a>
                            </div>
                            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                  <div className="payment-body">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
                            </div>
                        </div>
                        <div className="payment">
                            <div className="che__header" role="tab" id="headingThree">
                                  <a className="collapsed checkout__title" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span>Cash on Delivery</span>
                                  </a>
                            </div>
                            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                  <div className="payment-body">Pay with cash upon delivery.</div>
                            </div>
                        </div>
                        <div className="payment">
                            <div className="che__header" role="tab" id="headingFour">
                                  <a className="collapsed checkout__title" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <span>PayPal <img src={require("../images/icons/payment.png")} alt="payment images"/> </span>
                                  </a>
                            </div>
                            <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                  <div className="payment-body">Pay with cash upon delivery.</div>
                            </div>
                        </div>
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
                                    <img src={require("../images/logo/3.png")} alt="logo"/>
                                </a>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered duskam alteration variations of passages</p>
                            </div>
                            <div className="footer__content">
                                <ul className="social__net social__net--2 d-flex justify-content-center">
                                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i className="bi bi-google"></i></a></li>
                                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                </ul>
                                <ul className="mainmenu d-flex justify-content-center">
                                    <li><a href="index.html">Trending</a></li>
                                    <li><a href="index.html">Best Seller</a></li>
                                    <li><a href="index.html">All Product</a></li>
                                    <li><a href="index.html">Wishlist</a></li>
                                    <li><a href="index.html">Blog</a></li>
                                    <li><a href="index.html">Contact</a></li>
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
                                <p>Copyright <i className="fa fa-copyright"></i> <a href="https://freethemescloud.com/">Free themes Cloud.</a> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="payment text-right">
                            <img src={require("../images/icons/payment.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


</div>

    )
}
