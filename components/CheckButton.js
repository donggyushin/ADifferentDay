import React from "react";
import styled from "styled-components";
import { Platform } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const OS = Platform.OS;

const CheckButton = ({ done }) => {
  const Container = styled.View`
    width: ${Layout.trashButtonWidth};
    height: ${Layout.todoItemHeight};
    background-color: ${done ? Colors.americanRiver : Colors.greenDarnerTail};
    justify-content: center;
    padding-left: ${Layout.trashButtonWidth / 4.4};
    border-bottom-color: ${Colors.todoitemUnderline};
    border-bottom-width: 1px;
  `;
  return (
    <Container>
      {OS === "ios" ? (
        <Ionicons color={Colors.white} size={50} name={"ios-checkmark"} />
      ) : (
        <Ionicons color={Colors.white} size={40} name={"md-checkmark"} />
      )}
    </Container>
  );
};

export default CheckButton;
