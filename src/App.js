import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SockOp</h1>
        <span>Login</span>
      </header>
      <Switch>
        <Route exact path="/signup" render={({history}) =>
          <SignUpPage history={history} />
        } />
        <Route exact path="/login" component={LoginPage} />
      </Switch>

        <h2>We're doing stuff here</h2>
    </div>
  );
}

export default App;
