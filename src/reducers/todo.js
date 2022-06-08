const initialState={
    todos:[],
    /* ids:{},
    completed:{} */
};
    

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos,action.payload],
                /* ids:[...state.ids,action.payload.id],
                completed:[...state,false] */
               };
        case 'TOGGLE_TODO':
            
            return{
                ...state,
                todos:state.todos.map(todo=>{
                    if(todo.id!==action.payload.id)
                    return todo
                    return{
                        ...todo,
                        completed:!todo.completed
                    }
                })
                
            }; 
        case 'DELETE_TODO':
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.payload.id)

            };
        default:
            return state
    };

}
export default reducer; 