import React, {Suspense} from 'react';
import '../../App.css';
import ToDoItems from "./ToDoItems";

function ListToDos(props) {
    return (

        <div className="list-wrapper">
            <Suspense fallback={<div>Загрузка...</div>}>
                <ul className="d-flex flex-column-reverse todo-list">
                    {props.toDos.map((todo, key) =>
                        <ToDoItems key={key} updateToDo={props.updateToDo} removeToDo={props.removeToDo} toDo={todo}/>
                    )}
                </ul>
            </Suspense>
        </div>
    );
}

export default ListToDos;
