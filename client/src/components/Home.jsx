import React, {Component} from 'react';
import Background from '../images/london.jpg';


import {Form, FormGroup, Label, Row, Input, Col, FormText, Button, Container} from 'reactstrap';
const styles = {
    paperContainer: {
        backgroundImage: 'url(' + Background + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        height:'100vh',
        alignContent:'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.paperContainer}>
                    <Button href="/register" color="primary" size="lg">Register</Button>{' '}
                </div>
            </div>
        );
    }
}
export default Home;