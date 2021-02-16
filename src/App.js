import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store, { StoreContext } from './components/store/store';
import Auth from './components/auth/auth';

import Register from './components/register/register';
import Login from './components/login/login';
import Home from './components/home/home';
import Test from './test';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Store>
          <Auth>
              <StoreContext.Consumer>
                {
                  ({state}) => {
                    const isLoggedIn = !!state.user;
                    const isAdmin = !!( state.user && state.user.isAdmin);
                    return (
                      <Fragment>
                        <Route path='/' exact  component={Home} />
                        <Route path='/test' exact  component={Test} />
                        <Route path='/user/register' component={Register}/>
                        <Route path='/user/login' component={Login}/>
                      </Fragment>
                    )
                  }
                }
              </StoreContext.Consumer>
          </Auth>
        </Store>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
