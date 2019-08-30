import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { buyArticle } from "../actions";



class Bookinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      article: []
    };
  }
  componentDidMount = () => {
    this.getcontact();
  };
  getcontact = () => {
    // axios.get(`/book-list-one/${this.props.id}`).then(res => {
    //   this.setState({
    // 	articles: res.data
    //   });
    // });
    // console.log(this.props.articles)
    const article=this.props.articles.filter((e, i) => e.id === this.props.bookId);
    this.setState({
    	article
    })
  };
  render() {
    // this.getcontact();
    // const { articles, bookId } = this.props;
console.log(this.state.article)
    return !this.props.articles && !this.props.bookId ? "loading" : (
        <div className="maincontent bg--white pt--80 pb--55">
								
        <div className="container">
          <div className="row">
		  {this.state.article.map(el=>
            <div className="col-lg-9 col-12">
              <div className="wn__single__product">
                <div className="row">

                  <div className="col-lg-6 col-12">
                    <div className="wn__fotorama__wrapper">
                      <div
                        className="fotorama wn__fotorama__action"
                        data-nav="thumbs"
                      >
                        <a href="1.jpg">
                          <img src={el.img} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="product__info__main">
                      <h1>{el.title}</h1>
                      <div className="product-reviews-summary d-flex">
                        <ul className="rating-summary d-flex">
                          <li>
                            <i className="zmdi zmdi-star-outline"></i>
                          </li>
                          <li>
                            <i className="zmdi zmdi-star-outline"></i>
                          </li>
                          <li>
                            <i className="zmdi zmdi-star-outline"></i>
                          </li>
                          <li className="off">
                            <i className="zmdi zmdi-star-outline"></i>
                          </li>
                          <li className="off">
                            <i className="zmdi zmdi-star-outline"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="price-box">
                        <span> {el.price}DT</span>
                      </div>
                      <div className="product__overview">
					 <p>{el.rate}</p>
					 <p>{el.type}</p>
					 <p>{el.label}</p>
                       
                      </div>
                      <div className="box-tocart d-flex">
                        <span>En Stock:{el.qt}</span>
                        <input
                          id="qty"
                          className="input-text qty"
                          name="qty"
                          min="1"
                          value="1"
                          title="Qty"
                          type="number"
                        />
                        <div className="addtocart__actions">
                          <button
                            className="tocart"
                            type="submit"
							title="Add to Cart"
							onClick={() => {
								buyArticle({ ...el, qt: 1 });
							  }}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className="product-addto-links clearfix">
                          <a className="wishlist" href="#"></a>
                          <a className="compare" href="#"></a>
                        </div>
                      </div>
                      <div className="product_meta">
                        
                      </div>
                      <div className="product-share">
                        <ul>
                          <li className="categories-title">Share :</li>
                          <li>
                            <a href="#">
                              <i className="icon-social-twitter icons"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-social-tumblr icons"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-social-facebook icons"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-social-linkedin icons"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__info__detailed">
               
                <div className="tab__container">
                  <div
                    className="pro__tab_label tab-pane fade show active"
                    id="nav-details"
                    role="tabpanel"
                  >
                    <div className="description__attribute">
					  <h4>Description:</h4>
					  <p>{el.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
        </div>
      </div>
						
						</div>            
    );
}
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    filter: { ...state },
    bookId: state.selectedBook
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
)(Bookinfo);
