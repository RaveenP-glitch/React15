import React, { useState } from 'react';
import './App.css';
import List from './List';
import data from './data';

function App() {

  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <section className='container'>
        <h3> {people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </div>
  );
}

export default App;
