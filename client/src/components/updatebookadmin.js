import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getbooksadmin, updateBookAdmin } from "../actions";

class updatebookadmin extends Component {
  state = {
    bookadmin: {}
  };

  componentDidMount = () => {
    this.props.getbooksadmin();

    const arr = this.props.bookadmin.filter(el => el._id === this.props.id);
    let bookadmin = arr[0];
    this.setState({
      bookadmin
    });
  };

  render() {
    return (
      <div>
        <center>
          titre:
          <input
            style={{ marginBottom: "20px", marginTop: "30px" }}
            placeholder="titre"
            value={this.state.bookadmin && this.state.bookadmin.title}
            onChange={e => {
              e.preventDefault();
              this.setState({
                bookadmin: { ...this.state.bookadmin, title: e.target.value }
              });
            }}
          />
          <br />
          image:
          <input
            style={{ marginBottom: "20px", marginTop: "30px" }}
            placeholder="adresse image"
            value={this.state.bookadmin && this.state.bookadmin.title}
            onChange={e => {
              e.preventDefault();
              this.setState({
                bookadmin: { ...this.state.bookadmin, image: e.target.value }
              });
            }}
          />
          <br />
          prix:{" "}
          <input
            style={{ marginBottom: "20px" }}
            placeholder="prix"
            value={this.state.bookadmin && this.state.bookadmin.price}
            onChange={e => {
              e.preventDefault();
              this.setState({
                bookadmin: { ...this.state.bookadmin, price: e.target.value }
              });
            }}
          />
          <br />
          quantité:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="quantité"
            value={this.state.bookadmin && this.state.bookadmin.qt}
            onChange={e => {
              e.preventDefault();
              this.setState({
                bookadmin: { ...this.state.bookadmin, qt: e.target.value }
              });
            }}
          />
          <br />
          catégorie:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="quantité"
            value={this.state.bookadmin && this.state.bookadmin.qt}
            onChange={e => {
              e.preventDefault();
              this.setState({
                bookadmin: { ...this.state.bookadmin, type: e.target.value }
              });
            }}
          />
          <br />
          Label:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="quantité"
            value={this.state.bookadmin && this.state.bookadmin.qt}
            onChange={e => {
              e.preventDefault();
              this.setState({
                bookadmin: { ...this.state.bookadmin, label: e.target.value }
              });
            }}
          />
          <br />
          Description:{" "}
          <input
            style={{ marginBottom: "20px", marginLeft: "18px" }}
            placeholder="quantité"
            value={this.state.bookadmin && this.state.bookadmin.qt}
            onChange={e => {
              e.preventDefault();
              this.setState({
                bookadmin: { ...this.state.bookadmin, description: e.target.value }
              });
            }}
          />
          <br />
          <Link to="/bookadminlist">
            <button
              onClick={() => {
                this.props.updateBookAdmin(this.state.bookadmin._id, {
                  title: this.state.bookadmin.title,
                  price: this.state.bookadmin.price,
                  qt: this.state.bookadmin.qt
                });
              }}
            >
              Update book
            </button>
          </Link>
        </center>
      </div>
    );
  }
}
export default connect(
  state => {
    return { bookadmin: state.bookadmin };
  },
  { getbooksadmin, updateBookAdmin}
)(updatebookadmin);
