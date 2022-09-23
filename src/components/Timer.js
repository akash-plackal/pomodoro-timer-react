
import React, { useState, useEffect } from "react";

const Timer = () => {

  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)

  const [newSec, setNewSec] = useState(0)

  let timer

  useEffect(() => {
    timer = setInterval(() => {

      setSec(sec + 1)

      if (sec === 59) {
        setMin(min + 1)
        setSec(0)
      }
    }, 1000)

    return () => clearInterval(timer)
  })


  const reset = () => {
    setSec(0)
    setMin(0)
  }

  const stop = () => {
    setNewSec(sec)
    clearInterval(timer)
    // not working
  }


  return (
    <div className="border-2 h-28 flex flex-col items-center justify-center">
      <h1>Timer</h1>
      <h1>{min < 10 ? '0' + min : min}
        :
        {sec < 10 ? '0' + sec : sec}
      </h1>

      <div>
        {console.log(newSec)}
        <button className='border-2' onClick={reset}>reset</button>
        <button className='border-2' onClick={stop}>pause</button>

      </div>

    </div>
  )

}

export default Timer;
