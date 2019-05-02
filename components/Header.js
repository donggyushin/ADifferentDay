import React from "react";
import styled from "styled-components";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo";

const OS = Platform.OS;

const Container = styled.View`
  /* width: ${Layout.width};
  height: ${Layout.height / 8};
  background-color: ${Colors.normalBlueBackground};
  padding-left: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 30px; */
`;

const Today = styled.Text`
  color: ${Colors.white};
  font-size: ${Sizes.titleFontSize};
  margin-bottom: 5px;
`;

const Header = ({ dayLabel, month, today }) => (
  <LinearGradient
    colors={[Colors.greenDarnerTail, Colors.electronBlue]}
    style={styles.linearGradient}
  >
    <Today>
      {dayLabel}, {month} {today}
    </Today>
    {OS === "ios" ? (
      <Ionicons size={40} name={"ios-calendar"} color={Colors.white} />
    ) : (
      <Ionicons size={40} name={"md-calendar"} color={Colors.white} />
    )}
  </LinearGradient>
);

const styles = StyleSheet.create({
  linearGradient: {
    width: Layout.width,
    height: Layout.headerHeight,
    paddingLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 30
  }
});

export default Header;
