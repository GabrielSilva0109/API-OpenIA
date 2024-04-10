import { useState } from 'react'
import { makeRequest } from './api/api'
import { SideMenu } from './components/SideMenu/SideMenu'

import './styles/App.css'
import './styles/reset.css'


function App() {
  const [input, setInput] = useState("")
  const [chatlog, setChatLog] = useState([{
    user: "gpt",
    message: "Como posso te ajudar ?"
  }])

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <h1>App Started</h1>


    </div>
  )
}

export default App
