import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import User from './User'


function App() {
  // function HandleClick() {
  //   alert('Button Clicked')
  // }
  // const HandClick = () => {
  //   alert('Button 2 Clicked')
  // }
  // const para = (num = 0.0) => {
  //   alert(`we got` + ' ' + num)
  // }
  return (
    <>
      <h2>React core concepts 2</h2>

      {/* Add a onclick handler */}
      {/* <button onClick={HandleClick}>Click me</button><br /><br />
      <button onClick={HandClick}>Click me 2</button><br /><br />
        <button onClick={() => { alert("Button 3 Clicked") }}>Click me 3</button><br /><br /> */}

      {/* if you want to send any parameter you must use a arrow function */}
      {/* <button onClick={() => para(1.05)}>ParaMetar</button><br /><br /> */}

        {/* <Counter></Counter> */}

        <User></User>

    </>
  )
}

export default App
