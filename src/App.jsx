import { useState } from 'react'
import ColorBox from './components/ColorBox'
import ColorInput from './components/ColorInput'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  return (
    <div id="App">
      <ColorBox 
        color={color ? color : 'white'}
        setColor={setColor}
      />
      <ColorInput 
        color={color}
        setColor={setColor}
      />
      <a 
        id='footer' 
        href="https://www.w3schools.com/tags/ref_colornames.asp" 
        target="_blank">
        w3schools HTML colors
        </a>
    </div>
  )
}

export default App