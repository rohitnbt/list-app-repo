import React from 'react'

export default function CreateTodo() {
    return (
        <>
            <div className='todo-add flex justify-between items-center mb-5'>
                <input className='w-full' type="text" placeholder='add new list...' />
                <button>Add</button>
            </div>
        </>
    )
}
