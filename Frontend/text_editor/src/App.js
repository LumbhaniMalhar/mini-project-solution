import './App.css';
import { useState } from 'react'

function App() {
  //declaring states
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [result, setResult] = useState("");
  
  //function for generating result
  const onSubmit = event => {
    event.preventDefault();
    return fetch(`http://localhost:8000/textedit`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({input_1: input_1, input_2: input_2})
    }).then(response => response.json()).then(data => {
      setResult(data)
    })
    .catch(err => console.log(err))
  }
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
      <button className='btn' onClick={onSubmit}>
        Submit
      </button>
    </form>
    <div className='outputbox'>
      <div>{result}</div>
    </div>
    </div>
  )
}

export default App;
