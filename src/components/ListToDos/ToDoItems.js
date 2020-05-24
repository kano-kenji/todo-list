import React, {useState} from 'react';
import '../../App.css';

function ToDoItems(props) {
    const toDo = props.toDo;
    const [updatedToDo, setToDo] = useState({id: toDo.id, name: toDo.name, isDone: toDo.isDone});
    const [completedToDo, setCompletedToDo] = useState(toDo.isDone ? 'completed' : '');

    const handleChange = (event) => {
        props.toDo.isDone = event.target.checked
        setToDo(props.toDo);
        props.toDo.isDone ? setCompletedToDo('completed') : setCompletedToDo('');
        props.updateToDo(toDo);
    }

    return (
            <li className={completedToDo}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" type="checkbox" onChange={handleChange}/>
                        {toDo.name}
                        <i className="input-helper"></i>
                    </label>
                </div>
            </li>
        );
}

export default ToDoItems;
