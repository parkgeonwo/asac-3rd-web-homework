'use client'
import './login.css';

import { useForm } from "react-hook-form";

export default function Pages(){


  return(
    <div className='login-main-back'>
      <div className='login-title-text'>로그인</div>
      <HookForm />
      {/* <input className="info-input login-input" placeholder='이메일' name='email'  />
      <input className="info-input login-input" placeholder='패스워드' name='password' />

      <button className='login-btn' >로그인하기</button> */}
    </div>
  )
}


interface HookFormTypes {
  email: string;
  password: string;
}

const HookForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<HookFormTypes>();
  
  const onValid = (data: HookFormTypes) => {
    console.log(data);
    
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

