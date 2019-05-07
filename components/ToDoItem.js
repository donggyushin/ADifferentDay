import React from "react";
import styled from "styled-components";
import Swipeout from "react-native-swipeout";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import TrashButton from "./TrashButton";
import CheckButton from "./CheckButton";
import Sizes from "../constants/Sizes";
import Weights from "../constants/Weights";

const Container = styled.View`
  background-color: ${Colors.white};
  height: ${Layout.todoItemHeight};
  width: ${Layout.width};
  display: flex;
  justify-content: center;
  /* border-bottom-color: ${Colors.todoitemUnderline};
  border-bottom-width: 1px; */
`;
const Text = styled.Text`
  font-size: ${Sizes.todoItemFontsize};
  color: ${Colors.americanRiver};
  font-weight: ${Weights.todoItem};
`;

const DoneText = styled.Text`
  font-size: ${Sizes.todoItemFontsize};
  color: ${Colors.americanRiver};
  text-decoration: line-through;
  text-decoration-color: ${Colors.americanRiver};
  font-weight: ${Weights.todoItem};
`;

const ToDoItem = ({ todo, clickTrashButton, id, clickCheckButton, done }) => {
  const swipeoutBtns = [
    {
      component: <CheckButton done={done} />,
      onPress: () => clickCheckButton(id)
    },
    {
      component: <TrashButton />,
      onPress: () => clickTrashButton(id)
    }
  ];
  return (
    <Swipeout autoClose={true} sensitivity={100} right={swipeoutBtns}>
      <Container>
        {done ? <DoneText>{todo}</DoneText> : <Text>{todo}</Text>}
      </Container>
    </Swipeout>
  );
};

export default ToDoItem;
