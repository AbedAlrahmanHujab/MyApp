import React, { Component } from "react";
import "./App.css";
import { CarItem } from "./CarItem";
import axios from "axios";
import {Header,Icon, List, ListItem} from "semantic-ui-react";

class App extends Component {
  state = {
    Values: [],
    Cars: [
      { model: "BMW", color: "RED" },
      { model: "AUDI", color: "BLACK" },
      { model: "VW", color: "BlUE", topspeed: 200 },
    ],
  };

  componentDidMount() {
    axios.get("http://localhost:5050/api/values").then((response) => {
      //console.log(response);
      this.setState({
        Values: response.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
          {this.state.Values.map((value: any) => (
            <List.Item key={value.id}>
              {value.id}-{value.name}
            </List.Item>
          ))}
        </List>

        <ul>
          {this.state.Cars.map((car) => (
            <CarItem key={car.model} car={car}></CarItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
