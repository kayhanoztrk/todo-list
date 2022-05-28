import React from "react";

function ToDoList(){

    return(
        <div className="todo-list">
                <ul>
                    <li>
                        <div>Shopping</div>
                        <div className="icon">
                            <i title="Complete" className="fas fa-check circle" />
                            <i title="Delete" className="fas fa-trash-alt" />
                        </div>
                    </li>
                </ul>
        </div>

    );
}

export default ToDoList;