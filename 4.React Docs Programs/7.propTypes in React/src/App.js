import './App.css';
import MyComponent from './Components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React Fundamentals</h1>
      <MyComponent name='Leenu' age={Number(25)} obj={ { love: 'negi', life: 'negi' }}/>
    </div>
  );
}

export default App;
