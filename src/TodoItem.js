import React, { useContext, useState } from 'react'
import Delete from './delete.png'
import Edit from './editing.png'
import { ItemList } from './App'


export default function TodoItem(props) {
    const {deleteItem, editItem} = useContext(ItemList);
    return (
        <>
           <div className='todo-item mb-5'>
                <h3 className='todo-heading'>{props.title}</h3>
                <div className='todo-icons'>
                    <button className='delete-icon mr-2' onClick={()=>{deleteItem(props.id)}}><img src={Delete} alt="Delete" /></button>
                    <button className='edit-icon' onClick={()=>{editItem(props.id)}}><img src={Edit} alt="Edit" /></button>
                </div>
           </div>
        </>
    )
    
}
