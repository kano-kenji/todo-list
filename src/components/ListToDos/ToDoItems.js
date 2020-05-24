import React from 'react';
import '../../App.css';

function ToDoItems(props) {
    return (

            // <li className="completed">
            <li>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" type="checkbox"/>
                        {props.toDo.name}
                        <i className="input-helper"></i>
                    </label>
                </div>
            </li>
        );
}

export default ToDoItems;
