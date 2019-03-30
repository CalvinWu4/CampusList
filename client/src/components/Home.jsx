import React, {Component} from 'react';
import style from '../styles/css/styles.css';
import {Button} from 'reactstrap';

const styles = {

    header:{
        fontFamily: "Lato",
        fontSize:70,
        color:'white'

    },
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='paperContainer'>
                    <h1 style={styles.header}>CAMPUS LISTS</h1>
                    <div style={{display:'inline', marginTop:'15px'}}>
                    <Button href="/signup" color="secondary" size="lg" className='signUp'>Sign Up</Button>
                    <Button href="/register" color="primary" size="lg" style={{marginLeft:'15px', lineHeight:'20px'}}>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
