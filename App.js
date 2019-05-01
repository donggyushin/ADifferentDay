import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { StatusBar } from "react-native";
import Colors from "./constants/Colors";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.Text``;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header today={"Monday"} month={"October"} todayNum={"3"} />
        <Text>This is A Different Day!</Text>
      </Container>
    );
  }
}
