import './App.css';
import Calculator from './components/Calculator/Calculator';
import {numbers,operators} from "./enums"

function App() {
  return (
    <div className="App">
      <Calculator numbers={numbers} operators={operators}/>
    </div>
  );
}

export default App;
