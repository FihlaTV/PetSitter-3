import React, { Component } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";

class SignUp extends Component {

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col size="sm-12 md-6">
                        <h1>Sign-Up Page</h1>
                        <Input
                            name="full name"
                            placeholder="Full Name"
                        />
                        <Input
                            name="email"
                            placeholder="Email"
                        />
                        <Input
                            name="password"
                            placeholder="Password"
                        />
                        <Button>
                            Sign Up
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SignUp;