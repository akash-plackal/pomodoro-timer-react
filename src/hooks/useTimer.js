import { useEffect, useState } from 'react'

function useTimer() {
  const [milliseconds, setMilliseconds] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [breakTime, setBrakeTime] = useState(false)

  useEffect(() => {
    let interval = null

    interval = setInterval(() => {
      setMilliseconds(ms => ms + 10)
    }, 10)

    if (isPaused) {
      clearInterval(interval)
    }

    // if (minutes === 25) {
    //   setBrakeTime(true)
    // }

    return () => clearInterval(interval)
  }, [isPaused])


  function pause() {
    setIsPaused(true)
  }

  function play() {
    setIsPaused(false)
  }

  function reset() {
    setMilliseconds(0)
    setIsPaused(true)
  }

  const seconds = Math.floor((milliseconds / 1000) % 60)
  const minutes = Math.floor(milliseconds / 1000 / 60)

  return {
    timer: {
      milliseconds: Math.floor((milliseconds / 10) % 100),
      seconds,
      minutes
    },
    breakTime,
    setBrakeTime,
    play,
    pause,
    reset
  }
}

export { useTimer }
