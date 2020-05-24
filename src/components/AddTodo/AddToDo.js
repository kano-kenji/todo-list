import React, {useState} from 'react';
import '../../App.css';

function AddToDo(props) {
    const [toDoName, setTodoName] = useState('');

    const handleChange = (event) => {
        setTodoName(event.target.value)
    }

    const handleSubmit = (event) => {
        const toDo = {
            id: props.id + 1,
            name: toDoName,
            status: true
        };
        props.addToList(toDo);
        setTodoName('');
        event.preventDefault();
    }

    return (
        <form className="add-items d-flex">
            <input type="text" value={toDoName} className="form-control todo-list-input" onChange={handleChange} placeholder="What do you need to do today?"/>
            <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={handleSubmit}>Add</button>
        </form>
    );
}

export default AddToDo;
