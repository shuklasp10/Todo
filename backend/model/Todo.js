import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    id:String,
    title:String,
    desc:String,
    done: Boolean
});

const Todo = mongoose.model('Todo',todoSchema);

export default Todo;
