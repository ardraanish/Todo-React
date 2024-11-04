const express = require("express")
const router = express.Router()
const Controller = require("../controller/controller")

router.post("/todo",Controller.CreateTodo)
router.get('/todo',Controller.ShowTodo)
router.get("/view/:id",Controller.getId)
router.delete('/view/:id', Controller.deleteTodo); 
router.put("/view/:id",Controller.editId)


module.exports = router