import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import Register from './components/Register';
import SignUp from './components/SignUp';
import Review from './components/Review';
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
            <Route path ='/signup' component={SignUp}/>
            <Route path='/register'  component={Register}/>
            <Route path='/review' component = {Review}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
