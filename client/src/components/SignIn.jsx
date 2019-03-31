import React, {Component} from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, FormText,Row, Col, Container} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

class SignUp extends React.Component {

    state = {
        email: "",
        password: "",
        link:true,
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({email:this.props.location.state.formValues.email});
            this.setState({password:this.props.location.state.forValues.password});
        }
    }

    change = e=> {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.validate(e);
    }

    validate = (e) => {
        let isError = false;
        const re = /^[0-9\b]+$/;
        const name=/^[a-zA-Z\s]*$/;
        switch (e.target.name) {
            case 'email':
                if (e.target.value.indexOf("@") === -1) {
                    isError = true;
                }
                break;
            case 'password':
                if (e.target.value.length < 8) {
                    isError = true;
                }
                break;
        }
        let errorName=e.target.name+'Error';
        if (isError){
            this.setState({[errorName]: true}, e=>this.validateFull(e));
        }
        if(!isError){
            this.setState({[errorName]: false},e=>this.validateFull(e));
        }

    }

    validateFull = e=>{
        if (
            this.state.emailError || this.state.passwordError || this.state.email.length === 0 || this.state.password.length === 0) {
            console.log('im invalid');
            this.setState({link: true});
        }
        else{
            console.log('im valid');
            this.setState({link: false});
        }
        console.log(this.state.status);
    }

    render() {
        let link;
        return (
            <div className='paperContainer'>
                <div className='registerModal'>

                
                <h1 style={{fontFamily: "Lato", color: "#245CB3", textAlign: "center"}}>Sign In</h1>

                <Form className = 'registerForm'>

                    <FormGroup>
                        <Input type='email' name='email' id='email' value={this.state.email} onChange={e=>this.change(e)} 
                            placeholder="Email" invalid={this.state.emailError}/>
                        <FormFeedback disabled={this.state.nameError}>Not a valid email</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Input type='password' name='password' id='password' value={this.state.password} onChange={e=>this.change(e)} 
                            placeholder="Password" invalid={this.state.passwordError}/>
                        <FormFeedback disabled={this.state.passwordError}>Password is at least 8 characters long</FormFeedback>
                    </FormGroup>
                    
                        <Button style={{float: "left", width: "125"}} href="/" color="secondary" size="lg" className='landing-button'>Cancel</Button>
                        <Button style={{float: "right", width: "125"}} href="/review" color="primary" size="lg" className='landing-button' disabled={this.state.link}>Sign In</Button>

                </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;
