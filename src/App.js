import React from 'react';
import './App.css';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';

class App extends React.Component {
  render() {
     return (
        <div className="App">
        <header className="App-header">
        <BrowserRouter >
          <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/register" component={Register}/>
          </Switch>
        </BrowserRouter>
        </header>
        </div>
    );
  }
}

export default App;
