import { Content, TitleDark, TitleLight, Button } from "./style";
import React, { useState } from "react";
import { Stopwatch } from "react-native-stopwatch-timer";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  function handleCount(e) {
    e.preventDefault();

    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);
    if (isStopwatchStart) {
      setCount(count + 1);
      // setTime("00:00:00:000");
    } else {
      setCount(count);
    }
  }

  function handleReset(e) {
    e.preventDefault();

    setIsStopwatchStart(false);
    setResetStopwatch(true);
    setCount(0);
  }

  return (
    <>
      <TitleDark>count the number of your beers</TitleDark>
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
      <Content>
        <TitleDark>{count}</TitleDark>
      </Content>

      <Button onPress={handleCount}>
        <TitleLight>{!isStopwatchStart ? "start" : "stop"}</TitleLight>
      </Button>
      <Button onPress={handleReset}>
        <TitleLight>reset</TitleLight>
      </Button>
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
