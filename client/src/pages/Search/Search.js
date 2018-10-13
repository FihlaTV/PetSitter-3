import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
// import FooterPage from "../../components/Footer";
import { Carousel, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';
import { Form, Button, Grid } from "semantic-ui-react";
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
import "./Search.css";

class Search extends Component {

    render() {
        return (
            <div className="search-form">
                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.search-form {
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
                        <Col size="sm-12 md-6">
                            <h1 id="searchcitytitle">Search by City</h1>
                            <Form size='large'>

                                <Form.Input
                                    fluid
                                    icon='search'
                                    iconPosition='left'
                                    placeholder='Search by City'
                                    type='search'
                                    className="forminputz"
                                />
                                <Button fluid size='large' id="searchButton">
                                    Search
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
                {/* <FooterPage /> */}
            </div>
        )
    }
}

export default Search;