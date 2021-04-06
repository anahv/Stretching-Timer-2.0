import React, { useState, useEffect } from "react";
import Button from "./Button"
import Stepper from "./Stepper"

function App() {
  const initialIntervals = 30;
  const initialIntervalDuration = 30;

  const [totalIntervals, setTotalIntervals] = useState(initialIntervals);
  const [intervalDuration, setIntervalDuration] = useState(initialIntervalDuration);
  const [remainingIntervals, setRemainingIntervals] = useState(totalIntervals);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialIntervalDuration);

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
        <div className="timer row">
          <div className="col-md-12">
            <h1>{timeLeft} </h1>
          </div>
        </div>
        <div className="buttons row">
          <Button id="start" title="Start" icon="play" onClick={start} data-testid="start"/>
          <Button id="pause" title="Pause" icon="pause" onClick={pauseTimer} data-testid="pause"/>
          <Button id="restart" title="Reset" icon="repeat" onClick={restartIntervals} data-testid="restart"/>
          <Button id="testFail"/> 
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row header">
        <div className="col-md-12 ">
          <h1> Interval Timer </h1>
        </div>
      </div>

      <div className="row">

        <Stepper title="Number of intervals" content={remainingIntervals} content2={totalIntervals} onPlus={x => {
          setTotalIntervals(totalIntervals + 1)
          setRemainingIntervals(remainingIntervals + 1)
        }} onMinus={x => {
          setTotalIntervals(totalIntervals - 1);
          setRemainingIntervals(remainingIntervals - 1)
        }} />

        <Stepper title="Interval Duration" content={intervalDuration} onPlus={x => {
          setIntervalDuration(intervalDuration + 5)
          setTimeLeft(timeLeft + 5)
        }} onMinus={x => {
          setIntervalDuration(intervalDuration - 5);
          setTimeLeft(timeLeft - 5)
        }} />

      </div>
      <Timer />
    </div>
  );
}

export default App;

//https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks
//https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
