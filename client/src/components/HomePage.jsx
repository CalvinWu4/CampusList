import React from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, Row, Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import navbar from '../components/NavigationBar';

class HomePage extends React.Component {
    render() {
        return (
            <navbar/>
        )}

}

export default HomePage;
ReactDOM.render(
    <HomePage />,
    document.getElementById('container')
);