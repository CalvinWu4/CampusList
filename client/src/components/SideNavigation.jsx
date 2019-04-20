import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from "react";
import style from '../styles/css/styles.css';
import {Button, Form, InputGroup, FormGroup, Label, Input, Row, Col, Container, FormFeedback} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faSearch, faCar, faStar, faPaintBrush, faCompactDisc, faLocationArrow, faBook } from '@fortawesome/free-solid-svg-icons'

library.add( faDollarSign, faCar,faSearch, faStar, faPaintBrush, faCompactDisc, faLocationArrow, faBook);

class SideNavigation extends React.Component {
    state={
        min:'',
        max:'',
        display:'none',
        location:'',
    };


    change = e=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    toggle=e=>{
        if(this.state.display==='none'){
            this.setState({display: 'block'})
        }else{
            this.setState({display: 'none'})

        }
    };

    render() {
        return (
            <div>
            <SideNav style={{backgroundColor: 'grey', position:'fixed', float:'left', height:'100%'}}
                onSelect={(selected) => {
                    // Add your code here
                }}
                     onToggle={(e)=>this.toggle(e)}
            >
                <SideNav.Toggle />
                <SideNav.Nav style={{display: this.state.display, marginLeft: '1em', width:'10em'}}>
                    <h5>
                        Price
                        <i style={{marginLeft: '1em'}}>
                            <FontAwesomeIcon icon="dollar-sign" />
                        </i>
                    </h5>

                    <Form>
                        <Row form >
                            <Col md={5}>
                                <FormGroup>
                                    <Input type='text' name='min' id='min' style= {{height:25}} value={this.state.min} onChange={e=>this.change(e)} placeholder='Min'  />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <p style={{fontSize: '18px', textAlign:'center'}}>To</p>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Input type='text' name='max' id='max' style= {{height:25}} value={this.state.max} onChange={e=>this.change(e)} placeholder='Max'  />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <h5>
                        Location
                        <i style={{marginLeft: '1em'}}>
                            <FontAwesomeIcon icon="location-arrow" />
                        </i>
                    </h5>

                    <Form>
                        <Row form >
                            <Col md={12}>
                                <FormGroup>
                                    <Input type='text' name='location' id='location' style= {{height:25}} value={this.state.location} onChange={e=>this.change(e)} placeholder='Address'  />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <h5 >
                        Categories

                    </h5>
                    <div style={{}}>
                    <Container style={{marginBottom:'10px', marginTop: '10px',marginLeft:'-13px'}}>
                        <Row>

                            <Col xs={6} md={4}>
                                <Button style={{height:'30px', width:'30px', borderRadius:"10px", border:'solid', textAlign:'center', alignContent:'center'}}>
                                <FontAwesomeIcon style={{position:'absolute', right:'15px', top:"7px"}} icon="book" />
                                </Button>
                            </Col>
                            <Col xs={6} md={4}>
                                <h5>Tutors</h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{marginBottom:'10px', marginLeft:'-13px'}}>
                        <Row>

                            <Col xs={6} md={4}>
                                <Button style={{height:'30px', width:'30px', borderRadius:"10px", border:'solid', textAlign:'center', alignContent:'center'}}>
                                    <FontAwesomeIcon style={{position:'absolute', right:'15px', top:"7px"}} icon="car" />
                                </Button>
                            </Col>
                            <Col xs={6} md={4}>
                                <h5>Rides</h5>
                            </Col>
                        </Row>
                    </Container>

                    <Container style={{marginBottom:'10px',marginLeft:'-13px'}}>
                        <Row>

                            <Col xs={6} md={4}>
                                <Button style={{height:'30px', width:'30px', borderRadius:"10px", border:'solid', textAlign:'center', alignContent:'center'}}>
                                    <FontAwesomeIcon style={{position:'absolute', right:'15px', top:"7px"}} icon="star" />
                                </Button>
                            </Col>
                            <Col xs={6} md={4}>
                                <h5>Party</h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{marginBottom:'10px',marginLeft:'-13px'}}>
                        <Row>

                            <Col xs={6} md={4}>
                                <Button style={{height:'30px', width:'30px', borderRadius:"10px", border:'solid', textAlign:'center', alignContent:'center'}}>
                                    <FontAwesomeIcon style={{position:'absolute', right:'15px', top:"7px"}} icon="paint-brush" />
                                </Button>
                            </Col>
                            <Col xs={6} md={4}>
                                <h5>Design</h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{marginBottom:'10px',marginLeft:'-13px'}}>
                        <Row>

                            <Col xs={6} md={4}>
                                <Button style={{height:'30px', width:'30px', borderRadius:"10px", border:'solid', textAlign:'center', alignContent:'center'}}>
                                    <FontAwesomeIcon style={{position:'absolute', right:'15px', top:"7px"}} icon="compact-disc" />
                                </Button>
                            </Col>
                            <Col xs={6} md={4}>
                                <h5>IT</h5>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </SideNav.Nav>
            </SideNav>


            </div>
        );
    }
}
export default SideNavigation;