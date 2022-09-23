
import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen.js'
import Timer from './components/Timer.js'


const App = () => {

  const [isLoged, setIsLoged] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('email')) {
      setIsLoged(true)
    }
  }, [isLoged])

  return (
    <>
      {!isLoged ?
        <LoginScreen />
        :
        <div className='h-screen flex flex-col border-2 items-center'>
          <h1 className='text-gray-500 flex justify-center'>Pomodoro timer</h1>
          <Timer />
        </div>
      }
    </>
  )
};

export default App;
