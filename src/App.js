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

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-lg-12">
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">Todo list</h4>

                                    <AddToDo addToList={addToList} toDos={toDos} id={lastId}/>

                                    <ListToDos toDos={toDos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
