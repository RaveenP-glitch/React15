import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');

  }


  
  return (
    <div className="App">
     <>
      <section className="container">
        <h1>color generator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color}>


        </input>
      </form>

      </section>
      <section className="colors">
      <h4>list goes here</h4>


      </section>
     </>
    </div>
  );
}

export default App;
