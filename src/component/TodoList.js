import React from "react";
import { useState } from 'react/cjs/react.development';
import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";

export default function Todolist(){

    //State array which hold all todos 
    const [todos,setTodos] = useState([]);

    //add todo to list 
    const addTask = task => {
        if (!task.text){
              return
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }
    //remove todo from list
    const removeTask = id =>{
        let updatedTasks =[...todos].filter(task => task.id!==id)
        setTodos(updatedTasks)
    }
    //task is completed
    const completeTask = id =>{
        let updatedTasks = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = true;
            }
            return todo;
            })
            setTodos(updatedTasks)
   }
   return(<div> 
       <h1><center>TODO LIST</center></h1>
       <TodoForm addTask ={addTask}></TodoForm>
       <TodoTask completeTask = {completeTask} todos = {todos} removeTask = {removeTask}></TodoTask>
       </div>);
}
