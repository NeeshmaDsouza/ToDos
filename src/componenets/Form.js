import React from "react";
import '../App.css'

export function Form({task, setTask, addTaskToList}) {

    return (
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
        
    )

}