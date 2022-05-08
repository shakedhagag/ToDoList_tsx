import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  }
  console.log(todo);
  return (
    <div className="App">
      <span className='Header'>To Do List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
