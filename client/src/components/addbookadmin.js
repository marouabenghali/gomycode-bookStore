import React, { Component } from "react";
import { connect } from "react-redux";
import { addBookAdmin } from "../actions";
import { Link } from "react-router-dom";

class addbookadmin extends Component {
  state = {
    title: "",
    img: "",
    price: "",
    qt:"",
    type:"",
    label:"",
    description:""
  };
  render() {
    return (
      <div>
        <center>
          Titre:{" "}
          <input
            style={{ marginBottom: "20px", marginTop: "30px" }}
            placeholder="titre"
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
          <br />
          Image:{" "}
          <input
            style={{ marginBottom: "20px" }}
            placeholder="lien image"
            onChange={e => {
              this.setState({ img: e.target.value });
            }}
          />
          <br />
          Prix:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="prix"
            onChange={e => {
              this.setState({ price: e.target.value });
            }}
          />
          <br />
          Quantite:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="quantité"
            onChange={e => {
              this.setState({ qt: e.target.value });
            }}
          />
          <br />
          Categorie:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="type"
            onChange={e => {
              this.setState({ type: e.target.value });
            }}
          />
          <br />
          Label:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="label"
            onChange={e => {
              this.setState({ label: e.target.value });
            }}
          />
          <br />
          Description:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="description"
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
          />
          <br />
          <Link to="/bookadminlist">
            <button
              onClick={() => {
                this.props.addBookAdmin(this.state);
              }}
            >
              addbook
            </button>
          </Link>
        </center>
      </div>
    );
  }
}
export default connect(
  null,
  { addBookAdmin }
)(addbookadmin);
