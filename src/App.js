import { useEffect, useState } from 'react';
import './App.css';
import Group from './components/Group';

function App() {

  const [users,setUsers] = useState([]);

  const getUsersList = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
  };

  useEffect(() => {
    getUsersList();
  },[]);
  return (
    <div  className = "container">
      <div className="app">
      <Group  header = "Even" usersList = {users}/>
       <Group  header = "Odd" usersList = {users}/>
      </div>
    </div>
  );
}

export default App;
