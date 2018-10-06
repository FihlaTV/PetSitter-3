import React, { Component } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid"; 

class SignIn extends Component {

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col size="sm-12 md-6">
                        <h1>Sign-In Page</h1>
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
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

/* const SignIn = () => (
    <div>
        <h1>Sign In Page</h1>
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
            ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
            quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
            diam, sit amet facilisis lectus blandit at.
        </p>
        <Button>Testing</Button>
    </div>
); */

export default SignIn;