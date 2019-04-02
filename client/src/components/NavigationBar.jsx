import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media } from 'reactstrap';
import style from '../styles/css/styles.css';
import src from '../styles/images/landing.jpg';


export default class NavigationBar extends React.Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }
    render() {
        return (
            <div>
                <Navbar className='navBar' light expand="md">
                    <img className='navBarLogo' src={require('../styles/images/rit-logo.png')}></img>
                    <NavbarBrand className='navBarText navBarHeader' href="/homepage">CampusList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className='navBarText' href="/createlisting">Create a Listing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navBarText' href="/components/">My Appointments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navBarText' href="/services">My Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navBarText' href="/components/">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navBarText' href="/">Sign Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
