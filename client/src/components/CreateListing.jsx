import React, {Component} from 'react';
import { Button, Form, FormFeedback, FormGroup, Label, Input, FormText,Row, Col, Container} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

class SignUp extends React.Component {

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
        const alphabeticRegex = /^[a-zA-Z\s]*$/;
        switch (e.target.name) {
            case 'title':
                if (e.target.value.length === 0 || !(alphabeticRegex.test(e.target.value))) {
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
}
