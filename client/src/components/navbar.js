import React from "react";
import { filterName, filterType, filterStock, filterLabel } from "../actions";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import Rating from "./rating";
import logo from "../images/logo/logo.png";

const navbar = props => {
  return (
    <Route>
      <div className="wrapper" id="wrapper">
        {/* <!-- Header --> */}
        <header
          id="wn__header"
          className="header__area header__absolute sticky__header"
        >
          <div className="container-fluid">
            <Link to="/">
              <img className="logo" src={logo} alt="logo images"></img>
            </Link>
            <div className="d-none d-lg-block">
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
                      <ul className="item item03" className="item item03">
                        <li className="title">Category</li>
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
                      <ul
                        onChange={e => {
                          props.filterLabel(e.target.value);
                        }}
                      >
                        <li className="title">Label</li>
                        <li>Coup de coeur</li>
                        <li>Vient de paraitre</li>
                        <li>En Promotion</li>
                        <li>Meilleurs Ventes</li>
                      </ul>
                      <ul className="item item03">
                        <li className="title">Collections</li>
                        <li>
                          <a href="shop-grid.html">Art</a>
                        </li>
                        <li>
                          <a href="shop-grid.html">Science</a>
                        </li>
                        <li>
                          <a href="shop-grid.html">Cooking</a>
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
                </ul>
              </nav>
            </div>

            {/* <Rating stars={props.rate} filter={true} />
        <div style={{ display: "flex" }}>
          <input
            type="search"
            placeholder="Search by Name"
            style={{ marginRight: "30px" }}
            onChange={e => {
              props.filterName(e.target.value);
            }}
          /> */}
            {/* <select
            style={{ marginRight: "30px" }}
            onChange={e => {
              props.filterType(e.target.value);
            }}
          >
            <option>Category</option>
            <option>Art</option>
            <option>Science</option>
            <option>Cooking</option>
            <option>Health</option>
            <option>Medecine</option>
            <option>Kids</option>
          </select> */}
            {/* <select
            style={{ marginRight: "60px" }}
            onChange={e => {
              props.filterLabel(e.target.value);
            }}
          >
            <option>Label</option>
            <option>Coup de coeur</option>
            <option>Vient de paraitre</option>
            <option>En Promotion</option>
            <option>Meilleurs Ventes</option>
		  </select> */}

            {/* <div style={{ marginTop: "17px", display: "flex" }}>
              <input
                type="radio"
                name="stock"
                style={{ marginRight: "0" }}
                onChange={e => {
                  props.filterStock("in");
                }}
              />{" "}
              In stock
              <input
                type="radio"
                name="stock"
                style={{ marginLeft: "30px" }}
                onChange={e => {
                  props.filterStock("out");
                }}
              />{" "}
              Out of stock
              <input
                type="radio"
                name="stock"
                style={{ marginLeft: "30px" }}
                defaultChecked
                onChange={e => {
                  props.filterStock("all");
                }}
              />{" "}
              All
            </div> */}

            <div className="col-md-6 col-sm-6 col-6 col-lg-2 header-icons">
              <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                <li className="shop_search">
                  <a className="search__active" href="#"></a>
                </li>
                <li className="wishlist">
                  <a href="#"></a>
                </li>
                <li className="shopcart">
                  <Link className="cartbox_active" to="/myshopping">
                    <span className="product_qun">{props.articlesbought}</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </header>
        {/* <!-- //Header -->
		<!-- Start Search Popup --> */}
        {/* <div className="brown--color box-search-content search_active block-bg close__top">
				<form id="search_mini_form" className="minisearch" action="#">
					<div className="field__search">
						<input type="text" placeholder="Search entire store here..." />
						<div className="action">
							<a href="#"><i className="zmdi zmdi-search" /></a>
						</div>
					</div>
				</form>
				<div className="close__wrap">
					<span>close</span>
				</div>
			</div> */}

        {/* 
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <button>
            <label htmlFor="collapsible1">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </label>
          </button>
          <div className="collapsible-body">
            <Link to="/myshopping">
              <ul className="inline">
                <li>
                  <i className="fas fa-shopping-cart">
                    <span
                      style={{
                        backgroundColor: "rgba(242, 38, 19, 0.7)",
                        borderRadius: "50%",
                        padding: "3px",
                        color: "white"
                      }}
                    >
                      {props.articlesbought}
                    </span>
                  </i>
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </nav> */}
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
