import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Button from './components/Button';
import { Col, Row, Container } from "./components/Grid";

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
     

      <div className="App">
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-12">
      
              <Jumbotron>
                <h1>{this.state.response}</h1>
                <Button>
                  Test Button
                </Button>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
