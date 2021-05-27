import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {addTodo} from '../redux/actions/TodoActions'
const CreateTask = ({modal,toggle,modalState}) => {
  
  const dispatch=useDispatch();
    const [task,setTask]=useState("");
    const handleChange=(e)=>{
         setTask(e.target.value)
    }
    const createTodo=(e)=>{
      e.preventDefault();
      const new_todo={
        id:Date.now(),
        task:task
      }
      dispatch(addTodo(new_todo));
      modalState()
      setTask("");
      
    }
    return (
        <React.Fragment>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
             <ModalBody>
                  <form>
                      <div className="form-group">
                          <label>Task</label>
                            <input type="text" className="form-control" name="task" value={task} onChange={handleChange}></input>
                      </div>
                  </form>
             </ModalBody>
             <ModalFooter>
                 <Button color="primary" onClick={createTodo}>Save</Button>{' '}
                 <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </React.Fragment>
    )
}

export default CreateTask
