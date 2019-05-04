import React from "react";
import styled from "styled-components";
import Swipeout from "react-native-swipeout";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import TrashButton from "./TrashButton";
import CheckButton from "./CheckButton";
import Sizes from "../constants/Sizes";
import Weights from "../constants/Weights";

const swipeoutBtns = [
  {
    component: <CheckButton />
  },
  {
    component: <TrashButton />
  }
];

const Container = styled.View`
  background-color: ${Colors.white};
  height: ${Layout.todoItemHeight};
  width: ${Layout.width};
  display: flex;
  justify-content: center;
  border-bottom-color: ${Colors.todoitemUnderline};
  border-bottom-width: 1px;
`;
const Text = styled.Text`
  font-size: ${Sizes.todoItemFontsize};
  color: ${Colors.americanRiver};
  font-weight: ${Weights.todoItem};
`;

const ToDoItem = ({ todo }) => (
  <Swipeout right={swipeoutBtns}>
    <Container>
      <Text>{todo}</Text>
    </Container>
  </Swipeout>
);

export default ToDoItem;
