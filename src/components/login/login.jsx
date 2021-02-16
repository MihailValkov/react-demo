import React from 'react';
import Input from '../shared/input/input';
import styles from '../shared/login-register-css/shared-css.module.css'
import { Link } from 'react-router-dom';
import useForm from '../register/useForm/useForm';
import ErrorMessage from '../shared/error-message/error-message';

const Login = () => {
  const {message ,changeHandler,login} = useForm();
  const errorClass = message ? 'error-active' : ''
  return (
        <div className={styles.login}>
          <Link to='/user/register' className={styles.nonactive}> Register </Link>
          <Link to='/user/login' className={styles.active}> Login </Link>
          <form className={styles['form-login']}>
            <Input  handler={changeHandler}  id={'email'} name={'email'} label={'Email'} className={'text'} type={'email'} />
            <Input  handler={changeHandler} id={'password'} name={'password'} label={'Password'} className={'text'} type={'password'} />
            <ErrorMessage message={message} errorClass={errorClass}/>
            <button onClick={login} type='button' className={`${styles.signin} ${styles['login-button']}`}>Login</button>
          </form>
        </div>
  );
}

export default Login;
