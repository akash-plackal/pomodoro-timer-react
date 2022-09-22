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
      {isLoged ?
        <Timer />
        :
        <LoginScreen />
      }
    </>
  )
};

export default App;
