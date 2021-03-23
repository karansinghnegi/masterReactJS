import './App.css';
import MyComponent from './Components/MyComponent';

function App(props) {
  console.log(props, 'App Component')
  return (
    <div className="App">
      <h1>React Fundamentals</h1>
      <MyComponent {...props} />
    </div>
  );
}

export default App;
