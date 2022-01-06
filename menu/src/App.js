import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './App.css';

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }


  return (
    <section className="menu-section">
      <div className='title'>
      <h1>Our Menu</h1>
     <div className='underline'></div>
     </div>
     <Categories />
     <Menu items = {menuItems} />
    </section>
  );
}

export default App;
