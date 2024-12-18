import { FaPencil, FaRegTrashCan } from "react-icons/fa6";

export default function Task({task}) {

    return(
        <div className='card'>
               <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5>Nome Task: {task.title}</h5>
                  <div className="">
                    <button className="btn btn-outline-warning me-2">
                    <FaPencil/>
                    </button>
                    <button className="btn btn-outline-danger">
                    <FaRegTrashCan/>
                    </button>
                  </div>
                  
                    </div>
                    <p>{task.description}</p>
                    </div>
                    </div>
    )
}