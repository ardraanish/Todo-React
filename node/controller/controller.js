const Todo = require("../models/taskModel")

exports.CreateTodo = async(req,res) => {
   
    
    try {   
        console.log("dnkvnn");
        const {title,description,status} = req.body  
        console.log(title,description,status,"hhhhh");
             
        const todo = new Todo({title,description,status})
        console.log(todo)
        const todos = await todo.save()
      
        res.json(todos)
        console.log('ardradraddr')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.ShowTodo = async(req,res) => {
    try {
       
        const todos = await Todo.find();  
            console.log("todoooos");
            
        res.json(todos);  
    } catch (error) {
        res.status(400).send(error.message);  
    }
};

exports.getId = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id); 
        res.json(todo);
    } catch (err) {
        res.status(400).send(err.message); 
    }
};

exports.deleteTodo = async (req,res)=>{
    const { id } = req.params;
    try {
        const todose =await Todo.findByIdAndDelete(id)
        res.json(todose)
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}
exports.editId = async (req,res)=>{
   
    try {
        const { id} = req.params;
        const {title,description,status} = req.body
        const todos = await Todo.findByIdAndUpdate(id ,{title,description,status},{new:true})
        res.json(todos)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


