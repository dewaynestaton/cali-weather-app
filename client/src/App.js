import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
// import Form from "./Components/Form";
// import Titles from "./Components/Titles";
// import Weather from "./Components/Weather";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
