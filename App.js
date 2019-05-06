import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { StatusBar } from "react-native";
import Colors from "./constants/Colors";
import GetToday from "./utils/GetToday";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Layout from "./constants/Layout";
import AddNew from "./components/AddNew";
import ToDoItem from "./components/ToDoItem";
import { AsyncStorage } from "react-native";
import DeleteAllButton from "./components/DeleteAllButton";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: flex-start;
`;

const Body = styled.ScrollView`
  width: ${Layout.width};
  padding-left: 10px;
`;

const DeleteAllButtonContainer = styled.View`
  width: ${Layout.width};
  height: ${Layout.deleteAllButtonContainerHeight};
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
    addNew: "",
    todos: []
  };

  async componentDidMount() {
    const { dayLabel, monthLabel, day } = GetToday();

    this.setState({
      dayLabel,
      month: monthLabel,
      today: day
    });

    try {
      let todos = await AsyncStorage.getItem("TODOS");
      if (todos) {
        todos = JSON.parse(todos);
        this.setState({
          todos
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { dayLabel, month, today, addNew, todos } = this.state;
    const {
      handleAddNewText,
      handleSubmitEditing,
      clickTrashButton,
      clickCheckButton,
      deleteAllTodos
    } = this;

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
          {todos
            ? todos.map(todo => (
                <ToDoItem
                  clickTrashButton={clickTrashButton}
                  clickCheckButton={clickCheckButton}
                  key={todo.key}
                  todo={todo.text}
                  id={todo.key}
                  done={todo.done}
                />
              ))
            : null}
        </Body>
        <DeleteAllButtonContainer>
          <DeleteAllButton deleteAllTodos={deleteAllTodos} />
        </DeleteAllButtonContainer>
      </Container>
    );
  }

  deleteAllTodos = async () => {
    this.setState({
      todos: []
    });
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  clickTrashButton = async key => {
    const { todos } = this.state;
    // I will use filter method to get updated array.
    // At first, i have to delete clicked item in state
    const editedTodos = todos.filter(todo => todo.key !== key);
    this.setState({
      todos: editedTodos
    });
    // and then, i have to delete clicked item in AsyncStorage.
    await AsyncStorage.setItem("TODOS", JSON.stringify(editedTodos));
  };

  clickCheckButton = async key => {
    const { todos } = this.state;
    // At first, i have to update clicked item in state

    for (var i in todos) {
      if (todos[i].key == key) {
        todos[i].done = !todos[i].done;
        break;
      }
    }
    const editedTodos = this.state.todos;
    this.setState({
      todos: editedTodos
    });

    // and then, i have to update clicked item in AsyncStorage
    await AsyncStorage.setItem("TODOS", JSON.stringify(editedTodos));
  };

  handleSubmitEditing = async ({
    nativeEvent: { text, eventCount, target }
  }) => {
    this.setState({
      addNew: ""
    });
    try {
      let key = await AsyncStorage.getItem("KEY");
      if (key) {
        key = parseInt(key);
      }
      if (!key) {
        key = 0;
      }
      key = key + 1;
      const newToDo = {
        key,
        text,
        done: false
      };
      key = key.toString();
      await AsyncStorage.setItem("KEY", key);

      this.setState({
        todos: [...this.state.todos, newToDo]
      });
      const todos = await AsyncStorage.getItem("TODOS");
      if (todos) {
        let previousTodos = await AsyncStorage.getItem("TODOS");
        previousTodos = JSON.parse(previousTodos);
        previousTodos.push(newToDo);
        await AsyncStorage.setItem("TODOS", JSON.stringify(previousTodos));
      } else {
        const todos = [newToDo];
        await AsyncStorage.setItem("TODOS", JSON.stringify(todos));
      }
    } catch (error) {
      console.log(error);
    }
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
