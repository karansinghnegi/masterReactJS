import './App.css';
import { Router } from '@reach/router'
import MyComponent from './Components/MyComponent';
import Karan from './Components/Karan'

function App(props) {
  return (
    <div className="App">
      <h1>Understanding Reach Router</h1>
      <Router>
        <MyComponent path="/" />
      </Router>
      <Router>
        <Karan path="/" />
      </Router>
    </div>
  );
}

export default App;
