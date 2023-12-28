import React, { useContext, useState } from 'react'
import { ItemList } from './App';

export default function CreateTodo() {
    const {getItem} = useContext(ItemList);
    const [data, setData] = useState("")
    function getData (val){
        setData(val.target.value)
    }
    function putData() {
        getItem(data);
        setData('');
    }
    return (
        <>
            <div className='todo-add flex justify-between items-center mb-5'>
                <input className='w-full' type="text" value={data} placeholder='add new list...' onChange={getData} />
                <button onClick={putData}>Add</button>
            </div>
        </>
    )
}
