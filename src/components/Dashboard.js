import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import CreateTask from '../modals/CreateTask';
import TodoList from '../todo/TodoList';
import {Table} from 'reactstrap'
import { useHistory } from 'react-router';
import {Navbar, NavDropdown,Nav} from 'react-bootstrap'
import navbar from '../Navbar/navbar.css';
const Dashboard = () => {
    const history=useHistory()
    const data=localStorage.getItem("UserDetails")
    const parsedata=JSON.parse(data);
    const [modal,setModal]=useState(false);
   
    const todos = useSelector(state =>state.TodoReducers.list)
    const toggle=()=>{
        setModal(!modal);
    }
    const modalState=()=>{
        setModal(false)
    }
const handleLogout=()=>{
    localStorage.removeItem("UserLogin")
    history.push("/login")
}
    return (
        <React.Fragment>
        <Navbar className="nav_container" bg="primary" variant="dark">
            <Nav className="nav_bar_wrapper mr-auto">
                <span className="logo">Logo</span>
                <button className="nav-btn" id="btn" onClick={()=>setModal(true)}> Add Todo </button> 
            </Nav>
            <Nav className="navdpd">
                <NavDropdown title={parsedata.firstname}>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
            <br></br>
                <Table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map((todo)=><TodoList todo={todo} key={todo.id}/>)}
                    </tbody>
                </Table>
       <CreateTask modal={modal} toggle={toggle} modalState={modalState}/>
        </React.Fragment>
    )
}

export default Dashboard