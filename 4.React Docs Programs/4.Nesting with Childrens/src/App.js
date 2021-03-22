import './App.css';
import MyComponent from './MyComponent';

function App() {
  const languages = ['Js', 'Python', 'Typescript', 'C++']
  return (
    <div className="App">
      <MyComponent languages={languages} header='Lang'/>
    </div>
  );
}

export default App;
