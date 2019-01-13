import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "f1765d4970dc42c8aa9b95e4cac615eb"
});

const particlesOptions = {
  particles: {
    number: {
      value: 55,
      desnsity: {
        enable: true,
        value_area: 500
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function(response) {
          // do something with response
          console.log(response);
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Rank />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*
      <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
