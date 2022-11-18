import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";

export default function Home() {

  // useEffect(() => {
  //   if (!isStopwatchStart && time < bestTime && time != "00:00:00:000") {
  //     setBestTime(time);
  //   }
  // }, [time]);

  return (
    <>
      <Counter />
    </>
  );
}
