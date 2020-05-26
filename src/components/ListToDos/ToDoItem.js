import React, {useState} from 'react';

function ToDoItem(props) {
    const toDo = props.toDo;
    const id = toDo.id;
    const name = toDo.name;
    const isDone = toDo.isDone;
    const [updatedToDo, setToDo] = useState({id: toDo.id, name: toDo.name, isDone: toDo.isDone});

    const handleChange = (event) => {
        props.toDo.isDone = event.target.checked
        setToDo(props.toDo);
        props.updateToDo(updatedToDo);
    }

    const handleRemove = () => {
        props.removeToDo(props.toDo);
    }

    return (
            <li className={isDone ? 'completed' : ''} id={id}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" checked={isDone} type="checkbox" onChange={handleChange}/>
                        {name}
                        <i className="input-helper"></i>
                    </label>
                </div>
                <i className="remove mdi mdi-close-circle-outline" onClick={handleRemove}></i>
            </li>
        );
}

export default ToDoItem;
