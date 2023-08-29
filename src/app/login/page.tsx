'use client'
import './login.css';

export default function Pages(){


  return(
    <div className='login-main-back'>
      <div className='login-title-text'>로그인</div>
      <input className="info-input login-input" placeholder='이메일' name='email'  />
      <input className="info-input login-input" placeholder='패스워드' name='password' />

      <button className='login-btn' >로그인하기</button>
    </div>
  )
}