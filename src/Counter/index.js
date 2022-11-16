import { Content, TitleDark } from "./style";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [bestTime, setBestTime] = useState("99:99:99:999");
  const [time, setTime] = useState("00:00:00:000");

  useEffect(() => {
    // console.log("time " + time);
    // console.log("best " + bestTime);
    if (!isStopwatchStart && time < bestTime && time != "00:00:00:000") {
      // console.log("TIME " + time);
      // console.log("BEST " + bestTime);
      setBestTime(time);
    }
  }, [time]);

  return (
    <>
      <TitleDark
        style={{
          width: "85%",
          textAlign: "center",
          marginTop: "13%",
        }}
      >
        count the number of your beers
      </TitleDark>

      <View
        style={{
          backgroundColor: "#11FF55",
          padding: 10,
          borderRadius: 100,
          width: "80%",
          alignItems: "center",
          fontSize: "50%",
          marginTop: "10%",
        }}
      >
        <TitleDark>
          {bestTime === "99:99:99:999" ? "00:00:00:000" : bestTime}
        </TitleDark>
      </View>
      <TouchableHighlight
        style={{
          backgroundColor: "#444",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          height: 70,
          width: "80%",
          marginTop: "2%",
        }}
        onPress={() => {
          setBestTime("99:99:99:999");
        }}
      >
        <Text style={{ fontSize: "50%", fontWeight: "bold", color: "#fff" }}>
          reset best time
        </Text>
      </TouchableHighlight>
      <Stopwatch
        laps
        msecs
        start={isStopwatchStart}
        reset={resetStopwatch}
        options={options}
        getTime={(time) => {
          setTime(time);
        }}
      />
      <Content>
        <TitleDark>{count}</TitleDark>
      </Content>

      <TouchableHighlight
        style={{
          backgroundColor: "#444",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          height: 70,
          width: "80%",
          marginTop: "15%",
        }}
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
          isStopwatchStart
            ? setCount(count + 1) | setTime("00:00:00:000")
            : setCount(count);
        }}
      >
        <Text style={{ fontSize: "50%", fontWeight: "bold", color: "#fff" }}>
          {!isStopwatchStart ? "start" : "stop"}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          backgroundColor: "#444",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          height: 70,
          width: "80%",
          marginTop: "2%",
        }}
        onPress={() => {
          setIsStopwatchStart(false);
          setResetStopwatch(true);
          setCount(0);
        }}
      >
        <Text style={{ fontSize: "50%", fontWeight: "bold", color: "#fff" }}>
          reset
        </Text>
      </TouchableHighlight>
    </>
  );
}

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 100,
    width: "80%",
    alignItems: "center",
    fontSize: "50%",
    marginTop: "15%",
  },
  text: {
    fontSize: "50%",
    color: "#FFF",
    fontWeight: "bold",
  },
};
