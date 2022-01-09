import React from 'react';

const Hello = () =>{
    // return(
    //  <h1>Hello Raveen</h1>
    // )
return React.createElement('div', null, React.createElement('h1',null, 'Hello Raveen'));

}

export default Hello;