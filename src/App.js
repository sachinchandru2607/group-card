import './App.css';
import Group from './components/Group';

function App() {
  return (
    <div  className = "container">
      <div className="app">
      <Group header = "Group 1" />
       <Group header = "Group 2" />
      </div>
    </div>
  );
}

export default App;
