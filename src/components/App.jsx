import React, { useState, useEffect } from "react";
import StyledStepper from "./Stepper"
import ButtonsRow from "./ButtonsRow";
import ControlButton from "./ControlButton";
import Color from "./Theme/ColorPalette"
import StyledHeader from "./Header"
import StyledCountdown from "./Countdown"
import StepperRow from "./Stepper/StepperRow"
import { ThemeProvider } from "styled-components";
import Theme from "./Theme"
import AppWrapper from "./AppWrapper"
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function App() {
  const initialIntervals = 30;
  const initialIntervalDuration = 30;

  const [totalIntervals, setTotalIntervals] = useState(initialIntervals);
  const [intervalDuration, setIntervalDuration] = useState(initialIntervalDuration);
  const [remainingIntervals, setRemainingIntervals] = useState(totalIntervals);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialIntervalDuration);
  const [theme, setTheme] = useState("light")

  const bringAudio = new Audio(
    "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a");
  const popAudio = new Audio(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");

  const Timer = () => {
    useEffect(
      () => {
        let interval = setInterval(function () {
          if (isActive && timeLeft !== 0) {
            setTimeLeft(timeLeft - 1)
          } else if (isActive) {
            setRemainingIntervals(remainingIntervals - 1)
            setTimeLeft(intervalDuration)
            bringAudio.play()
          }
        }, 1000);
        if (!isActive && timeLeft !== 0) {
          clearInterval(interval);
        } else if (isActive && timeLeft !== 0 && remainingIntervals == 0) {
          setIsActive(false)
          setTimeLeft(0)
        }
        return () => clearInterval(interval);
      },
      [isActive]
    );

    if (remainingIntervals === 1) {
      if (timeLeft === 0) {
        bringAudio.play();
      } else if (timeLeft < 6) {
        popAudio.play();
      }
    }

    function start() {
      setIsActive(true);
    }

    function pauseTimer() {
      setIsActive(false);
    }

    function restartIntervals() {
      setRemainingIntervals(totalIntervals);
      setTimeLeft(intervalDuration);
      setIsActive(false);
    }

    return (
      <div>
        <StyledCountdown>{timeLeft}</StyledCountdown>
        <ButtonsRow>
          <ControlButton id="start" title="Start" icon="play" onClick={start} data-testid="start" color={ ({theme}) => theme.green } />
          <ControlButton id="pause" title="Pause" icon="pause" onClick={pauseTimer} data-testid="pause" color={ ({theme}) => theme.red } />
          <ControlButton id="restart" title="Reset" icon="repeat" onClick={restartIntervals} data-testid="restart" color={ ({theme}) => theme.orange } />
        </ButtonsRow>
      </div>
    );
  };

  return (
    <ThemeProvider theme={Theme(theme)}>
    <AppWrapper>
      <StyledHeader>Interval Timer

      </StyledHeader>

      <FormControlLabel
      control={
        <Switch
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />}
        label="DARK MODE"
        labelPlacement="start"
        labelStyle={{ fontSize: "10px"}}
        />

      <StepperRow>
        <StyledStepper title="Intervals Left" onPlus={x => {
          setTotalIntervals(totalIntervals + 1)
          setRemainingIntervals(remainingIntervals + 1)
        }} onMinus={x => {
          setTotalIntervals(totalIntervals - 1);
          setRemainingIntervals(remainingIntervals - 1)
        }} >
          {remainingIntervals} / {totalIntervals}
        </StyledStepper>

        <StyledStepper title="Interval Duration" onPlus={x => {
          setIntervalDuration(intervalDuration + 5)
          setTimeLeft(timeLeft + 5)
        }} onMinus={x => {
          setIntervalDuration(intervalDuration - 5);
          setTimeLeft(timeLeft - 5)
        }}>
          {intervalDuration}s
        </StyledStepper>
      </StepperRow>

      <Timer />
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

//https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks
//https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
