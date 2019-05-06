import React from "react";
import styled from "styled-components";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";

const Button = styled.TouchableOpacity`
  width: ${Layout.addnewWidth};
  height: ${Layout.addnewHeight};
  border: 2px solid ${Colors.greenDarnerTail};
  border-radius: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: ${Sizes.titleFontSize};
  color: ${Colors.normalBlueBackground};
`;

const DeleteAllButton = ({ deleteAllTodos }) => (
  <Button onPress={deleteAllTodos}>
    <Text>DELETE ALL</Text>
  </Button>
);

export default DeleteAllButton;
