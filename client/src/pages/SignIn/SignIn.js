import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import PSlogo from "./logo_icon.png";
import "./SignIn.css";
/* import Button from "../../components/Button";
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";  */

class SignIn extends Component {

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
                            <Image src={PSlogo} /> Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' className="forminputz"/>
                                <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                className="forminputz"
                                />
                                <Button fluid size='large' id="signinbutton">
                                Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message id="datMessage">
                            New to us? <a href="/signup">Sign Up!</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default SignIn;