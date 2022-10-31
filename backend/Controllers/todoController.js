import Todo from '../model/Todo.js';



export const getTodo = async (req,res,next) =>{
    try{
        const todo = await Todo.find({});
        res.status(200).send(todo);
    }
    catch(e){
        res.status(404).send(e.message);
    }
}

export const deleteTodo = async (req,res,next) =>{
    try{
        const id = req.params.id;

        const newTodo = await Todo.findOneAndDelete({id});
        res.status(200).send(newTodo);
    }
    catch(e){
        console.log(e.message);
        res.status(400).send(e.message);
    }
}

export const postTodo = async(req,res,next) =>{
    try{
        const newTodo = req.body;
        const todo = await Todo.create(newTodo);
        res.status(201).send(todo);
    }
    catch(e){
        res.status(400).send(e.message);
    }
}

export const patchTodo = async(req,res,next) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.findOne({id});
        const newTodo = await Todo.findOneAndUpdate({id},{done:!todo.done},{new:true});
        res.status(200).send(newTodo);

    }
    catch(e){
        res.status(404).send(e);
    }
}

export const clearTodo = async (req,res,next) =>{
    try{
        const todolist = await Todo.deleteMany({done:true});
        res.status(200).send(todolist);
    }
    catch(e){
        res.status(400).send(e);
    }
}

export const clearAllTodo = async (req,res,next)=>{
    try{
        const todo = await Todo.deleteMany({});
        res.status(200).send(todo);
    }
    catch(e){
        res.status(400).send(e);
    }
}