import React, {Component} from 'react';
import style from '../styles/css/styles.css';
import {Button} from 'reactstrap';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='paperContainer'>
                    <h1 className='homeHeader'>CAMPUS LISTS</h1>
                    <div style={{display:'inline', marginTop:'20px'}}>
                    <Button href="/signup" color="secondary" size="lg" className='landing-button'>Sign Up</Button>
                    <Button href="/signin" color="primary" size="lg" className='landing-button'>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
