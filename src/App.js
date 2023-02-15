import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { FirstAction } from './Components/NewReducer/Action';



function App() {
  const [data,setData]=useState(" ");
const selector = useSelector((state)=>state.NewReducer);
const dispatch = useDispatch();
const handleDispatch = () => {
    dispatch({type:"ADD_USER",payload:data});
    document.getElementById("input").value = "";
    // setData(" ");
};
  return (
    <div className="App">
      <input type="text" onChange={(e)=>setData(e.target.value)} id="input" value={data}/>
      <button  onClick={handleDispatch}>Dispatch</button>
      {selector.map((elem,index)=>{
        return(
          <div key={index}>
            <h1>{elem}</h1>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
