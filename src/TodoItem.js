import React from 'react'
import Delete from './delete.png'
import Edit from './editing.png'


export default function TodoItem() {
    return (
        <>
           <div className='todo-item mb-5'>
                <h3 className='todo-heading'>Go To Market</h3>
                <div className='todo-icons'>
                    <button className='delete-icon mr-2'><img src={Delete} alt="Delete" /></button>
                    <button className='edit-icon'><img src={Edit} alt="Edit" /></button>
                </div>
           </div>
        </>
    )
}
