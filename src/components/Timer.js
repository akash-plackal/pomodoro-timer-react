import React, { useState } from 'react'
import './timer.css'
import { useTimer } from '../hooks/useTimer'

const Timer = () => {

  const [isPaused, setIsPaused] = useState(false)

  const {
    timer: { milliseconds, seconds, minutes },
    play,
    pause,
    reset,
    // breakTime,
    // setBrakeTime
  } = useTimer()


  return (
    <div
      className='border-2 shadow h-[40vh] w-[35%] rounded m-auto mt-[8%] 
      flex flex-col items-center justify-center'>

      <p className='text-8xl'>
        {minutes}:{seconds}:{milliseconds < 10 ? '0' + milliseconds : milliseconds}
      </p>

      <div className='flex gap-4'>
        <button
          onClick={play}
          className='px-5 border-2 rounded'
        >Play</button>
        <button
          onClick={pause}
          className='px-5 border-2 rounded'
        >Pause</button>
        <button
          onClick={reset}
          className='px-5 border-2 rounded'
        >Stop</button>

      </div>
    </div>
  )
}

export default Timer
