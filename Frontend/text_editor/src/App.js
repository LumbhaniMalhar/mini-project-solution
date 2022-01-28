import './App.css';
import { useState } from 'react'

function App() {
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className='container'>
    <form className='add-form'>
      <div className='form-control'>
        <label>Input your main text</label>
        <input
          type='text'
          placeholder='Input 1'
          value={input_1}
          onChange={(e) => setInput_1(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Text that needs to be replaced</label>
        <input
          type='text'
          placeholder='Input 2'
          value={input_2}
          onChange={(e) => setInput_2(e.target.value)}
        />
      </div>
      <button className='btn'>
        Submit
      </button>
    </form>
    </div>
  )
}

export default App;
