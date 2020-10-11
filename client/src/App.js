import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Events from './pages/Events';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='container'>
      <Router>
        <MenuBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Router>
    </div>
  );
}

export default App;
