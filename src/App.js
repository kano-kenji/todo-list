import React, {useState} from 'react';
import './App.css';
import AddToDo from "./components/AddTodo/AddToDo";
import ListToDos from "./components/ListToDos/ListToDos";

function App() {
    const [toDos, setToDos] = useState([]);
    const [lastId, setLastId] = useState(0);

    const addToList = (toDo) => {
        setToDos([...toDos, toDo]);
        setLastId(toDo.id);
    }

    const updateToDo = (toDo) => {
        const newToDos = toDos.map(el => {
            if(el.id === toDo.id){
                return {...el, name: toDo.name, isDone: toDo.isDone}
            } else {
                return el;
            }
        })
        setToDos(newToDos);
    }

    const removeToDo = (removedToDo) => {
        const newToDos = toDos.filter((toDo) => removedToDo !== toDo)
        setToDos(newToDos);
    }

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-lg-12">
                        <div className="card px-3">
                            <div className="card-body">
                                <h3 className="card-title">Todo list {new Date().toLocaleDateString()}</h3>
                                <AddToDo addToList={addToList} id={lastId}/>
                                <ListToDos updateToDo={updateToDo} removeToDo={removeToDo} toDos={toDos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
