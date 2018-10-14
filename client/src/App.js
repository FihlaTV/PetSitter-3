import React, { Component } from 'react';
import './App.css';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
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
          <Nav />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
