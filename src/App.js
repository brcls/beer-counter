import { StatusBar } from "expo-status-bar";
import React from "react";
import Counter from "./Counter";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Counter />
      <StatusBar style="dark" />
    </Container>
  );
}
