import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Timer = () => {
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Countdown Timer</h2>
        </div>
      </section>
    </section>
  );
};
export default Timer;
