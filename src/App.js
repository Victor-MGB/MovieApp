import { useState } from 'react';
import './App.css';

function App(){
  const [state, setState] = useState({
    s: "sherlock",
    results:[],
    selected:{},
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=e53a634e";

  const searchInput = (e)=>{
    let s = e.target.value;

    setState((prevState)=>{
      return{...prevState,s:s};
    });
  };

  const search = (e)=>{
    if(e.key==="Enter"){
    }
  }
}

export default App;
