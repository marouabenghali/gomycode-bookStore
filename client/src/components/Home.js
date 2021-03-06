import React from 'react'

export default function Home() {
    return (
        
	<div className="wrapper" id="wrapper">
    {/* <!-- Header --> */}
    <header id="wn__header" className="header__area header__absolute sticky__header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                    <div className="logo">
                        <a href="index.html">
                            <img src={require("../images/logo/logo.png")} alt="logo images"/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-8 d-none d-lg-block">
                    <nav className="mainmenu__nav">
                        <ul className="meninmenu d-flex justify-content-start">
                            <li className="drop with--one--item"><a href="index.html">Home</a></li>
                            <li className="drop"><a href="#">Shop</a>
                                <div className="megamenu mega03">
                                    <ul className="item item03">
                                        <li className="title">Shop Layout</li>
                                        <li><a href="shop-grid.html">Shop Grid</a></li>
                                        <li><a href="single-product.html">Single Product</a></li>
                                    </ul>
                                    <ul className="item item03">
                                        <li className="title">Shop Page</li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                        <li><a href="error404.html">404 Page</a></li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                    </ul>
                                    <ul className="item item03">
                                        <li className="title">Bargain Books</li>
                                        <li><a href="shop-grid.html">Bargain Bestsellers</a></li>
                                        <li><a href="shop-grid.html">Activity Kits</a></li>
                                        <li><a href="shop-grid.html">B&N classNameics</a></li>
                                        <li><a href="shop-grid.html">Books Under $5</a></li>
                                        <li><a href="shop-grid.html">Bargain Books</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="drop"><a href="shop-grid.html">Books</a>
                                <div className="megamenu mega03">
                                    <ul className="item item03">
                                        <li className="title">Categories</li>
                                        <li><a href="shop-grid.html">Biography </a></li>
                                        <li><a href="shop-grid.html">Business </a></li>
                                        <li><a href="shop-grid.html">Cookbooks </a></li>
                                        <li><a href="shop-grid.html">Health & Fitness </a></li>
                                        <li><a href="shop-grid.html">History </a></li>
                                    </ul>
                                    <ul className="item item03">
                                        <li className="title">Customer Favourite</li>
                                        <li><a href="shop-grid.html">Mystery</a></li>
                                        <li><a href="shop-grid.html">Religion & Inspiration</a></li>
                                        <li><a href="shop-grid.html">Romance</a></li>
                                        <li><a href="shop-grid.html">Fiction/Fantasy</a></li>
                                        <li><a href="shop-grid.html">Sleeveless</a></li>
                                    </ul>
                                    <ul className="item item03">
                                        <li className="title">Collections</li>
                                        <li><a href="shop-grid.html">Science </a></li>
                                        <li><a href="shop-grid.html">Fiction/Fantasy</a></li>
                                        <li><a href="shop-grid.html">Self-Improvemen</a></li>
                                        <li><a href="shop-grid.html">Home & Garden</a></li>
                                        <li><a href="shop-grid.html">Humor Books</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="drop"><a href="shop-grid.html">Kids</a>
                                <div className="megamenu mega02">
                                    <ul className="item item02">
                                        <li className="title">Top Collections</li>
                                        <li><a href="shop-grid.html">American Girl</a></li>
                                        <li><a href="shop-grid.html">Diary Wimpy Kid</a></li>
                                        <li><a href="shop-grid.html">Finding Dory</a></li>
                                        <li><a href="shop-grid.html">Harry Potter</a></li>
                                        <li><a href="shop-grid.html">Land of Stories</a></li>
                                    </ul>
                                    <ul className="item item02">
                                        <li className="title">More For Kids</li>
                                        <li><a href="shop-grid.html">B&N Educators</a></li>
                                        <li><a href="shop-grid.html">B&N Kids' Club</a></li>
                                        <li><a href="shop-grid.html">Kids' Music</a></li>
                                        <li><a href="shop-grid.html">Toys & Games</a></li>
                                        <li><a href="shop-grid.html">Hoodies</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="drop"><a href="#">Pages</a>
                                <div className="megamenu dropdown">
                                    <ul className="item item01">
                                        <li><a href="about.html">About Page</a></li>
                                        <li className="label2"><a href="portfolio.html">Portfolio</a>
                                            <ul>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                        <li><a href="error404.html">404 Page</a></li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                        <li><a href="team.html">Team Page</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="drop"><a href="blog.html">Blog</a>
                                <div className="megamenu dropdown">
                                    <ul className="item item01">
                                        <li><a href="blog.html">Blog Page</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                    <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                        <li className="shop_search"><a className="search__active" href="#"></a></li>
                        <li className="wishlist"><a href="#"></a></li>
                        <li className="shopcart"><a className="cartbox_active" href="#"><span
                                    className="product_qun">3</span></a>
                            {/* <!-- Start Shopping Cart --> */}
                            <div className="block-minicart minicart__active">
                                <div className="minicart-content-wrapper">
                                    <div className="micart__close">
                                        <span>close</span>
                                    </div>
                                    <div className="items-total d-flex justify-content-between">
                                        <span>3 items</span>
                                        <span>Cart Subtotal</span>
                                    </div>
                                    <div className="total_amount text-right">
                                        <span>$66.00</span>
                                    </div>
                                    <div className="mini_action checkout">
                                        <a className="checkout__btn" href="cart.html">Go to Checkout</a>
                                    </div>
                                    <div className="single__items">
                                        <div className="miniproduct">
                                            <div className="item01 d-flex">
                                                <div className="thumb">
                                                    <a href="product-details.html"><img
                                                            src={require("../images/product/sm-img/1.jpg")}
                                                            alt="product images"/></a>
                                                </div>
                                                <div className="content">
                                                    <h6><a href="product-details.html">Voyage Yoga Bag</a></h6>
                                                    <span className="prize">$30.00</span>
                                                    <div className="product_prize d-flex justify-content-between">
                                                        <span className="qun">Qty: 01</span>
                                                        <ul className="d-flex justify-content-end">
                                                            <li><a href="#"><i className="zmdi zmdi-settings"></i></a>
                                                            </li>
                                                            <li><a href="#"><i className="zmdi zmdi-delete"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item01 d-flex mt--20">
                                                <div className="thumb">
                                                    <a href="product-details.html"><img
                                                            src={require("../images/product/sm-img/3.jpg")}
                                                            alt="product images"/></a>
                                                </div>
                                                <div className="content">
                                                    <h6><a href="product-details.html">Impulse Duffle</a></h6>
                                                    <span className="prize">$40.00</span>
                                                    <div className="product_prize d-flex justify-content-between">
                                                        <span className="qun">Qty: 03</span>
                                                        <ul className="d-flex justify-content-end">
                                                            <li><a href="#"><i className="zmdi zmdi-settings"></i></a>
                                                            </li>
                                                            <li><a href="#"><i className="zmdi zmdi-delete"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item01 d-flex mt--20">
                                                <div className="thumb">
                                                    <a href="product-details.html"><img
                                                            src={require("../images/product/sm-img/2.jpg")}
                                                            alt="product images"/></a>
                                                </div>
                                                <div className="content">
                                                    <h6><a href="product-details.html">Compete Track Tote</a></h6>
                                                    <span className="prize">$40.00</span>
                                                    <div className="product_prize d-flex justify-content-between">
                                                        <span className="qun">Qty: 03</span>
                                                        <ul className="d-flex justify-content-end">
                                                            <li><a href="#"><i className="zmdi zmdi-settings"></i></a>
                                                            </li>
                                                            <li><a href="#"><i className="zmdi zmdi-delete"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini_action cart">
                                        <a className="cart__btn" href="cart.html">View and edit cart</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Shopping Cart --> */}
                        </li>
                        <li className="setting__bar__icon"><a className="setting__active" href="#"></a>
                            <div className="searchbar__content setting__block">
                                <div className="content-inner">
                                    <div className="switcher-currency">
                                        <strong className="label switcher-label">
                                            <span>Currency</span>
                                        </strong>
                                        <div className="switcher-options">
                                            <div className="switcher-currency-trigger">
                                                <span className="currency-trigger">USD - US Dollar</span>
                                                <ul className="switcher-dropdown">
                                                    <li>GBP - British Pound Sterling</li>
                                                    <li>EUR - Euro</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="switcher-currency">
                                        <strong className="label switcher-label">
                                            <span>Language</span>
                                        </strong>
                                        <div className="switcher-options">
                                            <div className="switcher-currency-trigger">
                                                <span className="currency-trigger">English01</span>
                                                <ul className="switcher-dropdown">
                                                    <li>English02</li>
                                                    <li>English03</li>
                                                    <li>English04</li>
                                                    <li>English05</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="switcher-currency">
                                        <strong className="label switcher-label">
                                            <span>Select Store</span>
                                        </strong>
                                        <div className="switcher-options">
                                            <div className="switcher-currency-trigger">
                                                <span className="currency-trigger">Fashion Store</span>
                                                <ul className="switcher-dropdown">
                                                    <li>Furniture</li>
                                                    <li>Shoes</li>
                                                    <li>Speaker Store</li>
                                                    <li>Furniture</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="switcher-currency">
                                        <strong className="label switcher-label">
                                            <span>My Account</span>
                                        </strong>
                                        <div className="switcher-options">
                                            <div className="switcher-currency-trigger">
                                                <div className="setting__menu">
                                                    <span><a href="#">Compare Product</a></span>
                                                    <span><a href="#">My Account</a></span>
                                                    <span><a href="#">My Wishlist</a></span>
                                                    <span><a href="#">Sign In</a></span>
                                                    <span><a href="#">Create An Account</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- Start Mobile Menu --> */}
            <div className="row d-none">
                <div className="col-lg-12 d-none">
                    <nav className="mobilemenu__nav">
                        <ul className="meninmenu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Page</a></li>
                                    <li><a href="portfolio.html">Portfolio</a>
                                        <ul>
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li><a href="checkout.html">Checkout Page</a></li>
                                    <li><a href="wishlist.html">Wishlist Page</a></li>
                                    <li><a href="error404.html">404 Page</a></li>
                                    <li><a href="faq.html">Faq Page</a></li>
                                    <li><a href="team.html">Team Page</a></li>
                                </ul>
                            </li>
                            <li><a href="shop-grid.html">Shop</a>
                                <ul>
                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog Page</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <!-- End Mobile Menu --> */}
            <div className="mobile-menu d-block d-lg-none">
            </div>
            {/* <!-- Mobile Menu --> */}
        </div>
    </header>
    {/* <!-- //Header --> */}
    {/* <!-- Start Search Popup --> */}
    <div className="brown--color box-search-content search_active block-bg close__top">
        <form id="search_mini_form" className="minisearch" action="#">
            <div className="field__search">
                <input type="text" placeholder="Search entire store here..."/>
                <div className="action">
                    <a href="#"><i className="zmdi zmdi-search"></i></a>
                </div>
            </div>
        </form>
        <div className="close__wrap">
            <span>close</span>
        </div>
    </div>
    {/* <!-- End Search Popup -->
    <!-- Start Slider area --> */}
    <div className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme">
        {/* <!-- Start Single Slide --> */}
        <div className="slide animation__style10 bg-image--1 fullscreen align__center--left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slider__content">
                            <div className="contentbox">
                                <h2>Buy <span>your </span></h2>
                                <h2>favourite <span>Book </span></h2>
                                <h2>from <span>Here </span></h2>
                                <a className="shopbtn" href="#">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Single Slide -->
        <!-- Start Single Slide --> */}
        <div className="slide animation__style10 bg-image--7 fullscreen align__center--left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slider__content">
                            <div className="contentbox">
                                <h2>Buy <span>your </span></h2>
                                <h2>favourite <span>Book </span></h2>
                                <h2>from <span>Here </span></h2>
                                <a className="shopbtn" href="#">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Single Slide --> */}
    </div>
    {/* <!-- End Slider area -->
    <!-- Start BEst Seller Area --> */}
    <section className="wn__product__area brown--color pt--80  pb--30">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__title text-center">
                        <h2 className="title__be--2">New <span className="color--theme">Products</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>
            {/* <!-- Start Single Tab Content --> */}
            <div className="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
                {/* <!-- Start Single Product --> */}
                <div className="product product__style--3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product__thumb">
                            <a className="first__img" href="single-product.html"><img src={require("../images/books/1.jpg")}
                                    alt="product image"/></a>
                            <a className="second__img animation1" href="single-product.html"><img
                                    src={require("../images/books/2.jpg")} alt="product image"/></a>
                            <div className="hot__box">
                                <span className="hot-label">BEST SALLER</span>
                            </div>
                        </div>
                        <div className="product__content content--center">
                            <h4><a href="single-product.html">robin parrish</a></h4>
                            <ul className="prize d-flex">
                                <li>$35.00</li>
                                <li className="old_prize">$35.00</li>
                            </ul>
                            <div className="action">
                                <div className="actions_inner">
                                    <ul className="add_to_links">
                                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a>
                                        </li>
                                        <li><a className="wishlist" href="wishlist.html"><i
                                                    className="bi bi-shopping-cart-full"></i></a></li>
                                        <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                        <li><a data-toggle="modal" title="Quick View"
                                                className="quickview modal-view detail-link" href="#productmodal"><i
                                                    className="bi bi-search"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__hover--content">
                                <ul className="rating d-flex">
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Start Single Product -->
                <!-- Start Single Product --> */}
                <div className="product product__style--3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product__thumb">
                            <a className="first__img" href="single-product.html"><img src={require("../images/books/3.jpg")}
                                    alt="product image"/></a>
                            <a className="second__img animation1" href="single-product.html"><img
                                    src={require("../images/books/4.jpg")} alt="product image"/></a>
                            <div className="hot__box color--2">
                                <span className="hot-label">HOT</span>
                            </div>
                        </div>
                        <div className="product__content content--center">
                            <h4><a href="single-product.html">The Remainng</a></h4>
                            <ul className="prize d-flex">
                                <li>$35.00</li>
                                <li className="old_prize">$35.00</li>
                            </ul>
                            <div className="action">
                                <div className="actions_inner">
                                    <ul className="add_to_links">
                                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a>
                                        </li>
                                        <li><a className="wishlist" href="wishlist.html"><i
                                                    className="bi bi-shopping-cart-full"></i></a></li>
                                        <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                        <li><a data-toggle="modal" title="Quick View"
                                                className="quickview modal-view detail-link" href="#productmodal"><i
                                                    className="bi bi-search"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__hover--content">
                                <ul className="rating d-flex">
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Start Single Product -->
                <!-- Start Single Product --> */}
                <div className="product product__style--3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product__thumb">
                            <a className="first__img" href="single-product.html"><img src={require("../images/books/5.jpg")}
                                    alt="product image"/></a>
                            <a className="second__img animation1" href="single-product.html"><img
                                    src={require("../images/books/6.jpg")} alt="product image"/></a>
                            <div className="hot__box">
                                <span className="hot-label">BEST SALLER</span>
                            </div>
                        </div>
                        <div className="product__content content--center">
                            <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                            <ul className="prize d-flex">
                                <li>$40.00</li>
                                <li className="old_prize">$35.00</li>
                            </ul>
                            <div className="action">
                                <div className="actions_inner">
                                    <ul className="add_to_links">
                                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a>
                                        </li>
                                        <li><a className="wishlist" href="wishlist.html"><i
                                                    className="bi bi-shopping-cart-full"></i></a></li>
                                        <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                        <li><a data-toggle="modal" title="Quick View"
                                                className="quickview modal-view detail-link" href="#productmodal"><i
                                                    className="bi bi-search"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__hover--content">
                                <ul className="rating d-flex">
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Start Single Product -->
                <!-- Start Single Product --> */}
                <div className="product product__style--3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product__thumb">
                            <a className="first__img" href="single-product.html"><img src={require("../images/books/7.jpg")}
                                    alt="product image"/></a>
                            <a className="second__img animation1" href="single-product.html"><img
                                    src={require("../images/books/8.jpg")} alt="product image"/></a>
                            <div className="hot__box">
                                <span className="hot-label">HOT</span>
                            </div>
                        </div>
                        <div className="product__content content--center">
                            <h4><a href="single-product.html">Lando</a></h4>
                            <ul className="prize d-flex">
                                <li>$35.00</li>
                                <li className="old_prize">$50.00</li>
                            </ul>
                            <div className="action">
                                <div className="actions_inner">
                                    <ul className="add_to_links">
                                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a>
                                        </li>
                                        <li><a className="wishlist" href="wishlist.html"><i
                                                    className="bi bi-shopping-cart-full"></i></a></li>
                                        <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                        <li><a data-toggle="modal" title="Quick View"
                                                className="quickview modal-view detail-link" href="#productmodal"><i
                                                    className="bi bi-search"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__hover--content">
                                <ul className="rating d-flex">
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Start Single Product -->
                <!-- Start Single Product --> */}
                <div className="product product__style--3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product__thumb">
                            <a className="first__img" href="single-product.html"><img src={require("../images/books/9.jpg")}
                                    alt="product image"/></a>
                            <a className="second__img animation1" href="single-product.html"><img
                                    src={require("../images/books/10.jpg")} alt="product image"/></a>
                            <div className="hot__box">
                                <span className="hot-label">HOT</span>
                            </div>
                        </div>
                        <div className="product__content content--center">
                            <h4><a href="single-product.html">Doctor Wldo</a></h4>
                            <ul className="prize d-flex">
                                <li>$35.00</li>
                                <li className="old_prize">$35.00</li>
                            </ul>
                            <div className="action">
                                <div className="actions_inner">
                                    <ul className="add_to_links">
                                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a>
                                        </li>
                                        <li><a className="wishlist" href="wishlist.html"><i
                                                    className="bi bi-shopping-cart-full"></i></a></li>
                                        <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                        <li><a data-toggle="modal" title="Quick View"
                                                className="quickview modal-view detail-link" href="#productmodal"><i
                                                    className="bi bi-search"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__hover--content">
                                <ul className="rating d-flex">
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Start Single Product -->
                <!-- Start Single Product --> */}
                <div className="product product__style--3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product__thumb">
                            <a className="first__img" href="single-product.html"><img src={require("../images/books/11.jpg")}
                                    alt="product image"/></a>
                            <a className="second__img animation1" href="single-product.html"><img
                                    src={require("../images/books/2.jpg")} alt="product image"/></a>
                            <div className="hot__box">
                                <span className="hot-label">BEST SALER</span>
                            </div>
                        </div>
                        <div className="product__content content--center content--center">
                            <h4><a href="single-product.html">Ghost</a></h4>
                            <ul className="prize d-flex">
                                <li>$50.00</li>
                                <li className="old_prize">$35.00</li>
                            </ul>
                            <div className="action">
                                <div className="actions_inner">
                                    <ul className="add_to_links">
                                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a>
                                        </li>
                                        <li><a className="wishlist" href="wishlist.html"><i
                                                    className="bi bi-shopping-cart-full"></i></a></li>
                                        <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                        <li><a data-toggle="modal" title="Quick View"
                                                className="quickview modal-view detail-link" href="#productmodal"><i
                                                    className="bi bi-search"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__hover--content">
                                <ul className="rating d-flex">
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li className="on"><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Start Single Product --> */}
                </div>
            </div>
            {/* <!-- End Single Tab Content --> */}
        </div>
    </section>
    {/* <!-- Start BEst Seller Area -->
    <!-- Start NEwsletter Area --> */}
    <section className="wn__newsletter__area bg-image--2">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 offset-lg-5 col-md-12 col-12 ptb--150">
                    <div className="section__title text-center">
                        <h2>Stay With Us</h2>
                    </div>
                    <div className="newsletter__block text-center">
                        <p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest
                            lookbooks and exclusive offers.</p>
                        <form action="#">
                            <div className="newsletter__box">
                                <input type="email" placeholder="Enter your e-mail"/>
                                <button>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End NEwsletter Area -->
    <!-- Start Best Seller Area --> */}
    <section className="wn__bestseller__area bg--white pt--80  pb--30">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__title text-center">
                        <h2 className="title__be--2">All <span className="color--theme">Products</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>
            <div className="row mt--50">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <div className="product__nav nav justify-content-center" role="tablist">
                        <a className="nav-item nav-link active" data-toggle="tab" href="#nav-all" role="tab">ALL</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#nav-biographic"
                            role="tab">BIOGRAPHIC</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#nav-adventure"
                            role="tab">ADVENTURE</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#nav-children" role="tab">CHILDREN</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#nav-cook" role="tab">COOK</a>
                    </div>
                </div>
            </div>
            <div className="tab__container mt--60">
                {/* <!-- Start Single Tab Content --> */}
                <div className="row single__tab tab-pane fade show active" id="nav-all" role="tabpanel">
                    <div className="product__indicator--4 arrows_style owl-carousel owl-theme">
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/1.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center content--center">
                                        <h4><a href="single-product.html">Ghost</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$50.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center content--center">
                                        <h4><a href="single-product.html">Ghost</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$50.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/5.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">HOT</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Doctor Wldo</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$35.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">HOT</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Doctor Wldo</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$35.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">HOT</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Lando</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$35.00</li>
                                            <li className="old_prize">$50.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/11.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/5.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">HOT</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Lando</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$35.00</li>
                                            <li className="old_prize">$50.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/12.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/5.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Tab Content -->
                <!-- Start Single Tab Content --> */}
                <div className="row single__tab tab-pane fade" id="nav-biographic" role="tabpanel">
                    <div className="product__indicator--4 arrows_style owl-carousel owl-theme">
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/1.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/10.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/5.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/1.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/11.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/12.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/5.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Tab Content -->
                <!-- Start Single Tab Content --> */}
                <div className="row single__tab tab-pane fade" id="nav-adventure" role="tabpanel">
                    <div className="product__indicator--4 arrows_style owl-carousel owl-theme">
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/12.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/11.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/1.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/5.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/11.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/10.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/1.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/10.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Tab Content -->
                <!-- Start Single Tab Content --> */}
                <div className="row single__tab tab-pane fade" id="nav-children" role="tabpanel">
                    <div className="product__indicator--4 arrows_style owl-carousel owl-theme">
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/1.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/10.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/12.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Produ:ct --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Pro:duct --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/5.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Pr:oduct --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/12.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Sin:gle Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/1.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Tab Content -->
                <!-- Start Single Tab Content --> */}
                <div className="row single__tab tab-pane fade" id="nav-cook" role="tabpanel">
                    <div className="product__indicator--4 arrows_style owl-carousel owl-theme">
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/10.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/9.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Produc:t --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/7.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/4.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                        <div className="single__product">
                            {/* <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/8.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/3.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product -->
                            <!-- Start Single Product --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product product__style--3">
                                    <div className="product__thumb">
                                        <a className="first__img" href="single-product.html"><img
                                                src={require("../images/books/2.jpg")} alt="product image"/></a>
                                        <a className="second__img animation1" href="single-product.html"><img
                                                src={require("../images/books/6.jpg")} alt="product image"/></a>
                                        <div className="hot__box">
                                            <span className="hot-label">BEST SALLER</span>
                                        </div>
                                    </div>
                                    <div className="product__content content--center">
                                        <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                                        <ul className="prize d-flex">
                                            <li>$40.00</li>
                                            <li className="old_prize">$35.00</li>
                                        </ul>
                                        <div className="action">
                                            <div className="actions_inner">
                                                <ul className="add_to_links">
                                                    <li><a className="cart" href="cart.html"><i
                                                                className="bi bi-shopping-bag4"></i></a></li>
                                                    <li><a className="wishlist" href="wishlist.html"><i
                                                                className="bi bi-shopping-cart-full"></i></a></li>
                                                    <li><a className="compare" href="#"><i
                                                                className="bi bi-heart-beat"></i></a></li>
                                                    <li><a data-toggle="modal" title="Quick View"
                                                            className="quickview modal-view detail-link"
                                                            href="#productmodal"><i className="bi bi-search"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product__hover--content">
                                            <ul className="rating d-flex">
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li className="on"><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Single Product --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Tab Co:ntent --> */}
            </div>
        </div>
    </section>
    {/* <!-- Start BEst Seller Area -->
    <!-- Start Recent Post Area --> */}
    <section className="wn__recent__post bg--gray ptb--80">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__title text-center">
                        <h2 className="title__be--2">Our <span className="color--theme">Blog</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>
            <div className="row mt--50">
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="post__itam">
                        <div className="content">
                            <h3><a href="blog-details.html">International activities of the Frankfurt Book </a></h3>
                            <p>We are proud to announce the very first the edition of the frankfurt news.We are
                                proud to announce the very first of edition of the fault frankfurt news for us.</p>
                            <div className="post__time">
                                <span className="day">Dec 06, 18</span>
                                <div className="post-meta">
                                    <ul>
                                        <li><a href="#"><i className="bi bi-love"></i>72</a></li>
                                        <li><a href="#"><i className="bi bi-chat-bubble"></i>27</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="post__itam">
                        <div className="content">
                            <h3><a href="blog-details.html">Reading has a signficant info number of benefits</a>
                            </h3>
                            <p>Find all the information you need to ensure your experience.Find all the information
                                you need to ensure your experience . Find all the information you of.</p>
                            <div className="post__time">
                                <span className="day">Mar 08, 18</span>
                                <div className="post-meta">
                                    <ul>
                                        <li><a href="#"><i className="bi bi-love"></i>72</a></li>
                                        <li><a href="#"><i className="bi bi-chat-bubble"></i>27</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="post__itam">
                        <div className="content">
                            <h3><a href="blog-details.html">The London Book Fair is to be packed with exciting </a>
                            </h3>
                            <p>The London Book Fair is the global area inon marketplace for rights negotiation.The
                                year London Book Fair is the global area inon forg marketplace for rights.</p>
                            <div className="post__time">
                                <span className="day">Nov 11, 18</span>
                                <div className="post-meta">
                                    <ul>
                                        <li><a href="#"><i className="bi bi-love"></i>72</a></li>
                                        <li><a href="#"><i className="bi bi-chat-bubble"></i>27</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Recent Post Area -->
    <!-- Best Sale Area --> */}
    <section className="best-seel-area pt--80 pb--60">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__title text-center pb--50">
                        <h2 className="title__be--2">Best <span className="color--theme">Seller </span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider center">
            {/* <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/1.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end -->
            <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/2.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end -->
            <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/3.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end -->
            <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/4.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end -->
            <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/5.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end -->
            <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/6.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end -->
            <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/7.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end -->
            <!-- Single product start --> */}
            <div className="product product__style--3">
                <div className="product__thumb">
                    <a className="first__img" href="single-product.html"><img src={require("../images/best-sell-product/8.jpg")}
                            alt="product image"/></a>
                </div>
                <div className="product__content content--center">
                    <div className="action">
                        <div className="actions_inner">
                            <ul className="add_to_links">
                                <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a></li>
                                <li><a className="wishlist" href="wishlist.html"><i
                                            className="bi bi-shopping-cart-full"></i></a></li>
                                <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                <li><a data-toggle="modal" title="Quick View"
                                        className="quickview modal-view detail-link" href="#productmodal"><i
                                            className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__hover--content">
                        <ul className="rating d-flex">
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li className="on"><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Single product end --> */}
        </div>
    </section>
    {/* <!-- Best Sale Area Area -->
    <!-- Footer Area --> */}
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
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered duskam alteration variations of passages</p>
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
                                <p>Copyright <i className="fa fa-copyright"></i> <a
                                        href="https://freethemescloud.com/">Free themes Cloud.</a> All Rights
                                    Reserved</p>
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
    {/* <!-- //Footer Area -->
    <!-- QUICKVIEW PRODUCT --> */}
    <div id="quickview-wrapper">
        {/* <!-- Modal --> */}
        <div className="modal fade" id="productmodal" tabindex="-1" role="dialog">
            <div className="modal-dialog modal__container" role="document">
                <div className="modal-content">
                    <div className="modal-header modal__header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-product">
                            {/* <!-- Start product images --> */}
                            <div className="product-images">
                                <div className="main-image images">
                                    <img alt="big images" src={require("../images/product/big-img/1.jpg")}/>
                                </div>
                            </div>
                            {/* <!-- end product images --> */}
                            <div className="product-info">
                                <h1>Simple Fabric Bags</h1>
                                <div className="rating__and__review">
                                    <ul className="rating">
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
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
                                    Designed for simplicity and made from high quality materials. Its sleek geometry
                                    and material combinations creates a modern look.
                                </div>
                                <div className="select__color">
                                    <h2>Select color</h2>
                                    <ul className="color__list">
                                        <li className="red"><a title="Red" href="#">Red</a></li>
                                        <li className="gold"><a title="Gold" href="#">Gold</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                    </ul>
                                </div>
                                <div className="select__size">
                                    <h2>Select size</h2>
                                    <ul className="color__list">
                                        <li className="l__size"><a title="L" href="#">L</a></li>
                                        <li className="m__size"><a title="M" href="#">M</a></li>
                                        <li className="s__size"><a title="S" href="#">S</a></li>
                                        <li className="xl__size"><a title="XL" href="#">XL</a></li>
                                        <li className="xxl__size"><a title="XXL" href="#">XXL</a></li>
                                    </ul>
                                </div>
                                <div className="social-sharing">
                                    <div className="widget widget_socialsharing_widget">
                                        <h3 className="widget-title-modal">Share this product</h3>
                                        <ul className="social__net social__net--2 d-flex justify-content-start">
                                            <li className="facebook"><a href="#" className="rss social-icon"><i
                                                        className="zmdi zmdi-rss"></i></a></li>
                                            <li className="linkedin"><a href="#" className="linkedin social-icon"><i
                                                        className="zmdi zmdi-linkedin"></i></a></li>
                                            <li className="pinterest"><a href="#" className="pinterest social-icon"><i
                                                        className="zmdi zmdi-pinterest"></i></a></li>
                                            <li className="tumblr"><a href="#" className="tumblr social-icon"><i
                                                        className="zmdi zmdi-tumblr"></i></a></li>
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
</div>


    )
}
