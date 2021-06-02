import React from "react"

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
    } else if (timeLeft < 6) {x
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

export default Timer
