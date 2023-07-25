import React from "react";
import '../App.css'

export function List({toDoList, setToDoList, changeCheckState}) {

    return (
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
                                <br/>
                            </i>
                        )
                    }
                   )
                }
        </div>
    )

}