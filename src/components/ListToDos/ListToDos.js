import React from 'react';
import ToDoItem from "./ToDoItem";

function ListToDos(props) {
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {props.toDos.map((todo, key) =>
                    <ToDoItem key={key} updateToDo={props.updateToDo} removeToDo={props.removeToDo} toDo={todo}/>
                )}
            </ul>
        </div>
    );
}

export default ListToDos;
