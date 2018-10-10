import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from "mdbreact";
import PSlogo from "./logo_icon.png";
import "./SignUp.css";
/* import Button from "../../components/Button";
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid"; */

class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="login-form">
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                    height: 100%;}
                `}
                </style>
                <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' textAlign='center' id="headertitle">
                            <Image src={PSlogo} /> Sign-up for an account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Full Name' className="forminputz"/> 
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' className="forminputz"/>
                                <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                className="forminputz"
                                />
                                <Button fluid size='large' id="signUpButton" onClick={this.toggle}>Sign-up</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-notify modal-info text-white">
                                    <ModalHeader toggle={this.toggle} id="modalheader">Thank you for signing up!</ModalHeader>
                                    <ModalBody>
                                        
                                        <h1>You can now sign-in <a href="/">here</a>.</h1>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button id="modalButton" onClick={this.toggle}>Close</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </Segment>
                        </Form>
                        <Message id="datMessage">
                            Already a member?  <a href="/">Log-in here!</a>
                        </Message>
                    </Grid.Column>
                </Grid>
  
                    {/* <Button onClick={this.toggle}>Modal</Button> */}
                    
            </div>
        )
    }
}

export default SignUp;