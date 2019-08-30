import React from "react";
import { connect } from "react-redux";
import { addArticle, minusArticle, deletearticle } from "../actions";

const shopping = props => {
  let x = 0;
  for (let i = 0; i < props.articles.length; i++) {
    x += props.articles[i].price * props.articles[i].qt;
  }
  console.log(props.articles);
  return (
    <div
      style={{
        fontFamily: "Poppins,sans-serif",
        margin: "20px",
        marginLeft: "160px",
        marginTop: "200px"
      }}
    >
      <h3>Commande en ligne</h3>
      <div>
        <form style={{ margin: "20px" }} action="#">
          <table class="table table-hover">
            <thead style={{ marginTop: "40px", marginBottom: "40px" }}>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Livre</th>
                <th scope="col">Quantité</th>
                <th scope="col">Prix</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {props.articles.map((el, i) => (
                <tr>
                  <td key={i}>{i}</td>
                  <td scope="row">
                    <img
                      src={el.img}
                      className="product-thumbnail"
                      style={{ height: "50px", width: "50px" }}
                      alt="article"
                    />
                  </td>
                  <td scope="row">
                    <button
                      class="btn btn-outline-info"
                      onClick={() => {
                        props.addarticle(i);
                      }}
                    >
                      +
                    </button>
                    {el.qt}
                    <button
                      class="btn btn-outline-info"
                      onClick={() => {
                        props.minusarticle(i);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td scope="row" className="product-price">
                    {el.price * el.qt}DT
                  </td>
                  <td scope="row">
                    <button
                      class="btn btn-outline-info"
                      onClick={() => {
                        props.deletearticle(el.id);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td />
                <td />
                <td />
                <td scope="row">
                  <h4 style={{ marginTop: "0" }}>Total Commande: {x}DT</h4>
                </td>
                <td scope="row">
                  <button
                    type="button"
                    class="btn btn-info"
                    style={{ backgroundColor: "#e59285", border: "none" }}
                  >
                    Confirmer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    articles: state.selledarticle
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addarticle: a => dispatch(addArticle(a)),
    minusarticle: m => dispatch(minusArticle(m)),
    deletearticle: x => dispatch(deletearticle(x))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(shopping);
