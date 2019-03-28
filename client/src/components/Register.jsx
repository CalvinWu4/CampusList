import React, {Component} from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, FormText,Row, Col, Container} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
class Register extends React.Component {


    state = {
        firstName:"",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        status: "",
        payment: "",
        link:true,
        cityError:false,
        firstNameError: false,
        lastNameError: false,
        addressError: false,
        paymentError: false,
        zipError: false,
        statusError: false,
        stateError: false,
        emailError: false
    };
    componentDidMount() {
        if (this.props.location.state) {
            this.setState({firstName:this.props.location.state.formValues.firstName});
            this.setState({lastName:this.props.location.state.formValues.lastName});
            this.setState({email:this.props.location.state.formValues.email});
            this.setState({address:this.props.location.state.formValues.address});
            this.setState({city:this.props.location.state.formValues.city});
            this.setState({state:this.props.location.state.formValues.state});
            this.setState({zip:this.props.location.state.formValues.zip});
            this.setState({status:this.props.location.state.formValues.status});
            this.setState({payment:this.props.location.state.formValues.payment});
            if (this.props.location.state.formValues.city!=""){
                this.setState({link:false});
            }
        }
    }
    change = e=>{
        this.setState({
            [e.target.name]: e.target.value
        });
        this.validate(e);
    };
    validate = (e) => {
        let isError = false;
        const re = /^[0-9\b]+$/;
        const name=/^[a-zA-Z\s]*$/;
        switch (e.target.name) {
            case "city":
                if (e.target.value.length === 0 || !(name.test(e.target.value))) {
                    isError = true;
                }
                break;
            case "address":
                if (e.target.value.length === 0) {
                    isError = true;
                }
                break;
            case 'firstName':
                if (e.target.value.length ===0 || !(name.test(e.target.value))) {
                    isError = true;
                }
                break;
            case 'lastName':
                if (e.target.value.length ===0 || !(name.test(e.target.value))) {
                    isError = true;
                }
                break;
            case 'status':
                if (e.target.value==="") {
                    isError = true;
                }
                break;
            case 'payment':
                if (e.target.value==="") {
                    isError = true;
                }
                break;
            case 'zip':
                if (e.target.value.length ===0 || !(re.test(e.target.value))) {
                    isError = true;
                }
                break;
            case 'state':
                if (e.target.value.length ===0 || !(name.test(e.target.value))) {
                    isError = true;
                }
                break;
            case 'email':
                if (e.target.value.indexOf("@") === -1) {
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

    };
    validateFull = e=>{
        if (this.state.emailError || this.state.email.length === 0 || this.state.addressError || this.state.address.length === 0 ||
            this.state.stateError || this.state.state.length === 0 || this.state.zipError || this.state.zip.length === 0 || this.state.statusError || this.state.status===''||
            this.state.paymentError || this.state.payment==='' || this.state.lastNameError || this.state.lastName.length === 0 || this.state.firstNameError || this.state.firstName.length === 0 ||
            this.state.cityError || this.state.city.length === 0){
            console.log('im invalid');
            this.setState({link: true});
        }
        else{
            console.log('im valid');
            this.setState({link: false});
        }
        console.log(this.state.status);
        };

    render() {
        let link;
        return (
            <Container>
                <Row style={{justifyContent:'center', backgroundColor: '#ADD8E6', marginBottom: '10px'}} ><h1>Register</h1></Row>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type='text' name='firstName' id='firstName' value={this.state.firstName} onChange={e=>this.change(e)} invalid={this.state.firstNameError}/>
                            <FormFeedback disabled={this.state.firstNameError}>Cannot be empty or numeric</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type='text' name='lastName' id='lastName' value={this.state.lastName} onChange={e=>this.change(e)} invalid={this.state.lastNameError}/>
                            <FormFeedback disabled={this.state.lastNameError}>Cannot be empty or numeric</FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="registerEmail">Email</Label>
                    <Input type='email' name='email' id='registerEmail' value={this.state.email} onChange={e=>this.change(e)} invalid={this.state.emailError}/>
                    <FormFeedback disabled={this.state.lastNameError}>Cannot be empty, must contain proper email</FormFeedback>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type='text' name='address' id='address' value={this.state.address} onChange={e=>this.change(e)} invalid={this.state.addressError}/>
                    <FormFeedback disabled={this.state.addressError}>Cannot be empty</FormFeedback>
                </FormGroup>
                </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type='text' name='city' id='city' value={this.state.city} onChange={e=>this.change(e)} invalid={this.state.cityError}/>
                            <FormFeedback disabled={this.state.cityError}>City can't be empty or numeric</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type='text' name='state' id='state' value={this.state.state} onChange={e=>this.change(e)} invalid={this.state.stateError}/>
                            <FormFeedback disabled={this.state.stateError}>Cannot be empty or numeric</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="zip">Zip</Label>
                            <Input type='number' name='zip' id='zip' value={this.state.zip} onChange={e=>this.change(e)} invalid={this.state.zipError}/>
                            <FormFeedback disabled={this.state.zipError}>Cannot be empty or non-numeric</FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type='select' name='status' id='status' value={this.state.status} onChange={e=>this.change(e)} invalid={this.state.statusError}>
                        <option value=''>None</option>
                        <option value = 'Undergraduate Student' >Undergraduate Student</option>
                        <option value='Graduate Student'>Graduate Student</option>
                        <option value='Professor'>Professor</option>
                        <option value='Industry Employee'>Industry Employee</option>
                    </Input>
                    <FormFeedback disabled={this.state.statusError}>Cannot be none</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="payment">Payment</Label>
                    <Input type='select' name='payment' id='payment' value={this.state.payment} onChange={e=>this.change(e)} invalid={this.state.paymentError}>
                        <option value=''>None</option>
                        <option value = 'Debit' >Debit/Credit Card</option>
                        <option value='Paypal'>Paypal</option>
                    </Input>
                    <FormFeedback disabled={this.state.paymentError}>Cannot be none</FormFeedback>
                </FormGroup>

                    <Link to={{ pathname: '/review', state: this.state }}  >
                        <Button disabled={this.state.link}> Next</Button>
                    </Link>
            </Form>
            </Container>

        );
    }
}
export default Register;