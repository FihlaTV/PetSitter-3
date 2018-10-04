import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';

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

      <Jumbotron>
        <h1>This is Nat's Jumbotron</h1>
      </Jumbotron>
      
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p> */}
      </div>
    );
  }
}

export default App;
