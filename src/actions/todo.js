
let initialid=0;

export const addtodo=(data)=>(
    {
        type:'ADD_TODO',
        payload:{
            data:data,
            id: initialid++,
            completed:false
            
        }

    }
)
export const deletetodo=(id)=>(
    {
        type:'DELETE_TODO',
        payload:{
            id:id
        }
    }
)
export const toggletodo=(id)=>(
    {
        type:'TOGGLE_TODO',
        payload:{
            id:id
        }
        
    } 
)   

