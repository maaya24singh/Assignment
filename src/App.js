import './App.css';
import AddToDo from './components/AddToDo';
import { useState } from 'react';
import ItemsList from './components/ItemsList';

function App() {
  
  return (
    <div className="App">
       <p className="App_p">ToDo LIST</p>
       <AddToDo/>
       <ItemsList/>
    </div>
  );
}

export default App;
