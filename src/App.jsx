import { useState } from 'react'

import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Core concepts react recap</h1>
      <ol>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <hr />
      <Posts></Posts>
      
      </>
  )
}


export default App
