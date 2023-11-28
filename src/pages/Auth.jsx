import React from 'react'
import alone from "../assets/alone.jpg";
import "../CSS/Auth.css";

const Auth = () => {
  return (
    <div className='auth'>
      <div className='left'>
         <img src={alone} alt='' width={500} height={500} />
      </div>
      <div className='right'>
        <h3>Welcome to the Page! Here you can rate your fav movies !!</h3>
        <div className='auth-login'>
          <button>Login to Page</button>
        </div>
      </div>
    </div>
  )
}

export default Auth 