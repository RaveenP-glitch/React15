import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
    <Greet name="Raveen" heroName="Batman" />
    <Greet name="Pulina" heroName="Superman"/>
    <Hello />
    </div>
  );
}

export default App;
