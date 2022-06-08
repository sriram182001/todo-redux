import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../actions/todo";
import './input.css'
function TodoInput(){
   const [newTodo,setnewTodo]=useState()
   const handleInput=(e)=>setnewTodo(e.target.value)
   const dispatch=useDispatch();
   const HandleClick=()=>((newTodo!==undefined))?((newTodo!=='')?dispatch(addtodo(newTodo)):console.log('enter something')):console.log('enter something')
   return(
     <div className='form'>
         <div className='form-control'>
         <input id='input-form'type="text" onChange={handleInput} value={newTodo} placeholder='Enter a task here'/>
         <br />
         <br />
         <button onClick={HandleClick}><b>ADD</b></button>
         </div>
     </div>
   )
}
export default TodoInput;