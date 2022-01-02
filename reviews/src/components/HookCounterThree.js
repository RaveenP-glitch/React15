import React, { useState } from 'react';
import './hook3.css';

function HookCounterThree() {
    
    const [name, setName] = useState({ firstName: '', lastName: ''})

    return (
        <div>
              <input className = "field" type="text" value = {name.firstName} onChange ={ e => setName({...name, firstName: e.target.value})}/>
              <input className = "field" type="text" value = {name.lastName} onChange ={ e => setName({...name, lastName: e.target.value})}/>
              <h2>Your first name is - {name.firstName}</h2>
              <h2>Your last name is - {name.lastName}</h2>
              <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
