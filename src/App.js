import { createContext, useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';

export const ItemList = createContext();


function App() {

 

  const [item, setItem] = useState([]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(item));
  }, [item]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('items'));
    if (item) {
     setItem(item);
    }
  }, []);
  
  const getItem =(itemTitle) => {
    let id = item.length;
    setItem([...item,{Id : id+1 , title : itemTitle}])
    console.warn(item);
  }

  const deleteItem = itemId => {
    setItem(oldValues => {
      return oldValues.filter(item => item.id !== itemId)
    })
  }

  const [modal, setModal] = useState(false);
  const [editid, setEditid] = useState(null);
  const [edittitle, setEdittitle] = useState("");

  const editItem = id => {
    
    setEditid(id)
    const titleFind = item.find(item1 => item1.id === id)
    setEdittitle(titleFind.title);
    setModal(true);

}



function handleEdit () {
  const updatedItems = item.map(items => {
    if (items.id === editid) {
      return { ...items, title: edittitle }; // Change the name here
    }
    return items;
  });
  setItem(updatedItems);
  setModal(false);
}


  return (
    <>
    <ItemList.Provider value={{item, getItem, deleteItem, editItem}} >
    <div className="App">
    <TodoList />
    </div>
     </ItemList.Provider>
     {
      modal === true ? (<div className='todo-add todo-edit flex flex-col gap-4 justify-between items-center mb-5'>
      <input className='w-full' value={edittitle} type="text" onChange={(val)=>setEdittitle(val.target.value)} />
      <button onClick={()=>{handleEdit()}}>Save</button>
      </div>) : null
     }
     </>
  );
}

export default App;
