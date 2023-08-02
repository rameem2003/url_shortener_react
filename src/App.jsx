import { useState } from 'react'
import InputLink from './components/InputLink/InputLink'
import Background from './components/Background/Background'
import LinkResult from './components/LinkResult/LinkResult'

function App() {
  const [value, setValue] = useState("")

  return (
    <>
      <InputLink setValue = {setValue}/>
      <Background/>
      <LinkResult value = {value}/>
    </>
  )
}

export default App
