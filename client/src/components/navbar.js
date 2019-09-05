import React from "react";
import { filterName, filterType, filterStock, filterLabel } from "../actions";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import Rating from "./rating";
import logo from "../images/logo/logo.png";
import Dashbord from './dashbord';
      


const navbar = props => {
  return (
    <Route>
      <div className="wrapper" id="wrapper">
        <header
          id="wn__header"
          className="header__area header__absolute sticky__header"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <img className="logo" src={logo} alt="logo images"></img>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <nav className="mainmenu__nav">
                  <ul className="meninmenu d-flex justify-content-start">
                    <li className="drop with--one--item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="drop">
                      <a href="#">Shop</a>
                      <div className="megamenu mega03">
                        <ul className="item item03">
                          <li className="title">Shop Layout</li>
                          <li>
                            <a href="shop-grid.html">Shop Grid</a>
                          </li>
                          <li>
                            <a href="single-product.html">Single Product</a>
                          </li>
                        </ul>
                        <ul className="item item03">
                          <li className="title">Shop Page</li>
                          <li>
                            <a href="my-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout Page</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist Page</a>
                          </li>
                          <li>
                            <a href="error404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq Page</a>
                          </li>
                        </ul>
                        <ul className="item item03">
                          <li className="title">Bargain Books</li>
                          <li>
                            <a href="shop-grid.html">Bargain Bestsellers</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Activity Kits</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">B&N classNameics</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Books Under $5</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Bargain Books</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="drop">
                      <a href="shop-grid.html">Books</a>
                      <div className="megamenu mega03">
                        <ul className="item item03">
                          <li className="title">Categories</li>
                          <li>
                            <Link
                              to="/product"
                              onClick={() => {
                                props.filterType("Art");
                              }}
                            >
                              Art
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/product"
                              onClick={() => {
                                props.filterType("Science");
                              }}
                            >
                              Science
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/product"
                              onClick={() => {
                                props.filterType("Cooking");
                              }}
                            >
                              Cooking
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/product"
                              onClick={e => {
                                props.filterType("Health");
                              }}
                            >
                              Health
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/product"
                              onClick={() => {
                                props.filterType("Medecine");
                              }}
                            >
                              Medecine
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/product"
                              onClick={() => {
                                props.filterType("Kids");
                              }}
                            >
                              Kids
                            </Link>
                          </li>
                        </ul>
                        <ul className="item item03">
                          <li className="title">Customer Favourite</li>
                          <li>
                            <a href="shop-grid.html">Mystery</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Religion & Inspiration</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Romance</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Fiction/Fantasy</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Sleeveless</a>
                          </li>
                        </ul>
                        <ul className="item item03">
                          <li className="title">Collections</li>
                          <li>
                            <a href="shop-grid.html">Science </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Fiction/Fantasy</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Self-Improvemen</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Home & Garden</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Humor Books</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="drop">
                      <a href="shop-grid.html">Kids</a>
                      <div className="megamenu mega02">
                        <ul className="item item02">
                          <li className="title">Top Collections</li>
                          <li>
                            <a href="shop-grid.html">American Girl</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Diary Wimpy Kid</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Finding Dory</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Harry Potter</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Land of Stories</a>
                          </li>
                        </ul>
                        <ul className="item item02">
                          <li className="title">More For Kids</li>
                          <li>
                            <a href="shop-grid.html">B&N Educators</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">B&N Kids' Club</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Kids' Music</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Toys & Games</a>
                          </li>
                          <li>
                            <a href="shop-grid.html">Hoodies</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="drop">
                      <a href="#">Pages</a>
                      <div className="megamenu dropdown">
                        <ul className="item item01">
                          <li>
                            <a href="about.html">About Page</a>
                          </li>
                          <li className="label2">
                            <a href="portfolio.html">Portfolio</a>
                            <ul>
                              <li>
                                <a href="portfolio.html">Portfolio</a>
                              </li>
                              <li>
                                <a href="portfolio-details.html">
                                  Portfolio Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="my-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout Page</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist Page</a>
                          </li>
                          <li>
                            <a href="error404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq Page</a>
                          </li>
                          <li>
                            <a href="team.html">Team Page</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2 pt-4">
                <input
                  type="texte"
                  placeholder="search"
                  onChange={e => {
                    props.filterName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                  <li className="shop_search">
                    <a className="search__active" href="#"></a>
                  </li>
                  <li className="wishlist">
                    <a href="#"></a>
                  </li>
                  <li className="shopcart">
                    <Link className="cartbox_active" to="/myshopping">
                      <span className="product_qun">
                        {props.articlesbought}
                      </span>
                    </Link>
                  </li>
                  <li className="setting__bar__icon">
                    <a className="setting__active" href="#"></a>
                    <Link to="/dashbord"><i className="fa fa-dashboard"></i></Link>
                    {/* <Dashbord/> */}
                       {/* <Route exact path="/dashbord" component={Dashbord}/> */}
      
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Route>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    filterName: filter => dispatch(filterName(filter)),
    filterType: filter => dispatch(filterType(filter)),
    filterStock: filter => dispatch(filterStock(filter)),
    filterLabel: filter => dispatch(filterLabel(filter))
  };
}
const mapStateToProps = state => {
  return {
    articlesbought: state.selledarticle.length,
    rate: state.Findbyrating
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navbar);