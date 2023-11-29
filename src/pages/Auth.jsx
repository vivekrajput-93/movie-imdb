import React from 'react'
import alone from "../assets/alone.jpg";
import "../CSS/Auth.css";
import { useMutation } from '@tanstack/react-query';
import { Mutation } from '../components/Mutation';
import { useNavigate } from 'react-router-dom';


const Auth = () => {

  const {data, mutate} = useMutation({mutationKey : ["login"], mutationFn : Mutation,});

  const navigate = useNavigate();

  const handleLogin = async() => {
      await mutate();
      localStorage.setItem("guest_session_id", data.guest_session_id);
      navigate("/")
  }



  return (
    <div className='auth'>
      <div className='left'>
         <img src={alone} alt='' width={500} height={500} />
      </div>
      <div className='right'>
        <h3>Welcome to the Page! Here you can rate your fav movies !!</h3>
        <div className='auth-login'>
          <button className='btn' onClick={handleLogin}>Login to Page</button>
        </div>
      </div>
    </div>
  )
}

export default Auth 