import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { ProfilePhoto } from "../../components/Profile";
import { Button, Grid, Icon, Rating } from "semantic-ui-react"
import { Carousel, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import { Card, CardBody } from 'mdbreact';
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
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

                <Grid textAlign='center' verticalAlign='middle'>
                    <Row>
                        <Col size="sm-12 md-12">
                            <Carousel
                                activeItem={1}
                                length={3}
                                showControls={true}
                                showIndicators={false}
                                className="z-depth-1">
                                <CarouselInner>
                                    <CarouselItem itemId="1">
                                        <View>
                                            <img className="d-block w-100 img-fluid" src={carousel01} alt="First slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                    </CarouselItem>
                                    <CarouselItem itemId="2">
                                        <View>
                                            <img className="d-block w-100" src={carousel02} alt="Second slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                    </CarouselItem>
                                    <CarouselItem itemId="3">
                                        <View>
                                            <img className="d-block w-100" src={carousel03} alt="Third slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                    </CarouselItem>
                                </CarouselInner>
                            </Carousel>
                        </Col>
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
                                            <Col size="sm-12 md-3" style={{ textAlign: "center" }}>
                                                <h2>John Doe, 24</h2>
                                                <br />
                                                <Rating maxRating={5} defaultRating={4} icon='star' size='massive' disabled />
                                            </Col>
                                            <Col size="sm-12 md-3">
                                                <h2>$29/night</h2>
                                            </Col>
                                            <Col size="sm-12 md-3">
                                                <Button animated id="contactsitterButton" className="mx-auto d-block">
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
                    </Container>
                </Grid>
            </div>
        )
    }
}

export default Favorites;