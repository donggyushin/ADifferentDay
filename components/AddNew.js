import React from "react";
import styled from "styled-components";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";

const Input = styled.TextInput`
  width: ${Layout.addnewWidth};
  height: ${Layout.addnewHeight};
  border: 2px solid ${Colors.greenDarnerTail};
  border-radius: 50;
  text-align: center;
  color: ${Colors.americanRiver};
  font-size: ${Sizes.titleFontSize};
`;

const AddNew = ({ addNew, handleAddNewText, handleSubmitEditing }) => (
  <Input
    placeholder={"+ Add New"}
    placeholderTextColor={Colors.normalBlueBackground}
    onChangeText={handleAddNewText}
    value={addNew}
    returnKeyType={"done"}
    autoCorrect={false}
    onSubmitEditing={handleSubmitEditing}
  />
);

export default AddNew;
