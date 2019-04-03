import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Navbar from './NavigationBar';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      listing:""
    };
  }


    componentDidMount() {
        if (this.props.location.state) {
            this.setState({listing:this.props.location.state});
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
        <div style={{display:'flex', flexPosition:'row'}}>
            <img src={require("../styles/images/"+this.state.listing['picture'])}/>
            <p>{this.state.listing['category']}</p>
            <p>{this.state.listing['title']}</p>
            <p>{this.state.listing['price']}</p>
            <p>{this.state.listing['rating']}</p>
        </div>
        <Nav tabs style={{width:'50%', marginRight:'auto', marginLeft:'auto'}}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Description
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Reviews
            </NavLink>
          </NavItem>
           <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Appointments
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{width:'50%', height:'300px', marginRight:'auto', marginLeft:'auto', border:'solid'}}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <p>{this.state.listing['description']}</p>
              </Col>
            </Row>
          </TabPane>
           <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>
           <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}