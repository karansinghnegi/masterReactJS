import "./styles.css";
import CountDisplay from './CountDisplay';
import CountContext from './CountContext'

export default function App() {
  return (
    <div className="App">
      <h1>I will become Billionaire</h1>
      <CountContext.Provider value={ {count: 5} } >
        <CountDisplay />
      </CountContext.Provider>
    </div>
  );
}
