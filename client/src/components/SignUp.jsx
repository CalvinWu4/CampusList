import React, {Component} from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, FormText,Row, Col, Container} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

class SignUp extends React.Component {

    state = {
        name:"",
        email: "",
        password: "",
        rePassword: "",
        link:true,
        nameError: false,
        emailError: false,
        passwordError: false,
        rePasswordError: false
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({name:this.props.location.state.formValues.firstName});
            this.setState({email:this.props.location.state.formValues.email});
            this.setState({password:this.props.location.state.forValues.password});
            this.setState({rePassword:this.props.location.state.foreValues.rePassword})
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
            case 'name':
                if (e.target.value.length ===0 || !(name.test(e.target.value))) {
                    isError = true;
                }
                break;
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
            case 'rePassword':
                if (e.target.value != this.state.password) {
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
            this.state.nameError || this.state.name.length === 0 || this.state.emailError || this.state.email.length === 0 ||
                this.state.passwordError || this.state.password.length <= 7 || this.state.rePassword != this.state.password){
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
                    <h1 style={{fontFamily: "Lato", color: "#245CB3"}}>Create Account</h1>

                <Form className = 'registerForm'>
                    <FormGroup>
                        <Input type='text' name='name' id='name' value={this.state.name} onChange={e=>this.change(e)} 
                            placeholder="Name" invalid={this.state.nameError}/>
                        <FormFeedback disabled={this.state.nameError}>Cannot be empty or numeric</FormFeedback>
                    </FormGroup>
        
                    <FormGroup>
                        <Input type='email' name='email' id='email' value={this.state.email} onChange={e=>this.change(e)} 
                            placeholder="Email" invalid={this.state.emailError}/>
                        <FormFeedback disabled={this.state.nameError}>Cannot be empty, must contain proper email</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Input type='password' name='password' id='password' value={this.state.password} onChange={e=>this.change(e)} 
                            placeholder="Password" invalid={this.state.passwordError}/>
                        <FormFeedback disabled={this.state.passwordError}>Password must be at least 8 characters long</FormFeedback>
                    </FormGroup>

                    <FormGroup style={{marginBottom: "10%"}}>
                        <Input type='password' name='rePassword' id='rePassword' value={this.state.rePassword} onChange={e=>this.change(e)} 
                            placeholder="Re-enter Password" invalid={this.state.rePasswordError}/>
                        <FormFeedback disabled={this.state.rePasswordError}>Passwords do not match</FormFeedback>
                    </FormGroup>
                    
                        <Button style={{float: "left", width: "125"}} href="/" color="secondary" size="lg" className='landing-button'>Cancel</Button>
                        <Button style={{float: "right", width: "125"}} href="/review" color="primary" size="lg" className='landing-button' disabled={this.state.link}>Sign Up</Button>

                </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;
