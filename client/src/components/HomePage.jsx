import React from 'react';
import {
    Button,
    Col,
    Collapse,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    InputGroup,
    Label,
    Row
} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SideNav from './SideNavigation';
import Navbar from './NavigationBar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HomePage extends React.Component {

    state={
      services:{}
    };
    componentWillMount() {
        var data = require('../Data/sample.json'); // forward slashes will depend on the file location
        this.setState({services: data.listings});
        // for(var i = 0; i < data.length; i++) {
        //     var obj = data[i];
        //
        //     console.log("Name: " + obj.first_name + ", " + obj.last_name);
        // }
        console.log(data.listings);
    }

    render() {
        return (
            <div>
            <Navbar/>
            <SideNav/>
                <Container style={{marginTop: 20, marginRight: '7%'}}>

                    <Row form >
                        <Col md={10}>
                            <FormGroup>
                                <Input type='text' name='Search' id='Search' placeholder='Search for service'  />
                            </FormGroup>

                        </Col>

                    </Row>
                </Container>
            </div>
        )}

}

export default HomePage;
