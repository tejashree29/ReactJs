import React, { useState,useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { editTodo} from '../redux/actions/TodoActions';

const EditTask = ({modal,toggle,modalState,todo}) => {
  const dispatch=useDispatch();
    const [etask,seteTask]=useState("");
    
    const handleChange=(e)=>{
         seteTask(e.target.value)
    }
    useEffect(()=>{seteTask(todo.task)},[todo])
    const handleUpdate=(e)=>{
       e.preventDefault();
       const update_todo={
         task:etask
       }
       dispatch(editTodo(update_todo))
        modalState();
        seteTask("");
        
    }
    return (
        <React.Fragment>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
             <ModalBody>
                  <form>
                      <div className="form-group">
                          <label>Task</label>
                            <input type="text" className="form-control" name="task" value={etask} onChange={handleChange}></input>
                      </div>
                  </form>
             </ModalBody>
             <ModalFooter>
                 <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                 <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </React.Fragment>
    )
}

export default EditTask