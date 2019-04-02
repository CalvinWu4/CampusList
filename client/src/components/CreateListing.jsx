import React, {Component} from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, FormText,Row, Col, Container} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import SignUp from "./SignUp";

class CreateListing extends React.Component {

    state = {
        title: "",
        price: null,
        category: "",
        description: "",
        link: false,
        titleError: false,
        priceError: false,
        categoryError: false,
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({name: this.props.location.state.formValues.title});
            this.setState({email: this.props.location.state.formValues.price});
            this.setState({password: this.props.location.state.formValues.category});
            this.setState({rePassword: this.props.location.state.formValues.description})
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
        const numericRegex = /^[0-9]*$/;
        switch (e.target.name) {
            case 'title':
                if (e.target.value.length === 0) {
                    isError = true;
                }
                break;
            case 'price':
                if (e.target.value === null || !(numericRegex.test(e.target.value))) {
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
            this.state.titleError || this.state.priceError || this.state.categoryError) {
            console.log('im invalid');
            this.setState({link: false});
        } else {
            console.log('im valid');
            this.setState({link: true});
        }
        console.log(this.state.status);
    };

    render() {
        let link;
        return (
            <div className='paperContainer'>
                <div className='createListingModal'>
                    <h1 style={{fontFamily: "Lato", color: "#245CB3", textAlign: "center", marginBottom: "20%"}}>
                        Create Listing
                    </h1>

                    <Form>
                        <FormGroup>
                            <Input type='text' name='title' id='title' value={this.state.title} onChange={e=>this.change(e)}
                                   placeholder="Name" invalid={this.state.titleError}/>
                            <FormFeedback disabled={this.state.titleError}>Cannot be empty</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input type='price' name='price' id='price' value={this.state.email} onChange={e=>this.change(e)}
                                   placeholder="Price" invalid={this.state.priceError}/>
                            <FormFeedback disabled={this.state.priceError}>Must be a number</FormFeedback>
                        </FormGroup>

                        {/*<FormGroup>*/}
                        {/*    <Input type='password' name='password' id='password' value={this.state.password} onChange={e=>this.change(e)}*/}
                        {/*           placeholder="Password" invalid={this.state.passwordError}/>*/}
                        {/*    <FormFeedback disabled={this.state.passwordError}>Password must be at least 8 characters long</FormFeedback>*/}
                        {/*</FormGroup>*/}

                        {/*<FormGroup style={{marginBottom: "20%"}}>*/}
                        {/*    <Input type='password' name='rePassword' id='rePassword' value={this.state.rePassword} onChange={e=>this.change(e)}*/}
                        {/*           placeholder="Re-enter Password" invalid={this.state.rePasswordError}/>*/}
                        {/*    <FormFeedback disabled={this.state.rePasswordError}>Passwords do not match</FormFeedback>*/}
                        {/*</FormGroup>*/}

                        <Button style={{float: "left", position: "relative"}}
                                href="/" color="secondary" size="lg" className='landing-button'>Cancel</Button>
                        <Button style={{float: "right", position: "relative"}}
                                href="/homepage" color="primary" size="lg" className='landing-button' disabled={this.state.link}>Sign Up</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default CreateListing;

