import React, { Component } from "react";
// import Button from "../../components/Button";
import { Col, Row } from "../../components/Grid";
import { ProfilePhoto } from "../../components/Profile";
import { Image, Button, Grid, Container, Icon, Rating } from "semantic-ui-react"
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
                            <Col size="sm-12 md-3">
                                <ProfilePhoto />
                            </Col>
                            <Col size="sm-12 md-3">
                                <h2>John Doe, 24</h2>
                                <br />
                                <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                            </Col>
                            <Col size="sm-12 md-3">
                                <h1>$29 per night</h1>
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
                    </Container>
                </Grid>


            </div>
        )
    }
}

export default Favorites;