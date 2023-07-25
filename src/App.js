import './App.css';
import { useState } from "react";
import {v4} from "uuid";
import { Form } from './componenets/Form';
import { List } from './componenets/List';
import './App.css'


function App() {

  const [task, setTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addTaskToList = (newTask) => {
    let newTaskObj = {
      task: newTask,
      state: 0,
      id: v4()
    }
    
    toDoList.push(newTaskObj);
    setToDoList(toDoList);
    setTask("");
  }

  const changeCheckState = (id) => {
    setToDoList(toDoList.map((todo) => {
      if(id === todo.id) {
        todo.state = !todo.state;
      }
      return todo;
    }));
  }

  return (
    <div>
      <marquee> Plan your to do </marquee>
      <div className='mainContainer'>
        <h1> Things to Do </h1>
        <Form task={task} setTask={setTask} addTaskToList={addTaskToList}/>
        <List toDoList={toDoList} setToDoList={setToDoList} changeCheckState={changeCheckState}/> 
      </div>
    </div>
  );
}

export default App;

/* 

*/