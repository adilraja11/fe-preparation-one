import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import TaskApp from './components/TaskApp'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='font-black text-2xl bg-red-900 w-40'>City Quiz</h2>
      <Form />
      <br />
      <TaskApp />
    </>
  )
}

export default App
