'use client'
import React, { useEffect, useRef, useState } from 'react';
import './signup.css';
import Modal from '../common/modal';
import { useModalState, useSetModalState } from '../common/context';
// import { useGlobalContext } from '../common/context';

export default function Pages(){

  // context api로 state 가져오기
  // const { setDisplayModal, modalContent, setModalContent } = useGlobalContext(); 


  // 이메일, 패스워드 안내 문구
  const [emailText, setEmailText] = useState('메일을 올바르게 써주세요');
  const [passwordText, setPasswordText] = useState('비밀번호를 올바르게 써주세요');

  // copt 쓴거 저장하기
  const [postInfo, setPostInfo] = useState({id:"", password:"", email:""});

  // email 정규식 검증 + input 적은 내용 저장
  const EmailInputChange =(e : React.ChangeEvent<HTMLInputElement> )=>{
    const inputValue = e.target.value;

    const regExp=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (inputValue.match(regExp) != null) {  // 정규식을 만족했을때
      setEmailText('올바른 이메일 형식입니다')
    }
    else { // 정규식을 만족하지 않았을때
      setEmailText('메일을 올바르게 써주세요')
    }

    setPostInfo({
      ...postInfo,
      [e.target.name]: inputValue
    });
  }

  // password 정규식 검증 + input 적은 내용 저장
  const PasswordInputChange =(e : React.ChangeEvent<HTMLInputElement> )=>{
    const inputValue = e.target.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    if (inputValue.match(regExp) != null) {  // 정규식을 만족했을때
      setPasswordText('좋습니다')
    }
    else { // 정규식을 만족하지 않았을때
      setPasswordText('8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개')
    }

    setPostInfo({
      ...postInfo,
      [e.target.name]: inputValue
    });
  }

  useEffect(()=>{
    console.log(postInfo)
  },[postInfo])


  // 회원가입 버튼을 눌렀을 때 잘못된 부분 focus 시키기 위한 ref
  const emailInputRef  = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);


  // 회원가입 버튼
  const SighUpBtn = () => {
    // 이메일 검사
    const regExp=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (postInfo.email.match(regExp) != null) {  // 정규식을 만족했을때
      // 패스워드 검사
      const regExp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
      if (postInfo.password.match(regExp2) != null) {  // 정규식을 만족했을때
        alert('회원가입 완료!')
      }
      else { // 정규식을 만족하지 않았을때
        passwordInputRef.current?.focus();
        // setModalContent?.('비밀번호 제한 : 8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개');
        // setDisplayModal?.('flex');
        dispatch({
          type: 'SHOW',
          text: 'flex',
          // contents : '비밀번호 제한 : 8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개'
        });
      }
    }
    else { // 정규식을 만족하지 않았을때
      // email useRef를 사용하여 focus
      emailInputRef.current?.focus();
      // setModalContent?.('이메일 제한 : 메일을 올바르게 써주세요');
      // setDisplayModal?.('flex');
      dispatch({
        type: 'SHOW',
        text: 'flex',
        // contents : "이메일 제한 : 메일을 올바르게 써주세요"
      });
    }

  }

  const dispatch = useSetModalState();



  return(
    <div className='signup-main-back'>
      <div className='signup-title-text'>회원가입</div>
      <input className="info-input" placeholder='이메일' name='email' onChange={EmailInputChange} ref={emailInputRef} />
      <div className='info-text'>{emailText}</div>
      <input className="info-input" placeholder='패스워드' name='password' onChange={PasswordInputChange} ref={passwordInputRef} />
      <div className='info-text'>{passwordText}</div>

      <button className='signup-btn' onClick={()=>{SighUpBtn();}}>회원가입하기</button>
      <Modal />
    </div>
  )
}





