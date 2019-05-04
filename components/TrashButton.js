import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import Layout from "../constants/Layout";

const OS = Platform.OS;

const Container = styled.View`
  width: ${Layout.trashButtonWidth};
  height: ${Layout.todoItemHeight};
  background-color: ${Colors.trashBackground};
  justify-content: center;
  padding-left: ${Layout.trashButtonWidth / 4.4};
  border-bottom-color: ${Colors.todoitemUnderline};
  border-bottom-width: 1px;
`;

const TrashButton = () => (
  <Container>
    {OS === "ios" ? (
      <Ionicons color={Colors.white} size={40} name={"ios-trash"} />
    ) : (
      <Ionicons color={Colors.white} size={40} name={"md-trash"} />
    )}
  </Container>
);

export default TrashButton;
