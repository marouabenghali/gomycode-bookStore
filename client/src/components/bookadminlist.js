import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getbooksadmin, deleteBookAdmin } from "../actions";

class BookAdminlist extends Component {
  componentWillMount() {
    this.props.getbooksadmin();
  }
  render() {
    return (
      <div className="card">
        {this.props.bookadmin.map((el, i) => (
          <div
            key={i}
            style={{
              border: "2px solid black",
              width: "300px",
              margin: "20px",
              textAlign: "center"
            }}
          >
   
            <h1>titre: {el.title}</h1>
            <h2>image: {el.img} </h2>
            <h3>prix: {el.price}</h3>
            <h3>quantite: {el.qt}</h3>
            <h3>categorie: {el.type} </h3>
            <h3>label: {el.label}</h3>
            <h3>description: {el.description}</h3>

            <Link to={`/updatebookadmin/${el._id}`}>
              <button>Update</button>
            </Link>
            <button
              onClick={() => {
                this.props.deleteBookAdmin(el._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(
  state => {
    return { bookadmin: state.bookadmin };
  },
  { getbooksadmin, deleteBookAdmin }
)(BookAdminlist);
