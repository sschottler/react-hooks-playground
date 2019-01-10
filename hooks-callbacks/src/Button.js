import React from 'react'

const buttonStyle = {
  width: '200px',
  padding: '20px',
  background: 'black',
  color: 'white',
  fontSize: '20px',
  margin: '40px'
}

// will re-render even if props haven't changed:
// const Button = ({ callback }) => (
//   <button style={buttonStyle} onClick={callback}>
//     {console.log('button re-rendered')}
//     Press Me!
//   </button>
// )

// React.memo equivalent to extending PureComponent for class components:
const Button = React.memo(({ callback }) => (
  <button style={buttonStyle} onClick={callback}>
    {console.log('button re-rendered')}
    Press Me!
  </button>
))

export default Button
