import React, { Component } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";

class Search extends Component {

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col size="sm-12 md-6">
                        <h1>Search by City</h1>
                        <Input
                            name="city"
                            placeholder="City"
                        />
                        <Button>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;