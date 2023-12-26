import React from 'react'
import TodoItem from './TodoItem'
import CreateTodo from './CreateTodo'


export default function TodoList() {
  return (
   <div>
      <div className='list-box-header'>
        <h2>List App</h2>
        <p>Manage your daily activity</p>
      </div>
      <div className="list-box-Body">
        <CreateTodo />
        <TodoItem />
        <TodoItem />
      </div>
   </div>
  )
}

