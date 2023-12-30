import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import CreateTodo from './CreateTodo'
import { ItemList } from './App';


export default function TodoList() {
  const {item} = useContext(ItemList);
  return (
   <div>
      <div className='list-box-header'>
        <h2>List App</h2>
        <p>Manage your daily activity</p>
      </div>
      <div className="list-box-Body">
        <CreateTodo />
        {
          item.map((todos,key)=>
        <TodoItem key={key} title={todos.title} id={todos.Id}/>
        )
        }
      </div>
   </div>
  )
}

