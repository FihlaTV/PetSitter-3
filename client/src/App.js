import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
/* import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Button from './components/Button';
import { Col, Row, Container } from "./components/Grid"; */

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
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
     

/*       <div className="App">
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
      </div> */
    );
  }
}

export default App;
