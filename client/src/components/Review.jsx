import React from 'react';
import {Container, Button, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Review extends React.Component {
    state={
        formValues:""
    };
    componentDidMount() {
        if (this.props.location.state) {
            this.setState({formValues:this.props.location.state});
        }
    }

    pushData =e=>{
        axios
            .post('http://localhost:5000/api/form', this.state.formValues)
            .then(res=>{if (res.status === 200){
                alert("Registration Complete");
            }});
    };
    render(){
        return(
            <div>
                <Container>
                    <Row style={{justifyContent:'center', backgroundColor: '#ADD8E6', marginBottom: '10px'}} ><h1 >Review</h1> </Row>
                    <h5>Name: {this.state.formValues.firstName} {this.state.formValues.lastName}</h5>
                    <h5>Email: {this.state.formValues.email}</h5>
                    <h5>Address: {this.state.formValues.address}</h5>
                    <h5>City: {this.state.formValues.city}</h5>
                    <h5>State: {this.state.formValues.state}</h5>
                    <h5>Zip: {this.state.formValues.zip}</h5>
                    <h5>Status: {this.state.formValues.status}</h5>
                    <h5>Payment: {this.state.formValues.payment}</h5>
                    <Button style={{float:'right', marginTop:'30px'}} onClick={e=> this.pushData(e)}> Register</Button>
                    <Link to={{ pathname: '/register', state: this.state }}><Button style={{float:'left', marginTop:'30px'}}>Go Back</Button></Link>
                </Container>
            </div>
               );

    }
}

export default Review;
