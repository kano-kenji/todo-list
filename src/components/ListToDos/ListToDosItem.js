import React from 'react';

function ListToDosItem(props) {

    const toDo = props.toDo;

    const handleCheckBox = (event) => {
        props.updateToDo({...toDo, isDone: event.target.checked});
    }

    const handleRemove = () => {
        props.removeToDo(props.toDo);
    }

    return (
            <li className={toDo.isDone ? 'completed' : ''}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="checkbox" checked={toDo.isDone} type="checkbox" onChange={handleCheckBox}/>
                        {toDo.name}
                        <i className="input-helper"></i>
                    </label>
                </div>
                <i className="remove mdi mdi-close-circle-outline" onClick={handleRemove}></i>
            </li>
        );
}

export default ListToDosItem;
