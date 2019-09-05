import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import BookAdminlist from "./bookadminlist";
import Addbookadmin from "./addbookadmin";
import Updatebookadmin from "./updatebookadmin";


export default class Dashbord extends Component {
  render() {
    return (
      <div>

        <center>
        
            
          <Link to="/bookadminlist">
            <button>Book List</button>
          </Link>
          <Link to="/addbookadmin">
            <button>Add Book</button>
          </Link>
        </center>
        <Route exact path="/bookadminlist" render={() => <BookAdminlist />} />
        <Route exact path="/addbookadmin" render={() => <Addbookadmin />} />
        <Route
          path="/updatebookadmin/:id"
          render={props => <Updatebookadmin id={props.match.params.id} />}
        />
        
        </div>
    );
  }
}
