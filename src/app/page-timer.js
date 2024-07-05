"use client"

import { Button } from "antd";
import { useState, useRef } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const IntervalRef = useRef();

  const handleStartTimer = () => {
    const currentTime = Date.now();
    setStartTime(currentTime);
    setCurrentTime(currentTime);

    IntervalRef.current = setInterval(() => {
      setCurrentTime(Date.now())
    }, 100);
  }

  const handleResumeTimer = () => {
    setStartTime(currentTime);

    IntervalRef.current = setInterval(() => {

    }, 100);
  }

  const handleStopTimer = () => {
    clearInterval(IntervalRef.current);
  }

  const handleResetTimer = () => {
    setCurrentTime(undefined);
    clearInterval(IntervalRef.current);
  }

  const getTimerValue = () => {
    if (!currentTime) return "00:000"
    return (currentTime - startTime) / 1000
  }

  return (
    <>
      <h1 className="mb-8">Stopwatch</h1>
      <div className="font-bold">{getTimerValue()}</div>
      <div className="flex gap-4">
        <Button type="primary" onClick={handleStartTimer}>Start</Button>
        <Button type="primary" onClick={handleResumeTimer}>Resume</Button>
        <Button type="primary" onClick={handleStopTimer}>Stop</Button>
        <Button type="primary" onClick={handleResetTimer}>Reset</Button>
      </div>
    </>
  )
}

export default StopWatch;
