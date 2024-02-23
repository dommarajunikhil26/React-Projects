import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setData(response))
    
  })
  return(
    <div>
      <center>
        <p>Hello</p>
        {data.map(item => <li key={item.id}>{item.title}</li>)}
      </center>
    </div>
  )
}

export default App