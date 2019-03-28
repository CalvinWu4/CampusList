import React, {Component } from 'react';

import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap';

class AppNavBar extends Component{
    constructor(props){
        super(props);
    }

render()
{
    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Conference</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    );
}
}
export default AppNavBar;