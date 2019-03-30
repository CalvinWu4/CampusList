import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import Register from './components/Register';
import Login from './components/Login';
import Review from './components/Review';
import HomePage from './components/HomePage';

import {BrowserRouter, Route} from 'react-router-dom';
class App extends Component {
    state = {
        fields: {}
    };

    onSubmit=fields=> {
        this.setState({fields});
    };

    render() {
    return (
        <BrowserRouter>
            <div>
            <Route path ='/' component={Home} exact/>
            <Route path ='/login' component={Login}/>
            <Route path='/register'  component={Register}/>
            <Route path='/review' component = {Review}/>
            <Route path='/homepage' component = {HomePage}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
