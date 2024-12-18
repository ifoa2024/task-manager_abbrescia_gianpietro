import { FaEye } from "react-icons/fa6";
import FormTask from "./components/FormTask";
import Task from "./components/Task";
import data from "./data.js";
import {useState} from "react";



function App() {
  
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(data);

  const addTask = (title, description) => {
    console.log('addTask');
    
    setTasks((prevTasks) => (
        [...prevTasks, {
          id: prevTasks.length + 1,
          title: title,
          description: description,
        }]
    ));
  }

  const toggle = () => {
    setShowForm(!showForm);
  }


  

  return (
    <>
      <div className='container my-5'>
        <div className='row justify-content-center'> 
          <div className='col-12 col-md-8 mb-5'>
          <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between align-items-center'>
                <h5 className="card-title">Task Manager App</h5>
                <button onClick= {toggle} className='btn btn-outline-primary'>
                  <FaEye /> <span>{showForm ? 'Nascondi' : 'Mostra'} </span>
                  </button>
                </div>
                


                
                <h6 className='text-danger card-subtitle'>Numero dei task: 0</h6>
                <p className='card-text'>Nessun task inserito!</p>

              </div>
              </div>

          </div>
          {
            showForm && <div className="col-12 col-md-8 mb-5">
                       <div className="card">
                       <div className="card-body">
                        <FormTask addTask={addTask} />
                       </div>
                       </div>
                       </div>
                        
          }


          <div className='col-12 col-md-8 mb-5'>
            <h5>Numero dei Task: {tasks.length}</h5>
            {
              tasks.map((task) => (
                <Task key={task.id} task ={task} />
              ))
            }
            
            </div>
          </div>
        </div>
    </>
  )
}

export default App
