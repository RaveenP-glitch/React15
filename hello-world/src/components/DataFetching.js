import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    
    const [posts,setPosts] = useState([]);
    con
  
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res);
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  
    return (
    <div>
        <input type="text" value={} onChange={}></input>
        <ul>
            {
                posts.map(post => (
                    <li>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default DataFetching