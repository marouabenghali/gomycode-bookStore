import React, { Component } from "react";
import Nav from "./navbar";
import Articles from "./articles";
// import Shopping from "./shopping";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dashbord from './dashbord'
// import Product from "./Product";
import Home from "./Home";
// import Bookinfo from "./bookinfo";
// import Checkout from "./Checkout";
// import SignupForm from "./account/register";

// import LoginForm from "./account/Login";
// import AdminLoginForm from "./account admin/Login"
// import AdminSignupForm from "./account admin/register"


// import BookAdminlist from "./bookadminlist";
// import Addbookadmin from "./addbookadmin";
// import Updatebookadmin from "./updatebookadmin";

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>

{/* <center>

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
        /> */}


      {/* <AdminLoginForm/>
      <AdminSignupForm/> */}
      {/* <SignupForm/> */}
      {/* <LoginForm/> */}
      <Nav />
      {/* <Dashbord/>
      <Route exact path="/dashbord" component={Dashbord}/> */} */}
               
 <Route exact path="/" component={Articles} /> 
         {/* <Route exact path="/product" component={Product} />
         <Route exact path="/myshopping" component={Shopping} />
         <Route exact path="/bookinfo" component={Bookinfo}/> */}  */}
        
      </BrowserRouter>
    );
  }
}
