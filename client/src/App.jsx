import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import Register from './components/Register';
import Login from './components/Login';
import Review from './components/Review';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

import {BrowserRouter, Route} from 'react-router-dom';
class App extends Component {

    render() {
    return (
        <BrowserRouter>
            <div>
            <Route path ='/' component={Home} exact/>
            <Route path ='/login' component={Login}/>
            <Route path='/register'  component={Register}/>
            <Route path='/review' component = {Review}/>
            <Route path='/homepage' component = {HomePage}/>
            <Route path='/signup' component = {SignUp}/>
            <Route path='/login' component = {Login}/>
            <Route path='/profile' component = {Profile}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
