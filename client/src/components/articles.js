import React from "react";
import { connect } from "react-redux";
import { buyArticle, selectBook } from "../actions";
import Rate from "./rating";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {Link} from 'react-router-dom'

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

const article = ({ articles, buyArticle, filter, selectBook }) => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={"http://demo.devitems.com/boighor-v3/images/bg/1.jpg"} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={"http://demo.devitems.com/boighor-v3/images/bg/7.jpg"} />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
      <section className="wn__product__area brown--color pt--80  pb--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__title text-center">
                <h2 className="title__be--2">
                  New <span className="color--theme">Products</span>
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered lebmid alteration in
                  some ledmid form
                </p>
              </div>
            </div>
          </div>
          <div className="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
            <div className="product product__style--3">
              {filterarticles(articles, filter).map((el, i) => (
                <Link to="/bookinfo">
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-12"
                    key={i}
                    onClick={() => {
                      selectBook(el.id);
                    }}
                  >
                    <div className="product__thumb">
                      <a className="first__img" href="single-product.html">
                        <img src={el.img} alt="product image"></img>
                      </a>
                      <a
                        className="second__img animation1"
                        href="single-product.html"
                      >
                        <img
                          src={
                            "http://demo.devitems.com/boighor-v3/images/books/1.jpg"
                          }
                          alt="product image"
                        ></img>
                      </a>
                      <div
                        className="hot__box"
                        style={{ height: "20px", width: "120px" }}
                      >
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
                        {/* <h5
                  className="card-subtitle"
                  style={{ color: el.qt > 0 ? "green" : "red" }}
                >
                  {el.qt > 0 ? "En stock" : "N'est pas en stock"} ( {el.qt} )
                </h5> */}
                      </ul>
                      <div className="action">
                        <div className="actions_inner">
                          <ul className="add_to_links">
                            {el.qt === 0 ? (
                              <li>
                                <a className="cart" href="cart.html">
                                  <i
                                    disabled
                                    className="bi bi-shopping-bag4"
                                  ></i>
                                </a>
                              </li>
                            ) : (
                              <li>
                                <a
                                  className="cart"
                                  href="cart.html"
                                  onClick={() => {
                                    buyArticle({ ...el, qt: 1 });
                                  }}
                                >
                                  <i className="bi bi-shopping-bag4"></i>
                                </a>
                              </li>
                            )}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    articles: state.articles,
    filter: { ...state }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyArticle: buy => dispatch(buyArticle(buy)),
    selectBook: id => dispatch(selectBook(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(article);

{
  /* // <div style={{ display: "flex", flexWrap: "wrap", marginTop: "75px" }}>
      //   {filterarticles(articles, filter).map((el, i) => (
      //     <div */
}
//       style={{
//         padding: "1.5%"
//       }}
//       key={i}
//     >
//       <div className="card" style={{ width: "20rem" }}>
//         <img
//           src={el.img}
//           alt="articles"
//           style={{ width: "15rem", height: "12rem", margin: "auto" }}
//         />

//         <div className="card-body">
//           <h4 className="card-title">{el.type.slice(0, -1)}</h4>
//           <h5
//             className="card-subtitle"
//             style={{ color: el.qt > 0 ? "green" : "red" }}
//           >
//             {el.qt > 0 ? "En stock" : "N'est pas en stock"} ( {el.qt} )
//           </h5>
//           <p className="card-text">{el.price}$</p>
//           {el.qt === 0 ? (
//             <button disabled>Buy</button>
//           ) : (
//             <button
//               onClick={() => {
//                 buyArticle({ ...el, qt: 1 });
//               }}
//             >
//               Buy
//             </button>
//           )}
//         </div>
//         <Rate stars={el.rate} />
//       </div>
//     </div>
//   ))}
// </div>
// </div>
