import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import './App.css'

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  async function greet() {
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <div className="container">
      <input
        id="greet-input"
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Enter a name..."
      />
      <button type="button" onClick={() => greet()}>
        Greet
      </button>
      <div>{greetMsg}</div>
    </div>
  )
}

export default App
