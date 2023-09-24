import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert 
      setAlert({
        show: true,
        msg: 'please enter a value',
        type: 'warning'
      })
    } else if (name && isEditing) {
      //deal with edit
      setList(list.map((item) => {
        if(item.id === editID){
          return {...item, title:name }
        }
        return item
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      //show alert
      showAlert(true, 'success', 'Item added successfully');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      };
      setList([...list, newItem]);
      setName('');
    }
  }

  const handleClear = (e) => {
    e.preventDefault();
    setList([]);
    showAlert(true, 'warning', 'The list is empty')
  }

  const showAlert = (show = false, type = "", msg = "" ) => {
    setAlert({ show, type, msg })
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removed');
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specification = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id); 
    setName(specification.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[])

  return <section className='section-center'>
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list ={list} />}
      <h3><mark>grocery bud</mark></h3>
      <div className='form-control'>
        <input type="text" className='grocery' placeholder='eg: Eggs' value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
      </div>
    </form>
    {list.length > 0 && (
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={handleClear}>Clear Items</button>
      </div>
    )}
  </section>
}

export default App
