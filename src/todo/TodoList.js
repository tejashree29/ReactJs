import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
//import EditTask from '../modals/EditTask';
import EditTask from '../pages/EditTask'
import { useDispatch} from 'react-redux';
import { deleteTodo } from '../redux/actions/TodoActions';
import { useHistory } from 'react-router';
const TodoList = ({todo}) => {
    //const todo =useSelector(state=>state.TodoReducers.list)
    const history =useHistory()
     const dispatch = useDispatch()
    /* const [modal,setModal]=useState(false);
    const toggle=()=>{
        setModal(!modal)
    }
    const modalState=()=>{
        setModal(false)
    } */
    const handleEdit=()=>{
           history.push(`/edit/${todo.id}`);
    }
   
    return (
        <React.Fragment>
              <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.task}</td>
              <td>
               <button className="editbtn" onClick={handleEdit}><EditIcon/></button>
               <button className="deletebtn" onClick={()=>dispatch(deleteTodo(todo.id))}><DeleteIcon/></button>
              </td>
         </tr>
        </React.Fragment>
    )
}

export default TodoList
