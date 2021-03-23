import './App.css';
import MyComponent from './Components/MyComponent';
import MyButton from './Components/MyButton';

function App(props) {
  console.log(props, 'App Component')
  return (
    <div className="App">
      <h1>React Fundamentals</h1>
      <MyComponent>
        <MyButton />
         <br />
        <MyButton />
      </MyComponent>
    </div>
  );
}

export default App;
