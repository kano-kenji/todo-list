import React, {useState} from 'react';
import '../../App.css';

function ToDoItems(props) {
    const toDo = props.toDo;
    const [updatedToDo, setToDo] = useState({id: toDo.id, name: toDo.name, isDone: toDo.isDone});

    const handleChange = (event) => {
        props.toDo.isDone = event.target.checked
        setToDo(props.toDo);
        props.updateToDo(toDo);
    }

    const handleRemove = () => {
        props.removeToDo(props.toDo);
    }

    return (
            <li className={props.toDo.isDone ? 'completed' : ''} id={props.toDo.id}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" checked={props.toDo.isDone} type="checkbox" onChange={handleChange}/>
                        {toDo.name}
                        <i className="input-helper"></i>
                    </label>
                </div>
                <i className="remove mdi mdi-close-circle-outline" onClick={handleRemove}></i>
            </li>
        );
}

export default ToDoItems;
