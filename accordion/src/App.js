import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import './App.css';


function App() {

  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>quesitons and answers about login</h3>
        <section className='info'>
          
        </section>
     
    </div>
  );
}

export default App;
