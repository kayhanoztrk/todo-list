import React from "react";
import ToDoList from "./ToDoList";

function CreateToDo(){

    return(
        <>
        <div className="box">
            <div className="text-end">
                <h2>React Todo App</h2>
                <h4>Add a new TODO</h4>
            </div>
            <div className="text-addTodo">
                <input type="text" name="todo" placeholder="write todo here..." />
                <button className="btn-addTodo" type="button" name="addTodo">Add Todo</button>
            </div>
        </div>
        <ToDoList />
        </>
    );
}

export default CreateToDo;