import './App.css';
import ChildComponent from './ChildComponent'
import { useCallback, useState } from 'react'

function App() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true)

  // Without useCallback
  // const plusFive = () => {
  //   console.log('I am called');
  //   return num + 5;
  // }

  const plusFive = useCallback(() => {
        console.log('I am called');
        return num + 5;
  }, [num])


  return (
    <div className="App">
      <h1>Understanding without useCallback()</h1>
      <h2>Current Number: {num}</h2>
      <ChildComponent someFunc={plusFive} />
      <button onClick={() => {setNum(num +1)}}> Update Number</button>
      <button onClick={() => {setLight(!light)}}> Light</button>
    </div>
  );
}

export default App;
