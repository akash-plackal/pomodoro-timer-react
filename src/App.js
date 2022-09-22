import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen.js'
import Timer from './components/Timer.js'


const App = () => {

  const [isLoged, setIsLoged] = useState(
    () => localStorage.getItem('email')
  )

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
