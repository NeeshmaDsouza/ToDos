import './App.css';
import { useState } from "react";
import {v4} from "uuid";
import { Form } from './componenets/Form';
import { List } from './componenets/List';
import './App.css'


function App() {

  const [task, setTask] = useState("");
  const [toDoList, setToDoList] = useState([
    {
      task: "newTask",
      state: 0,
      id: v4()
    }
  ]);

  const addTaskToList = (newTask) => {
    let newTaskObj = {
      task: newTask,
      state: 0,
      id: v4()
    }
    
    // toDoList.push(newTaskObj);
    setToDoList([...toDoList, newTaskObj]);
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
    <div className='mainContainer'>
      <h1> Things to Do </h1>
      <div className='formContainer'>
            <form>
                <label>Enter new task 
                    <br/>
                    <input
                        type='text'
                        value={task}
                        onChange={(e) => {
                          setTask(e.target.value)
                        }}
                    />
                </label>
                <br/><br/>
                <button onClick={() => {
                    addTaskToList(task);
                }}>ADD</button>
            </form>
        </div>
        <div className="listContainer">
                {
                    toDoList.map((todo) => {
                        return(
                            <i key={todo.id}>
                                <input type="checkbox" checked={todo.state} onChange={() => {
                                    changeCheckState(todo.id)
                                }}>
                                </input>  
                                {todo.task}
                            </i>
                        )
                    }
                   )
                }
        </div>
    </div>
  );
}

export default App;



/* 
<Form task={task} setTask={setTask} addTaskToList={addTaskToList}/>
<List toDoList={toDoList} setToDoList={setToDoList} changeCheckState={changeCheckState}/> 
*/