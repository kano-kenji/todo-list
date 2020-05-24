import React from 'react';
import '../../App.css';
import ToDoItems from "./ToDoItems";

function ListToDos(props) {
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {props.toDos.map((todo) =>
                    <ToDoItems key={todo.id} toDo={todo}/>
                )}
            </ul>
        </div>
    );
}

export default ListToDos;
