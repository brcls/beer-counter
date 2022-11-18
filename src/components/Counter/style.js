import styled from "styled-components/native";
import React from "react";

export const Content = styled.View`
  background-color: transparent;
  border-color: #444;
  border-width: 5px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 80%;
  margin-top: 2%;
`;

export const TitleDark = styled.Text`
  color: #121212;
  font-size: 50%;
  font-weight: bold;
  width: 85%;
  text-align: center;
  margin-top: 13%;
`;

export const TitleLight = styled.Text`
  color: #eee;
  font-size: 50%;
  font-weight: bold;
`;

export const Button = styled.TouchableHighlight`
  background-color: #444;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 80%;
  margin-top: 15%;
`;
