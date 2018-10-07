import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Image, Form, Button, Grid } from "semantic-ui-react"
import headerimage from "./headerimage.jpg";
import "./Search.css";

class Search extends Component {

    render() {
        return (
            <div className="search-form">
            <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.search-form {
                    height: 100%;}
                `}
                </style>
                <Grid textAlign='center'  verticalAlign='middle'>
                    <Row>
                        <Image src={headerimage} style={{ height: '100%' }} fluid />
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
            </div>
        )
    }
}

export default Search;