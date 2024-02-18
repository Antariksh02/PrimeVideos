import React from 'react'
import './Login.css'
export default function Login() {
  return (
   <div className="LoginSection">
    <div className="Login">
<div className="logo">
  <img width={"150px"} src='https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png'/>
</div>
   
    <div className="LoginPage">
      <h3>Sign in</h3>
      <div className="userInput">
        <p>Email or mobile phone number</p>
        <input type="text" />
        <input type="button" value='Continue' />
      </div>
      <p className='condition'>By continuing, you agree to the Amazon<span> Conditions of Use and Privacy Notice.</span></p>
      &nbsp;
      <h6>Need help?</h6>
    </div>
    <div className="NewtoAmazon">
      <hr/>
      <h6>New to Amazon?</h6>
    </div>
    <div className="createAmazonAcc">
      <input type='button' value="Create your Amazon account"/>
    </div>
 
    </div>
   </div>
  )
}
