import React, { useState, useCallback } from 'react'
import Button from './Button'

const App = () => {
  const [number, setNumber] = useState(20)

  const appStyles = {
    background: 'white',
    margin: '40px',
    textAlign: 'center',
    fontSize: '40px'
  }

  // will be different function every re-render:
  // const btnCallback = e => {
  //   console.log('click')
  //   setNumber(Math.floor(Math.random() * 10))
  // }

  // memoize based on no parameters []
  // (equivalent to class method on class components):
  const btnCallback = useCallback(e => {
    console.log('click')
    setNumber(Math.floor(Math.random() * 10))
  }, [])

  return (
    <div style={appStyles}>
      <div>The random number is: {number}</div>
      <Button callback={btnCallback} />
    </div>
  )
}

export default App
