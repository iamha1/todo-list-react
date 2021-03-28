import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import uuid from 'uuid'


function App() {
  const [todos, setTodos] = useState([{ }])
  const todoNameRef = useRef()
  const { uuid } = require('uuidv4');


  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === " ")
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }]
    })
    
    todoNameRef.current.value = null
    
  }

  return (
    <>
    <TodoList todos = {todos}/> 
    <input ref={todoNameRef} type="text" />
    <button onClick= {handleAddTodo}>Add Todo</button>
    <button>Add Todo</button>
    <button>Clear Completed</button>
    <div> 0 left to do</div>

</>
  )
  
}
export default App;
