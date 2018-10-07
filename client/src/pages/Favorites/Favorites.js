import React, { Component } from "react";
// import Button from "../../components/Button";
import { Col, Row, Container } from "../../components/Grid";
import { ProfilePhoto } from "../../components/Profile";
import { Button, Icon } from 'semantic-ui-react'

class Favorites extends Component {

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col size="sm-12 md-6">
                        <h1>Favorites</h1>
                        <ProfilePhoto />
                        <Button animated>
                            <Button.Content visible>Contact Pet Sitter</Button.Content>
                            <Button.Content hidden>
                                <Icon name='mail' />
                            </Button.Content>
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Favorites;