import React from 'react';
import ListToDosItem from "./ListToDosItem";

function ListToDos(props) {
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {props.toDos.map((todo, key) =>
                    <ListToDosItem key={key}
                                   toDo={todo}
                                   updateToDo={props.updateToDo}
                                   removeToDo={props.removeToDo} />
                )}
            </ul>
        </div>
    );
}

export default ListToDos;
