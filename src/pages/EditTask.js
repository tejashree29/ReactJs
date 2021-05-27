import React,{useState,useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {editTodo} from '../redux/actions/TodoActions'
const EditTask = () => {
    const history=useHistory()
    const [task,setTask]=useState("")
    const {id}=useParams();
    const todos = useSelector(state =>state.TodoReducers.list)
    const dispatch=useDispatch();
    const val=todos.find((ele)=>ele.id===parseInt(id))
    console.log(val)
    console.log(val.task);
    useEffect(()=>setTask(val.task),[val])
   const handleUpdate=(e)=>{
       e.preventDefault()
      const updateTask={
          id:parseInt(id),
          task:task
      }
      dispatch(editTodo(updateTask))
      console.log(task)
      console.log(updateTask)
    history.push('/dashboard');
   }
   const handleCancel=(e)=>{
       e.preventDefault();
       history.push('/dashboard');
   }
    return (
        <>
       <div className="wrapper">
        <div className="form-wrapper">
            <div className="editheader">
              <h1>Edit Task for {id}</h1>
              </div>
              <br></br>
              <form className="form-group" onSubmit={handleUpdate} >
                <br></br>
                <label>Task</label>
                <input type="text" className="form-control" name="edittask" value={task} onChange={(e)=>setTask(e.target.value)}></input>
                <br></br>
                <div className="btns">
                <button type="submit" value="EditTask" className="btedit">Save</button>
                <button type="submit" className="btncancel" onClick={handleCancel}>Cancel</button>
                </div>
                <br></br>
            </form>
           </div>
        </div>
        </>
    )
}

export default EditTask
