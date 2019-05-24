 export const addTodo=(inputValue)=>dispatch=>{ 
        dispatch({
            type: 'ADD_TODO',
            desc: inputValue,
            completed:false
        });
}

export const  deletePost=(index)=>dispatch=>{
        dispatch({
            type: 'DELETE_TODO',
            index:index 
        });
}

export const changeStatusOfATodo=(index)=>dispatch=>{
        dispatch({
            type:'CHANGE_TODO_STATUS',
            index:index
        })
}


