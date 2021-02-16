import React ,{ useState } from 'react';
import service from '../../../service/fetchService';
import { useHistory } from 'react-router-dom';

const useForm = () => {
    const [state, setState] = useState({});
    const history = useHistory();

    const register = React.useCallback(() => {
        const { email , username , password, "confirm-password": confirmPassword  ,gender} = state;
        service.post('/user/register', { email , username, password, confirmPassword ,gender})
        .then(response => {
            if (response.message) { return Promise.reject(response);}
            setState({...state , message :""});
            history.push('/user/login');
        } )
        .catch(({message}) =>{ setState({ ...state, message}) })
    },[history, state]) 

    const login = React.useCallback(() => {
        const { email , password} = state;
        service.post('/user/login', { email, password },{ credentials: "include" })
        .then(response => {
            if (response.message) { return Promise.reject(response);}
            setState({...state , message :""});
            history.push('/');
        }).catch(({message}) =>{ setState({ ...state, message}) })
    },[history,state,setState]) ;


    const changeHandler = (e) => {
        e.persist();
        setState(state => ({...state,[e.target.name] : e.target.value}))
    }
    
  return {changeHandler,register,login, message :state.message}
}

export default useForm;
