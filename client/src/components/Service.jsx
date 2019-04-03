import React from 'react';
import { Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Navbar from './NavigationBar';
import StarRatings from 'react-star-ratings';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      // check the type of your default values set 
      listing: {
        ratings: []
      }
    };
  }


    /// Checkout liefcycle methods to find besttime to set listing (before render)
    componentWillMount() {
        if (this.props.location.state) {
            // re-write Listing to whatever location.state
            // Proptypes to enforce typing
            this.setState({listing:this.props.location.state})
        }
    }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{display:'flex', flexPosition:'row', width:'50%', marginTop:'7%', marginRight:'auto', marginLeft:'auto'}}>
        <img src={require('../styles/images/'+this.state.listing['picture'])} style={{height:'15em', width:'15em', marginBottom: '2em', marginRight: '5em', border:'solid'}}/>
            <div>
                <h3 style={{color:'gray'}}>{this.state.listing['category']}</h3>
                <h1>{this.state.listing['title']}</h1>
                <StarRatings starDimension="30px"
                        rating={parseFloat(this.state.listing['rating'])}
                        starRatedColor="blue"
                        numberOfStars={5}
                        name='rating'
                />
                <h3>{this.state.listing['price']}</h3>
            </div>
        </div>
        <Nav tabs style={{width:'50%', marginRight:'auto', marginLeft:'auto'}}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style={{border:'solid'}}
            >
              Description
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }} style={{border:'solid'}}
            >
              Reviews
            </NavLink>
          </NavItem>
           <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3')}} style={{border:'solid'}}
            >
              Appointments
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{width:'50%', height:'300px', marginRight:'auto', marginLeft:'auto', border:'solid'}}>
          <TabPane tabId="1">
            <Row>
                <p style={{margin:'2%', width: '65%'}}>{this.state.listing['description']}</p>
                <img style={{height:'15em', width:'15em', margin:'2.75%'}} src={require("../styles/images/map.png")}/>
            </Row>
          </TabPane>
           <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {this.state.listing.ratings.map((x) => {
                     return (
                    <div style={{margin: '2%'}}>
                        <StarRatings starDimension="30px"
                            rating={parseFloat(x.rating)}
                            starRatedColor="blue"
                            numberOfStars={5}
                            name='rating'
                        />
                        <p style={{marginTop: '2%'}}>{x.review}</p>
                        <hr />
                    </div>)
                })}
              </Col>
            </Row>
          </TabPane>
           <TabPane tabId="3">
            <Row>
              {/*<Col sm="12">*/}
                <Form>
                    <Row>
                        <FormGroup style={{marginTop: '4em', marginBottom: '4em', marginRight:'auto', marginLeft:'auto'}}>
                          <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                          />
                        </FormGroup>
                        <FormGroup style={{marginTop: '4em', marginBottom: '4em', marginRight:'4em', marginLeft:'4em'}}>
                          <Input
                            type="time"
                            name="time"
                            id="exampleTime"
                            placeholder="time placeholder"
                          />
                        </FormGroup>
                    </Row>
                    <Button style={{display: 'block', margin:'0 auto', color: 'white', backgroundColor: '#245CB3'}} href="/appointments">Book Appointment</Button>
                </Form>
              {/*</Col>*/}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
};
