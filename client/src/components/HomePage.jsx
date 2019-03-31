import React from 'react';
import { Button, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SideNav from './SideNavigation';
import Navbar from './NavigationBar';

class HomePage extends React.Component {

    render() {
        return (
            <div>
            <Navbar/>
            <SideNav/>
            </div>
        )}

}

export default HomePage;
