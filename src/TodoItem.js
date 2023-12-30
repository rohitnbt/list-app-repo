import React, { useContext, useState } from 'react'
import Delete from './delete.png'
import Edit from './editing.png'
import More from './application.png'
import { ItemList } from './App'
import MoreOption from './MoreOption'


export default function TodoItem(props) {
    const {deleteItem, editItem} = useContext(ItemList);

    const [opt, setOpt] = useState(false);

    const handleMore = (id) => {
        console.warn(id);
        setOpt(!opt);
    }

    return (
        <>
           <div className='todo-item mb-5'>
                <h3 className='todo-heading'>{props.title}</h3>
                <div className='todo-icons relative'>
                    <button className='edit-icon mr-2' onClick={()=>{handleMore(props.id)}}><img src={More} alt="Edit" /></button>
                    <button className='delete-icon mr-2' onClick={()=>{deleteItem(props.id)}}><img src={Delete} alt="Delete" /></button>
                    <button className='edit-icon' onClick={()=>{editItem(props.id)}}><img src={Edit} alt="Edit" /></button>
                    {
                        opt === true ? <MoreOption setOpt={setOpt} /> : null
                    }
                    
                </div>
           </div>
        </>
    )
    
}
