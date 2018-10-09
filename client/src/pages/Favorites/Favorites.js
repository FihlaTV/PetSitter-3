import React, { Component } from "react";
// import Button from "../../components/Button";
import { Col, Row } from "../../components/Grid";
import { ProfilePhoto } from "../../components/Profile";
import { Image, Button, Grid, Container, Icon, Rating } from "semantic-ui-react"
import { Card, CardBody } from 'mdbreact';
import headerimage from "../Search/headerimage.jpg";
import "./Favorites.css"

class Favorites extends Component {

    render() {
        return (
            <div className="favorites-page">

                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.favorites-page {
                    height: 100%;}
                `}
                </style>

                <Grid>
                    <Row>
                        <Image src={headerimage} style={{ height: '100%' }} className="headerimage" fluid />
                    </Row>
                    <Row>
                        <Col size="sm-12 md-12">
                            <h1 id="favoritestitle">Favorites</h1>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col size="sm-12 md-12">
                                <Card className="w-100 z-depth-5" id="favoriteCard">
                                    <CardBody>
                                        <Row>
                                            <Col size="sm-12 md-3">
                                                <ProfilePhoto />
                                            </Col>
                                            <Col size="sm-12 md-3">
                                                <h2>John Doe, 24</h2>
                                                <br />
                                                <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                                            </Col>
                                            <Col size="sm-12 md-3" className="align-middle">
                                                <h1>$29</h1><br/>
                                                <h3>per night</h3>
                                            </Col>
                                            <Col size="sm-12 md-3">
                                                <Button animated id="contactsitterButton">
                                                    <Button.Content visible>Contact Pet Sitter</Button.Content>
                                                    <Button.Content hidden>
                                                        <Icon name='mail' />
                                                    </Button.Content>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <br /> <br /> <br /> <br />
                        </Row>
                    </Container>
                </Grid>
            </div>
        )
    }
}

export default Favorites;