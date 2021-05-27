import './App.css';
import { useMemo, useState } from 'react'

const plusFive = num => {
  console.log('I am called')
  return num + 5;
}

function App() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true)
  // Without useMemo it will called again and again
  // const numPlusFive = plusFive(num)
  const numPlusFive =  useMemo(() => plusFive(num), [num])

  return (
    <div className="App">
      <h1>Understanding withou useMemo()</h1>
      <h2>Current Number: {num}, Plus Five: {numPlusFive}</h2>
      <button onClick={() => {setNum(num +1)}}> Update Number</button>
      <button onClick={() => {setLight(!light)}}> Light</button>
    </div>
  );
}

export default App;
