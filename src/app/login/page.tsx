/* eslint-disable */
'use client'
import './login.css';
import { useForm } from "react-hook-form";
import {firestore} from '../firebase'
import {useSession, signIn, signOut} from "next-auth/react"

export default function Pages(){
  const { data : session } = useSession();
  
  return(
    <div className='login-main-back'>
      <div className='login-title-text'>로그인</div>
      <HookForm />
      <button className='google-login-btn' onClick={()=>{signIn();}}>구글 로그인</button>
    </div>
  )
}


interface HookFormTypes {
  email: string;
  password: string;
}

const HookForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<HookFormTypes>();
  
  const onValid = async(data: HookFormTypes) => {

    firestore.collection('users').where('email', '==', data.email ).get().then((result)=>{
      if(result.empty==true){   // 가입한 아아디가 없으면
        alert('회원가입해주세요');
        return
      } else{  // 가입한 아이디가 있으면
        result.forEach((doc)=>{
          if(doc.data().password === data.password){
            alert('로그인 되었습니다')
          } else{
            alert('비밀번호가 틀렸습니다.')
          }
        })
      }
    })

    
  };

  return (
    <form className='login-main-back' onSubmit={handleSubmit(onValid)}>
      <input
        {...register("email", { required: true,
          pattern: {
            value:
            /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            message:
            '메일을 올바르게 써주세요',
          }
         })}
        type="text"
        placeholder="EMAIL"
        className='info-input login-input'
      />
      <div>{errors.email?.type === 'pattern' && errors.email.message}</div>

      <input
        {...register("password", { required: true, minLength: 8,
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{1,}$/,
          message:
          '비밀번호를 8~16자로 영문 대소문자, 특수기호를 조합해서 사용하세요. ',
        }
        
        })}
        type="password"
        placeholder="PASSWORD"
        className='info-input login-input'
      />
      <div>{errors.password?.type === 'pattern' && errors.password.message}</div>

      <input type="submit" />
    </form>
  );
};

