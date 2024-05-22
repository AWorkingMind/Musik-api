import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import { login, handleCallback } from './components/spotifyAuth';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Håndter adgangstoken fra URL hash
    handleCallback();
    const _token = window.localStorage.getItem('token');
    setToken(_token);
  }, []);

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              {!token ? <Login login={login} /> : <Dashboard token={token} />}
            </Route>
            <Route path="/callback">
              <h1>Redirecting...</h1>
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;