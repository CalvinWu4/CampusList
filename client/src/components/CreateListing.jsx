import React, {Component} from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, FormText,Row, Col, Container, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import Navbar from './NavigationBar';
import SideNav from "./SideNavigation";

class CreateListing extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.state = {
            dropdownOpen: false,
            dropDownValue: 'Select a category'
        };
    }

    state = {
        title: "",
        price: "",
        description: "",
        link: false,
        titleError: false,
        priceError: false,
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({title: this.props.location.state.formValues.title});
            this.setState({price: this.props.location.state.formValues.price});
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.validate(e);
    }

    validate = (e) => {
        let isError = false;
        const priceRegex = /^\$?(?:(?:\d+(?:,\d+)?(?:\.\d+)?)|(?:\.\d+))$/;
        switch (e.target.name) {
            case 'title':
                if (e.target.value.length === 0) {
                    isError = true;
                }
                break;
            case 'price':
                if (e.target.value.length === 0 || !(priceRegex.test(e.target.value))) {
                    isError = true;
                }
                break;
            case 'dropdown':
                if (e.target.value === 'Select a category') {
                    isError = true;
                }
                break;
        }
        let errorName = e.target.name + 'Error';
        if (isError) {
            this.setState({[errorName]: true}, e => this.validateFull(e));
        }
        if (!isError) {
            this.setState({[errorName]: false}, e => this.validateFull(e));
        }

    }

    validateFull = e => {
        if (
            this.state.titleError || this.state.priceError || this.state.dropDownValue === 'Select a category') {
            console.log('im invalid');
            this.setState({link: false});
        } else {
            console.log('im valid');
            this.setState({link: true});
        }
        console.log(this.state.status);
    };

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    changeValue(e) {
        this.setState({dropDownValue: e.currentTarget.textContent})
    }

    render() {
        let link;
        return (
            <div>
                <Navbar/>
                <div className='paperContainer2'>

                <div className='createListingModal'>
                    <h1 style={{fontFamily: "Lato", color: "#245CB3", textAlign: "center", marginBottom: "20%"}}>
                        Create Listing
                    </h1>

                    <Form>
                        <FormGroup>
                            <h4> * Title </h4>
                            <Input type='text' name='title' id='title' value={this.state.title} onChange={e=>this.change(e)}
                                    invalid={this.state.titleError}/>
                            <FormFeedback disabled={this.state.titleError}>Cannot be empty</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <h4> * Price </h4>
                            <Input type='price' name='price' id='price' value={this.state.price} onChange={e=>this.change(e)}
                                   invalid={this.state.priceError} />
                            <FormFeedback disabled={this.state.priceError}>Must be a valid price</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <h4> * Category </h4>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    {this.state.dropDownValue}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <div onClick={this.changeValue}>Tutors</div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div onClick={this.changeValue}>Rides</div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div onClick={this.changeValue}>Party</div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div onClick={this.changeValue}>Design</div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div onClick={this.changeValue}>IT</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>

                        <FormGroup>
                            <h4> Description </h4>
                            <Input type="textarea" name="description" id="description" value={this.state.description}
                                   onChange={e=>this.change(e)} />
                        </FormGroup>

                            <Button style={{float: "left", position: "relative"}}
                                href="/homepage" color="secondary" size="lg" className='landing-button'>Cancel</Button>
                        <Button style={{float: "right", position: "relative"}}
                                href="/homepage" color="primary" size="lg" className='landing-button' disabled={!this.state.link}>Submit</Button>
                    </Form>
                </div>
            </div>
            </div>
        );
    }
}

export default CreateListing;

