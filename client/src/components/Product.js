import React from "react";
import { connect } from "react-redux";
import { buyArticle } from "../actions";

const filterarticles = (articles, filter) => {
  const {
    filtername,
    filtertype,
    filterdispo,
    filterlabel,
    Findbyrating
  } = filter;
  let arr = articles;
  arr = arr.filter(el => el.rate >= Findbyrating);
  arr = arr.filter(el =>
    el.title.toLowerCase().includes(filtername.toLowerCase().trim())
  );
  if (filtertype !== "Category") {
    arr = arr.filter(el => el.type === filtertype);
  }
  if (filterdispo === "out") {
    arr = arr.filter(el => el.qt === 0);
  }
  if (filterdispo === "in") {
    arr = arr.filter(el => el.qt > 0);
  }
  if (filterlabel !== "Label") {
    arr = arr.filter(el => el.label === filterlabel);
  }

  return arr;
};
const Product = ({ articles, buyArticle, filter }) => {
  return (
    <div className="wrapper" id="wrapper">
      <div className="box-search-content search_active block-bg close__top">
        <form id="search_mini_form" className="minisearch" action="#">
          <div className="field__search">
            <input type="text" placeholder="Search entire store here..." />
            <div className="action">
              <a href="#">
                <i className="zmdi zmdi-search"></i>
              </a>
            </div>
          </div>
        </form>
        <div className="close__wrap">
          <span>close</span>
        </div>
      </div>

      <div className="ht__bradcaump__area bg-image--6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcaump__inner text-center">
                <h2 className="bradcaump-title">Shop Grid</h2>
                <nav className="bradcaump-content">
                  <a className="breadcrumb_item" href="index.html">
                    Home
                  </a>
                  <span className="brd-separetor">/</span>
                  <span className="breadcrumb_item active">Shop Grid</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
              <div className="shop__sidebar">
                <aside className="wedget__categories poroduct--cat">
                  <h3 className="wedget__title">Product Categories</h3>
                  <ul>
                    <li>
                      <a href="#">
                        Biography <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Business <span>(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Cookbooks <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Health & Fitness <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        History <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Mystery <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Inspiration <span>(13)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Romance <span>(20)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Fiction/Fantasy <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Self-Improvement <span>(13)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Humor Books <span>(17)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Harry Potter <span>(20)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Land of Stories <span>(34)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Kids' Music <span>(60)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Toys & Games <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        hoodies <span>(3)</span>
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside className="wedget__categories pro--range">
                  <h3 className="wedget__title">Filter by price</h3>
                  <div className="content-shopby">
                    <div className="price_filter s-filter clear">
                      <form action="#" method="GET">
                        <div id="slider-range"></div>
                        <div className="slider__range--output">
                          <div className="price__output--wrap">
                            <div className="price--output">
                              <span>Price :</span>
                              <input type="text" id="amount" readonly="" />
                            </div>
                            <div className="price--filter">
                              <a href="#">Filter</a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </aside>
                <aside className="wedget__categories poroduct--tag">
                  <h3 className="wedget__title">Product Tags</h3>
                  <ul>
                    <li>
                      <a href="#">Biography</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Cookbooks</a>
                    </li>
                    <li>
                      <a href="#">Health & Fitness</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">Mystery</a>
                    </li>
                    <li>
                      <a href="#">Inspiration</a>
                    </li>
                    <li>
                      <a href="#">Religion</a>
                    </li>
                    <li>
                      <a href="#">Fiction</a>
                    </li>
                    <li>
                      <a href="#">Fantasy</a>
                    </li>
                    <li>
                      <a href="#">Music</a>
                    </li>
                    <li>
                      <a href="#">Toys</a>
                    </li>
                    <li>
                      <a href="#">Hoodies</a>
                    </li>
                  </ul>
                </aside>
                <aside className="wedget__categories sidebar--banner">
                  <img
                    src={require("../images/others/banner_left.jpg")}
                    alt="banner images"
                  />
                  <div className="text">
                    <h2>new products</h2>
                    <h6>
                      save up to <br /> <strong>40%</strong>off
                    </h6>
                  </div>
                </aside>
              </div>
            </div>
            <div className="col-lg-9 col-12 order-1 order-lg-2">
              <div className="row">
                <div className="col-lg-12">
                  <div className="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
                    <div
                      className="shop__list nav justify-content-center"
                      role="tablist"
                    >
                      <a
                        className="nav-item nav-link active"
                        data-toggle="tab"
                        href="#nav-grid"
                        role="tab"
                      >
                        <i className="fa fa-th"></i>
                      </a>
                      <a
                        className="nav-item nav-link"
                        data-toggle="tab"
                        href="#nav-list"
                        role="tab"
                      >
                        <i className="fa fa-list"></i>
                      </a>
                    </div>
                    <p>Showing 1–12 of 40 results</p>
                    <div className="orderby__wrapper">
                      <span>Sort By</span>
                      <select className="shot__byselect">
                        <option>Default sorting</option>
                        <option>HeadPhone</option>
                        <option>Furniture</option>
                        <option>Jewellery</option>
                        <option>Handmade</option>
                        <option>Kids</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab__container">
                <div
                  className="shop-grid tab-pane fade show active"
                  id="nav-grid"
                  role="tabpanel"
                >
                  <div className="row">
                    {filterarticles(articles, filter).map((el, i) => (
                      <div className="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="product__thumb">
                          <a className="first__img" href="single-product.html">
                            <img src={el.img} alt="product image" />
                          </a>
                          <a
                            className="second__img animation1"
                            href="single-product.html"
                          >
                            <img src={el.img} alt="product image" />
                          </a>
                          <div className="hot__box">
                            <span className="hot-label">{el.label}</span>
                          </div>
                        </div>
                        <div className="product__content content--center">
                          <h4>
                            <a href="single-product.html">{el.title}</a>
                          </h4>
                          <ul className="prize d-flex">
                            <li>$35.00</li>
                            <li className="old_prize">${el.price}</li>
                          </ul>
                          <div className="action">
                            <div className="actions_inner">
                              <ul className="add_to_links">
                                <li>
                                  <a className="cart" href="cart.html">
                                    <i className="bi bi-shopping-bag4"></i>
                                  </a>
                                </li>
                                <li>
                                  <a className="wishlist" href="wishlist.html">
                                    <i className="bi bi-shopping-cart-full"></i>
                                  </a>
                                </li>
                                <li>
                                  <a className="compare" href="#">
                                    <i className="bi bi-heart-beat"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    data-toggle="modal"
                                    title="Quick View"
                                    className="quickview modal-view detail-link"
                                    href="#productmodal"
                                  >
                                    <i className="bi bi-search"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product__hover--content">
                            <ul className="rating d-flex">
                              <li className="on">
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li className="on">
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li className="on">
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li>
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ul className="wn__pagination">
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi zmdi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="shop-grid tab-pane fade"
                  id="nav-list"
                  role="tabpanel"
                >
                  <div className="list__view__wrapper">
                    {/* <!-- Start Single Product --> */}
                    <div className="list__view">
                      <div className="thumb">
                        <a className="first__img" href="single-product.html">
                          <img
                            src={require("../images/product/1.jpg")}
                            alt="product images"
                          />
                        </a>
                        <a
                          className="second__img animation1"
                          href="single-product.html"
                        >
                          <img
                            src={require("../images/product/2.jpg")}
                            alt="product images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h2>
                          <a href="single-product.html">Ali Smith</a>
                        </h2>
                        <ul className="rating d-flex">
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="prize__box">
                          <li>$111.00</li>
                          <li className="old__prize">$220.00</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id nulla.
                        </p>
                        <ul className="cart__action d-flex">
                          <li className="cart">
                            <a href="cart.html">Add to cart</a>
                          </li>
                          <li className="wishlist">
                            <a href="cart.html"></a>
                          </li>
                          <li className="compare">
                            <a href="cart.html"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- End Single :e Product --> */}
                    <div className="list__view mt--40">
                      <div className="thumb">
                        <a className="first__img" href="single-product.html">
                          <img
                            src={require("../images/product/2.jpg")}
                            alt="product images"
                          />
                        </a>
                        <a
                          className="second__img animation1"
                          href="single-product.html"
                        >
                          <img
                            src={require("../images/product/4.jpg")}
                            alt="product images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h2>
                          <a href="single-product.html">Blood In Water</a>
                        </h2>
                        <ul className="rating d-flex">
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="prize__box">
                          <li>$111.00</li>
                          <li className="old__prize">$220.00</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id nulla.
                        </p>
                        <ul className="cart__action d-flex">
                          <li className="cart">
                            <a href="cart.html">Add to cart</a>
                          </li>
                          <li className="wishlist">
                            <a href="cart.html"></a>
                          </li>
                          <li className="compare">
                            <a href="cart.html"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- End Single Product -->
                                <!-- Start Single Product --> */}
                    <div className="list__view mt--40">
                      <div className="thumb">
                        <a className="first__img" href="single-product.html">
                          <img
                            src={require("../images/product/3.jpg")}
                            alt="product images"
                          />
                        </a>
                        <a
                          className="second__img animation1"
                          href="single-product.html"
                        >
                          <img
                            src={require("../images/product/6.jpg")}
                            alt="product images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h2>
                          <a href="single-product.html">Madeness Overated</a>
                        </h2>
                        <ul className="rating d-flex">
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="prize__box">
                          <li>$111.00</li>
                          <li className="old__prize">$220.00</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id nulla.
                        </p>
                        <ul className="cart__action d-flex">
                          <li className="cart">
                            <a href="cart.html">Add to cart</a>
                          </li>
                          <li className="wishlist">
                            <a href="cart.html"></a>
                          </li>
                          <li className="compare">
                            <a href="cart.html"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- End Single Product -->
                                <!-- Start Single Product --> */}
                    <div className="list__view mt--40">
                      <div className="thumb">
                        <a className="first__img" href="single-product.html">
                          <img
                            src={require("../images/product/4.jpg")}
                            alt="product images"
                          />
                        </a>
                        <a
                          className="second__img animation1"
                          href="single-product.html"
                        >
                          <img
                            src={require("../images/product/6.jpg")}
                            alt="product images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h2>
                          <a href="single-product.html">Watching You</a>
                        </h2>
                        <ul className="rating d-flex">
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="prize__box">
                          <li>$111.00</li>
                          <li className="old__prize">$220.00</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id nulla.
                        </p>
                        <ul className="cart__action d-flex">
                          <li className="cart">
                            <a href="cart.html">Add to cart</a>
                          </li>
                          <li className="wishlist">
                            <a href="cart.html"></a>
                          </li>
                          <li className="compare">
                            <a href="cart.html"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- End Single Product -->
                                <!-- Start Single Product --> */}
                    <div className="list__view mt--40">
                      <div className="thumb">
                        <a className="first__img" href="single-product.html">
                          <img
                            src={require("../images/product/5.jpg")}
                            alt="product images"
                          />
                        </a>
                        <a
                          className="second__img animation1"
                          href="single-product.html"
                        >
                          <img
                            src={require("../images/product/9.jpg")}
                            alt="product images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h2>
                          <a href="single-product.html">Court Wings Run</a>
                        </h2>
                        <ul className="rating d-flex">
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li className="on">
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                          <li>
                            <i className="fa fa-star-o"></i>
                          </li>
                        </ul>
                        <ul className="prize__box">
                          <li>$111.00</li>
                          <li className="old__prize">$220.00</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id nulla.
                        </p>
                        <ul className="cart__action d-flex">
                          <li className="cart">
                            <a href="cart.html">Add to cart</a>
                          </li>
                          <li className="wishlist">
                            <a href="cart.html"></a>
                          </li>
                          <li className="compare">
                            <a href="cart.html"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- End Single Product --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Shop Page -->
    <!-- Footer Area --> */}
      <footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
        <div className="footer-static-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__widget footer__menu">
                  <div className="ft__logo">
                    <a href="index.html">
                      <img src={require("../images/logo/3.png")} alt="logo" />
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
                  <img src={require("../images/icons/payment.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- //Footer Area --> */}
      {/* <!-- QUICKVIEW PRODUCT --> */}
      <div id="quickview-wrapper">
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="productmodal"
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal__container" role="document">
            <div className="modal-content">
              <div className="modal-header modal__header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-product">
                  {/* <!-- Start product images --> */}
                  <div className="product-images">
                    <div className="main-image images">
                      <img
                        alt="big images"
                        src={require("../images/product/big-img/1.jpg")}
                      />
                    </div>
                  </div>
                  {/* <!-- end product images --> */}
                  <div className="product-info">
                    <h1>Simple Fabric Bags</h1>
                    <div className="rating__and__review">
                      <ul className="rating">
                        <li>
                          <span className="ti-star"></span>
                        </li>
                        <li>
                          <span className="ti-star"></span>
                        </li>
                        <li>
                          <span className="ti-star"></span>
                        </li>
                        <li>
                          <span className="ti-star"></span>
                        </li>
                        <li>
                          <span className="ti-star"></span>
                        </li>
                      </ul>
                      <div className="review">
                        <a href="#">4 customer reviews</a>
                      </div>
                    </div>
                    <div className="price-box-3">
                      <div className="s-price-box">
                        <span className="new-price">$17.20</span>
                        <span className="old-price">$45.00</span>
                      </div>
                    </div>
                    <div className="quick-desc">
                      Designed for simplicity and made from high quality
                      materials. Its sleek geometry and material combinations
                      creates a modern look.
                    </div>
                    <div className="select__color">
                      <h2>Select color</h2>
                      <ul className="color__list">
                        <li className="red">
                          <a title="Red" href="#">
                            Red
                          </a>
                        </li>
                        <li className="gold">
                          <a title="Gold" href="#">
                            Gold
                          </a>
                        </li>
                        <li className="orange">
                          <a title="Orange" href="#">
                            Orange
                          </a>
                        </li>
                        <li className="orange">
                          <a title="Orange" href="#">
                            Orange
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="select__size">
                      <h2>Select size</h2>
                      <ul className="color__list">
                        <li className="l__size">
                          <a title="L" href="#">
                            L
                          </a>
                        </li>
                        <li className="m__size">
                          <a title="M" href="#">
                            M
                          </a>
                        </li>
                        <li className="s__size">
                          <a title="S" href="#">
                            S
                          </a>
                        </li>
                        <li className="xl__size">
                          <a title="XL" href="#">
                            XL
                          </a>
                        </li>
                        <li className="xxl__size">
                          <a title="XXL" href="#">
                            XXL
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-sharing">
                      <div className="widget widget_socialsharing_widget">
                        <h3 className="widget-title-modal">
                          Share this product
                        </h3>
                        <ul className="social__net social__net--2 d-flex justify-content-start">
                          <li className="facebook">
                            <a href="#" className="rss social-icon">
                              <i className="zmdi zmdi-rss"></i>
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#" className="linkedin social-icon">
                              <i className="zmdi zmdi-linkedin"></i>
                            </a>
                          </li>
                          <li className="pinterest">
                            <a href="#" className="pinterest social-icon">
                              <i className="zmdi zmdi-pinterest"></i>
                            </a>
                          </li>
                          <li className="tumblr">
                            <a href="#" className="tumblr social-icon">
                              <i className="zmdi zmdi-tumblr"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="addtocart-btn">
                      <a href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END QUICKVIEW PRODUCT --> */}
    </div>
  );
  {
    /* <!-- //Main wrapper --> */
  }
};
const mapStateToProps = state => {
  return {
    articles: state.articles,
    filter: { ...state }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyArticle: buy => dispatch(buyArticle(buy))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
