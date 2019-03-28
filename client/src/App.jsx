import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import AppNavbar from './components/appnavbar';
import Register from './components/Register';
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
            <Route path='/register'  component={Register}/>
            <Route path='/review' component = {Review}/>
            </div>
        </BrowserRouter>
    );
  }
}
{/*<div className="App">*/}
    {/*<AppNavbar/>*/}
    {/*<Register onSubmit = {fields=>this.onSubmit(fields)} />*/}
    {/*<p>{JSON.stringify(this.state.fields)}</p>*/}
{/*</div>*/}
export default App;
