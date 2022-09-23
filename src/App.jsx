import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/button/Button'
import TextInput from './components/textInput/TextInput'

function App() {

  return (
    <div className="h-screen bg-re">
      <Button>
        Login
      </Button>

      <Button type="submit" className="bg-red-400">
        Hello
      </Button>
      <TextInput label="First Name" placeholder="First Name" />
      <TextInput label="Last Name" placeholder="Last Name" inputClass="w-1/2" />
    </div>
  )
}

export default App
