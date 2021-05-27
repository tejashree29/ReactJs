const initialState={list:[{id:1622053634458,task:"kokok"},{id:1622053634456,task:"jojo"}]};
const TodoReducers=(state=initialState,action)=>{
    switch(action.type)
    {
        case "ADD_TODO":
            return {
                ...state,
                list:[action.payload,...state.list]
            };
        case "UPDATE_TODO":
            const updatestate=state.list.map(todo=>todo.id===action.payload.id?action.payload:todo)
            return {
                ...state,
                list:[updatestate,...state.list]
            }
        case "DELETE_TODO":
             const newList=state.list.filter((elem)=>elem.id!==action.payload)
             return {...state,list:newList};
        default:
            return state;
    }
}
export default TodoReducers;