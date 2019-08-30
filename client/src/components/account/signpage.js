import React from "react";
import SignupForm from './register'
import connect from 'react-redux'
import userSignupRequest from '../../actions'

export class SignupPage extends React.Component {
    render(){
        const {userSignupRequest}=this.props
        return(
            <SignupForm userSignupRequest={userSignupRequest}/>
        )
    }
}
SignupPage.propTypes={
    userSignupRequest:React.propTypes.func.isRequired
  }
  export default connect (null,{userSignupRequest})(SignupPage)