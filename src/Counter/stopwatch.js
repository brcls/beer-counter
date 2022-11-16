// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import { Text, View, TouchableHighlight } from "react-native";

//importing library to use Stopwatch and Timer
import { Stopwatch } from "react-native-stopwatch-timer";

const StopwatchComponent = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View
      style={{
        alignItems: "center",
        marginTop: "15%",
        width: "100%",
      }}
    >
      <Stopwatch
        laps
        msecs
        start={isStopwatchStart}
        reset={resetStopwatch}
        options={options}
        getTime={(time) => {
          console.log(time);
        }}
      />
      <TouchableHighlight
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
        }}
      >
        <Text style={{ fontSize: "50%", fontWeight: "bold" , marginTop: "15%" }}>
          {!isStopwatchStart ? "start" : "stop"}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setIsStopwatchStart(false);
          setResetStopwatch(true);
        }}
      >
        <Text style={{ fontSize: "50%", fontWeight: "bold" }}>reset</Text>
      </TouchableHighlight>
    </View>
  );
};

export default StopwatchComponent;

