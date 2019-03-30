import React from 'react';
import Background from '../styles/images/london.jpg';


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
