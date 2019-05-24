export default function (state=[], action) {
  switch (action.type) {
    case 'ADD_TODO':
    return state.concat([{
      "desc":action.desc,
      "completed":action.completed
    }]);
    case 'DELETE_TODO':
    return [
    ...state.slice(0,action.index),
    ...state.slice(action.index+1)
    ];
    case 'CHANGE_TODO_STATUS':
    return state.map((value,index)=>{
      if(index===action.index){
        value.completed=!value.completed;
        return value;
      }
      else{
        return value;
      }
    });
    default:
    return state
  }
}
