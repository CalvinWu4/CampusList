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
import pic from '../styles/images/landing.jpg';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HomePage extends React.Component {

    style={
      image: {
          width: '247px',
          height: '147px',
          borderRadius: '30px',
          zIndex: -1,
          position: 'absolute',
}
      ,
        listing: {
            width: '250px',
            height: '150px',
            borderRadius: '30px',
            borderStyle: 'solid',
            borderWidth: '2px',
            position:'relative',
            margin:'30px'
        },
        listingTitle:{
            height:'40px',
            width:'247px',
            backgroundColor:'#245cb3',
            verticalAlign: 'baseline',
            zIndex:-1,
            position:'absolute',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            bottom:0,
            left:0,
            textAlign:'center',
            borderTop:'solid'
        }

    };
    state={
      services:{},
      service_ids:[],
    };
    componentWillMount() {
        var data = require('../Data/sample.json'); // forward slashes will depend on the file location
        this.setState({services: data.listings});
        for(var i = 0; i < data.listings.length; i++) {
           this.state.service_ids.push(data.listings[i].id);
        }
    }

    componentDidMount() {
    console.log(this.state.service_ids);

    }

    listing(id){
        var listings={};
        for(var i = 0; i < this.state.services.length; i++) {
            if (this.state.services[i].id===id){
                listings=this.state.services[i];
            }

        }
        return(
            <Link to={{ pathname: '/service', state:id }} style={{borderColor:'black !important'}}>
            <div style={this.style.listing}  >
                <img style={this.style.image} src={pic}/>
                <div style={this.style.listingTitle}>
                    <p style={{fontFamily: "Lato", fontSize:"20px", color:'white'}}>{listings['title']}</p>
                </div>
            </div>
            </Link>
        )
    }
    render() {
        return (
            <div>
            <Navbar/>
            <SideNav/>
                <Container style={{marginTop: 20}}>

                    <Row form >
                        <Col md={12}>
                            <FormGroup>
                                <Input type='text' name='Search' id='Search' placeholder='Search for service'  />
                            </FormGroup>

                        </Col>

                    </Row>

                </Container>
                <Container style={{maxHeight:'80vh', overflow:'auto'}}>
                    <div style={{display:'inline-block'}}>
                    {this.state.service_ids.map((row,i) => (
                        <div style={{display:'inline-block'}}>
                            {this.listing(row,i)}
                        </div>
                    ))}
                    </div>
                </Container>
            </div>
        )}

}

export default HomePage;
