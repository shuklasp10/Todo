
const todoReducer = (todo=null,action) =>{
    switch(action.type){
        case 'SETTODO':
            return action.data;
        case "ADDTODO":
            return [...todo,action.data];
        case "DELETETODO":
            let newTodo = todo.filter(item=>item.id!==action.data.id);
            return newTodo;
        case "SETDONE":
            return todo.map(item=>item.id===action.data.id?{...item,done:!item.done}:item);
        case "CLEARTODO":
            let filteredtodo = todo.filter(item=>!item.done);
            return filteredtodo;
        case "CLEARALL":
            return [];
        default:
            return todo;
    }
}

export default todoReducer;