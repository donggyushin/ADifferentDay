import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { StatusBar } from "react-native";
import Colors from "./constants/Colors";
import GetToday from "./utils/GetToday";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Layout from "./constants/Layout";
import AddNew from "./components/AddNew";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.Text``;

const Body = styled.ScrollView`
  width: ${Layout.width};
  height: ${Layout.bodyHeight};
`;

const AddNewContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

class App extends React.Component {
  state = {
    dayLabel: "",
    month: "",
    today: "",
    addNew: ""
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
    const { dayLabel, month, today, addNew } = this.state;
    const { handleAddNewText, handleSubmitEditing } = this;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header dayLabel={dayLabel} month={month} today={today} />
        <AddNewContainer>
          <AddNew
            addNew={addNew}
            handleSubmitEditing={handleSubmitEditing}
            handleAddNewText={handleAddNewText}
          />
        </AddNewContainer>
        <Body>
          <Text>This is A Different Day!</Text>
        </Body>
      </Container>
    );
  }

  handleSubmitEditing = ({ nativeEvent: { text, eventCount, target } }) => {
    console.log(text);
    this.setState({
      addNew: ""
    });
  };

  handleAddNewText = text => {
    this.setState({
      addNew: text
    });
  };
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
