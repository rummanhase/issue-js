import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [pageNumberHere , setPageNumberHere] = useState(1)
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url = `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, [pageNumberHere]);
  console.log(data)
  return (
    <div className="App">
      <div>
      <button type="button" class="btn btn-primary btn-lg" onClick={()=>setPageNumberHere(pageNumberHere=pageNumberHere-1)}
      disabled={pageNumberHere === 1}
      >PREVIOUS</button> <span>You are Page No </span>
      {pageNumberHere}
      <button type="button" class="btn btn-primary btn-lg" onClick={()=>setPageNumberHere(pageNumberHere=pageNumberHere
        +1)}>NEXT</button>
      </div>
      
<div class="row">
  {
     data && data.map(item => (
      <div class="col-sm-4" key={item.id}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.number}</p>
        <a href="#" class="btn btn-primary">{item.url}</a>
        <h3>user</h3>
        <p class="card-text">login -- {item.user.login}</p>
        <p class="card-text">node_id -- {item.user.node_id}</p>
      </div>
    </div>
  </div>
    ))
  }
</div>

    </div>
  );
}

export default App;
