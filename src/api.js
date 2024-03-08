{
    const[data,setData]=useState([]);
    const[name,setname]=useState('');
    // useEffect(()=>
    // {
    //   fetchApi();
    // },[])
    function fetchApi()
    {
      fetch( `http://www.omdbapi.com/?s=${name}&apikey=f81fc71a`).then((res)=>res.json()).then((data)=>{
        
        setData(data.Search);
        
      });
    }
    return (
      <div className="App">
        <input onChange={(e)=>setname(e.target.value)}></input>
        <button onClick={()=>fetchApi()}></button>
       <p>wait</p>
       <div>
  
  {data.map(d=> <li>{d.Title}  {d.Year}</li>)}
       </div>
      </div>
    );
  }