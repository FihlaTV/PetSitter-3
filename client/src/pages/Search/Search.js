import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { Carousel, CarouselInner, CarouselItem, CarouselCaption, View, Mask } from 'mdbreact';
import { Form, Button, Grid } from "semantic-ui-react";
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
import "./Search.css";

class Search extends Component {

    state = {
        name: "",
        age: "",
        rating: "",
        response: "",
        profilePhoto: "",
        city: "",
        sitters: []
    };

 /*    componentDidMount() {
        this.loadSitters();
    } */

    submit = () => {
        this.loadSitters()
        .catch(err => console.log(err));
        console.log(this.state.response);
    }

    loadSitters = async (city) => {
        const response = await fetch('/api/petSitter/search/' + city);
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        this.setState({ sitters: body.petSitter })
    };

    renderSitters = () => {
        return this.state.sitters.map((sitter, i) => {
            return <div key={i}>
                <p>{sitter.name}</p><br />
                <p><img src={sitter.profilePhoto} alt="Sitter pic" /></p>
            </div>
        })
    }

    render() {
        console.log(this.state.sitters)
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
                        <Col size="sm-10 md-6">
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
                                <Button fluid size='large' id="searchButton" onClick={this.loadSitters}>
                                    Search
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
                {this.renderSitters()}
            </div>

            
        )
    }
}

export default Search;