import { useDispatch, useSelector } from "react-redux"
import { toggletodo } from "../actions/todo";
import { deletetodo } from "../actions/todo";
import './todos.css'
function Todos(){
    const todos=useSelector(state=>state.todos);
    console.log(todos)
    
    const dispatch=useDispatch()
    
    if(todos.length===0)
    return <p style={{color:'black'}}>NO TASKS TO COMPLETE</p>
    return(
        <>
        <br/>
        
        <div className="list-control">
          {todos.map(todo=>(todo.completed===true)?<><div className='todo'><p id='list'style={{textDecoration:'line-through'}}onClick={()=>dispatch(toggletodo(todo.id))}>{todo.data}<button id='del'onClick={()=>dispatch(deletetodo(todo.id))}><b>X</b></button></p></div></>:<><div className='todo'><p id='list'onClick={()=>dispatch(toggletodo(todo.id))}>{todo.data}<button id='del'onClick={()=>dispatch(deletetodo(todo.id))}><b>X</b></button></p></div></>)}
          
        </div>
        </>
    )
}
export default Todos;