import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import Sitter from "../../components/Sitter";
import { Carousel, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';
import { Form, Button, Grid } from "semantic-ui-react";
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
import carousel04 from "../../components/Header/carousel04.jpg";
import "./Search.css";

class Search extends Component {

    state = {
        name: "",
        age: "",
        rating: "",
        response: "",
        city: "",
        displaySitters: false
    };

    displaySitter = () => {
        this.setState({
            displaySitters: !this.state.displaySitters
        })
    }

    /* submit = () => {
        this.callApi()
        .catch(err => console.log(err));
        console.log(this.state.response);
    }

    callApi = async () => {
        const response = await fetch('/api/petSitter/all');
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    }; */

    render() {
        let theSitters = null;

        if ( this.state.city === this.state.displaySitters.city ) {
            theSitters = (
            <div>
                 { this.state.theSitters.map((theSitter) => {
                      return <Sitter
                                name={theSitter.name}
                                age={theSitter.age}
                                rating={theSitter.rating}
                                key={theSitter.id} />
                 })}
            </div>
            )
       }

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
                                length={4}
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
                                    <CarouselItem itemId="4">
                                        <View>
                                            <img className="d-block w-100" src={carousel04} alt="Fourth slide" />
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
                                <Button fluid size='large' id="searchButton" onClick={this.displaySitter}>
                                    Search
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Grid>   
            </div>

            
        )
    }
}

export default Search;