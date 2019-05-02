import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { StatusBar } from "react-native";
import Colors from "./constants/Colors";
import GetToday from "./utils/GetToday";
import { createStackNavigator, createAppContainer } from "react-navigation";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.Text``;

class App extends React.Component {
  state = {
    dayLabel: "",
    month: "",
    today: ""
  };

  componentDidMount() {
    const { dayLabel, monthLabel, day } = GetToday();
    this.setState({
      dayLabel,
      month: monthLabel,
      today: day
    });
  }

  render() {
    const { dayLabel, month, today } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header dayLabel={dayLabel} month={month} today={today} />
        <Text>This is A Different Day!</Text>
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);
