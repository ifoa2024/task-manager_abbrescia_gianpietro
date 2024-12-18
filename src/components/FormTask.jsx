import {useState} from "react";

export default function FormTask({addTask}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const saveTask = (event) => {
        event.preventDefault(); 

        console.log('saveTask');

        addTask(title, description);

        setTitle('');
        setDescription('');
    }

    

    return(
        <form onSubmit={saveTask}>
        
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
            <label htmlFor="text" className="form-label">Testo</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="text" rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-success">
                    Salva Task
                </button>
            </div>
            </form>
    )
    
}