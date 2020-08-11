import React from 'react';
import './App.css';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './modules/authentication/components/Login';
import history from './config/history';
import store from './config/store';
import { Provider } from 'react-redux';

const App = () =>  {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Redirect path="*" to="/login"></Redirect>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
