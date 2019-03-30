import React, {Component} from 'react';
import style from '../styles/css/styles.css';
import {Button} from 'reactstrap';

const styles = {

    header:{
        fontFamily: "Oswald",
        fontSize:70,
        color:'white',
        letterSpacing:'5px'

    },
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='paperContainer'>
                    <h1 style={styles.header}>CAMPUS LISTS</h1>
                    <div  style={{display:'inline', marginTop:'25px'}}>
                    <Button href="/register" color="secondary" size="lg" className='signUp'>Sign Up</Button>
                    <Button href="/register" color="primary" size="lg" className='login'>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
