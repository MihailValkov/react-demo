import React from 'react';
import Input from '../shared/input/input';
import styles from '../shared/login-register-css/shared-css.module.css'
import { Link } from 'react-router-dom';
import useForm from './useForm/useForm';
import ErrorMessage from '../shared/error-message/error-message';

const Register = () => {

    const {register,changeHandler,message} = useForm();
    const errorClass = message ? 'error-active' : ''
    
    return (
        <div className={styles.login}>

          <Link  to='/user/register' className={styles.active}> Register </Link>
          <Link to='/user/login' className={styles.nonactive}> Login </Link>
          <form>
            <Input handler={changeHandler}  id={'email'} name={'email'} label={'Email'} className={'text'} type={'email'} />
            <Input  handler={changeHandler} id={'username'} name={'username'} label={'Username'} className={'text'} type={'text'} />
            <Input handler={changeHandler}  id={'password'} name={'password'} label={'Password'} className={'text'} type={'password'} />
            <Input handler={changeHandler}  id={'confirm-password'} name={'confirm-password'} label={'Confirm Password'} className={'text'} type={'password'} />
            <div className={styles.gender}>
            <Input handler={changeHandler}  id={'female'} name={'gender'} value={'female'} label={'Female'} className={'custom-checkbox'} type={'radio'} />
            <Input handler={changeHandler}  id={'male'} name={'gender'} value={'male'} label={'Male'} className={'custom-checkbox'} type={'radio'} />
            </div>
            <ErrorMessage message={message} errorClass={errorClass}/>
          </form>
            <button onClick={register} type='button' className={styles.signin}>Register</button>
        </div>
  );
}

export default Register;
