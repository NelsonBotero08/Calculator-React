import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Display from './components/Display'
import ButtonClear from './components/ButtonClear'
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("")

  const addInput = value => {
    setInput(input + value)
  }

  const result = () => {
    setInput(evaluate(input))
  }

  const clear = () => {
    setInput("")
  }

  return (
    <div className='App'>
      <div className='container'>
        <Display input={input}/>
        <div className='file'>
          <Buttons addInput={addInput}>7</Buttons>
          <Buttons addInput={addInput}>8</Buttons>
          <Buttons addInput={addInput}>9</Buttons>
          <Buttons addInput={addInput}>/</Buttons>
        </div>
        <div className='file'>
          <Buttons addInput={addInput}>4</Buttons>
          <Buttons addInput={addInput}>5</Buttons>
          <Buttons addInput={addInput}>6</Buttons>
          <Buttons addInput={addInput}>*</Buttons>
        </div>
        <div className='file'>
          <Buttons addInput={addInput}>1</Buttons>
          <Buttons addInput={addInput}>2</Buttons>
          <Buttons addInput={addInput}>3</Buttons>
          <Buttons addInput={addInput}>-</Buttons>
        </div>
        <div className='file'>
          <Buttons addInput={result}>=</Buttons>
          <Buttons addInput={addInput}>0</Buttons>
          <Buttons addInput={addInput}>.</Buttons>
          <Buttons addInput={addInput}>+</Buttons>
        </div>
        <div className='file'>
          <ButtonClear clear={clear}/>
        </div>
      </div>
    </div>
  )
}

export default App
