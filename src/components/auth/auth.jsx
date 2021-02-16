import React , {Fragment, useContext, useEffect,useState }  from 'react';
import { StoreContext }  from  '../store/store';
import service from '../../service/fetchService';

const Auth = ({children}) => {
    const {state, setState} = useContext(StoreContext);
    const [time, setTime] = useState(0);
    setTimeout(()=> {
        setTime(time+1)
      },60000)

    useEffect(()=> {
            service.get('/user/auth',{},{ credentials: "include" })
            .then(user => { setState({...state ,user}) })
            .catch(()=> { setState({...state ,user:undefined }) })
    },[time])

    return ( <Fragment>{children}</Fragment>  );
}

export default Auth;
