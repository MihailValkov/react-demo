import React, { Fragment} from 'react';
import styles from './input.module.css';

const Input = ({label,type, id , name, className, handler ,value}) => {

    return (
        <Fragment>
            <label htmlFor={id} >{label} </label>
            <input onChange={handler}
                id={id} type={type} 
                className={styles[className]}
                name={name}
                value={value}
            />
        </Fragment>
    );
}

export default Input;