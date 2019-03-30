import React, {Component} from 'react';
import Background from '../images/landing.jpg';


import {Button} from 'reactstrap';
const styles = {
    paperContainer: {
        backgroundImage: 'url(' + Background + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        height:'100vh',
        alignContent:'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column'
    },
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
                <div style={styles.paperContainer}>
                    <h1 style={styles.header}>CAMPUS LISTS</h1>
                    <div style={{display:'inline', marginTop:'15px'}}>
                    <Button href="/register" color="outline-primary" size="lg" style={{backgroundColor: 'white',marginRight:'15px', lineHeight:'20px'}}>Sign Up</Button>
                    <Button href="/register" color="primary" size="lg" style={{marginLeft:'15px', lineHeight:'20px'}}>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
