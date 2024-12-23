import React from 'react'
import Todos from './components/todos'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>

     <Todos/>
     <Toaster/>
    </div>
  )
}

export default App