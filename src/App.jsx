import { useState } from 'react'
import InputLink from './components/InputLink/InputLink'
import Background from './components/Background/Background'
import LinkResult from './components/LinkResult/LinkResult'
import Footer from './components/Footer/Footer'

function App() {
  const [value, setValue] = useState("")

  return (
    <>
      <InputLink setValue = {setValue}/>
      <Background/>
      <LinkResult value = {value}/>
      <Footer/>
    </>
  )
}

export default App
