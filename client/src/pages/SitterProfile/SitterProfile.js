import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { Carousel, CarouselInner, CarouselItem, CarouselCaption, View, Mask } from 'mdbreact';
import { Grid, Image, Rating, Icon, Button } from "semantic-ui-react";
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
import "./SitterProfile.css";

class SitterProfile extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="sitterprofileDiv">
                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.sitterprofileDiv {
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
                                        <CarouselCaption>
                                            <h3 id="h3-responsive">PetSitter</h3>
                                        </CarouselCaption>
                                    </CarouselItem>
                                    <CarouselItem itemId="2">
                                        <View>
                                            <img className="d-block w-100" src={carousel02} alt="Second slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                        <CarouselCaption>
                                            <h3 id="h3-responsive">PetSitter</h3>
                                        </CarouselCaption>
                                    </CarouselItem>
                                    <CarouselItem itemId="3">
                                        <View>
                                            <img className="d-block w-100" src={carousel03} alt="Third slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                        <CarouselCaption>
                                            <h3 id="h3-responsive">PetSitter</h3>
                                        </CarouselCaption>
                                    </CarouselItem>
                                </CarouselInner>
                            </Carousel>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="sm-12 md-12">
                            <h1 id="profiletitle">Profile on {this.props.location.state.name}</h1>
                        </Col>
                    </Row>

                    <Row>
                        {/* Left Column */}
                        <Col size="sm-6 md-4" style={{ textAlign: "center" }}>

                            <p><Image src={this.props.location.state.profilePhoto} alt="profile pic" size="medium" className="img-fluid hoverable mx-auto d-block" circular /></p><br />
                            <Rating maxRating={5} defaultRating={this.props.location.state.rating} icon='star' size='massive' disabled /><br />
                            <h2 id="pricetitle">Price: ${this.props.location.state.price}/night</h2>
                            <span id="AddtoFavorites"><Icon circular inverted name='heart' size="small" color='red' />Add to Favorites</span><br /><br /><br />
                            <Button animated id="contactsitterButton" className="mx-auto d-block">
                                <Button.Content visible>Contact {this.props.location.state.name}</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='mail' />
                                </Button.Content>
                            </Button>
                        </Col>
                        
                        {/* Right Column */}
                        <Col size="sm-6 md-8" style={{ textAlign: "center" }}>

                            <p><Image src={this.props.location.state.profilePhoto} alt="profile pic" size="medium" className="img-fluid hoverable mx-auto d-block" circular /></p><br />
                            <Rating maxRating={5} defaultRating={this.props.location.state.rating} icon='star' size='massive' disabled /><br /><br />

                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default SitterProfile;