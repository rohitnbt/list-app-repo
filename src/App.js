import { createContext, useState } from 'react';
import './App.css';
import TodoList from './TodoList';

export const ItemList = createContext();


function App() {
  const [item, setItem] = useState([
    {
      "id": 1,
      "title": "go to market"
    },
    {
      "id": 2,
      "title": "watch movie"
    },
    {
      "id": 3,
      "title": "wash scooty"
    },
    {
      "id": 4,
      "title": "buy new gloves"
    },
    {
      "id": 5,
      "title": "call sam"
    }
  ]);
  const getItem =(itemTitle) => {
    let id = item.length;
    setItem([...item,{"Id" : "id" , title : itemTitle}])
  }

  const deleteItem = itemId => {
    setItem(oldValues => {
      return oldValues.filter(item => item.id !== itemId)
    })
  }

  const [modal, setModal] = useState(false);
  const [editid, setEditid] = useState(null);
  const [edittitle, setEdittitle] = useState(null);

  function editItem (id) {
    setModal(true);
    
    setEditid(id)
}

function handleEditTitle (val) {
  setEdittitle(val.target.value)
}

function handleEdit () {
  setModal(false);
  alert(edittitle)
}


  return (
    <>
    <ItemList.Provider value={{item, getItem, deleteItem, editItem}} >
    <div className="App">
    <TodoList />
    </div>
     </ItemList.Provider>
     {
      modal == true ? (<div className='todo-add todo-edit flex flex-col gap-4 justify-between items-center mb-5'>
      <input className='w-full' value={item[editid-1].title} type="text" onChange={(val)=>val.target.value} />
      <button onClick={()=>{handleEdit()}}>Save</button>
      </div>) : null
     }
     </>
  );
}

export default App;
