import React, {useState} from "react";
import "./App.css";



function App() {
  const [result, setResult] = useState("");

  const inputHandler = (value)=>{
    if(value === '='){
      try{
        setResult(eval(result).toString());
      }
      catch(error){
        setResult("Error");
      }
    }
    else if(value === 'DEL'){
        setResult("");
    }
    else if(value === 'CE'){
      setResult(result.slice(0,-1));
    }
    else{
      setResult(result+value)
    }
  };


  return (
    <div className="wrapper">
      <h1 className="header">Calculator</h1>
      <input type="text" placeholder="0" id="screen" value={result} readOnly/>

      <div id="button-box">
        <div className="row">
          <button className="button" onClick={() =>inputHandler('DEL')}>DEL</button>
          <button className="button" onClick={() =>inputHandler('CE')}>CE</button>
          <button className="button" onClick={() =>inputHandler('%')}>%</button>
          <button className="button" onClick={() =>inputHandler('/')}>/</button>
          {/* <input type="button" value="DEL" className="button" onClick={inputHandler}/>
          <input type="button" value="CE" className="button" onClick={inputHandler}/>
          <input type="button" value="%" className="button" onClick={inputHandler}/>
          <input type="button" value="/" className="button" onClick={inputHandler}/> */}
        </div>
        <div className="row">
          <button className="button" onClick={() =>inputHandler('7')}>7</button>
          <button className="button" onClick={() =>inputHandler('8')}>8</button>
          <button className="button" onClick={() =>inputHandler('9')}>9</button>
          <button className="button" onClick={() =>inputHandler('*')}>*</button>
          {/* <input type="button" value="7" className="button" onClick={inputHandler}/>
          <input type="button" value="8" className="button" onClick={inputHandler}/>
          <input type="button" value="9" className="button" onClick={inputHandler}/>
          <input type="button" value="*" className="button" onClick={inputHandler}/> */}
        </div>
        <div className="row">
          <button className="button" onClick={() =>inputHandler('4')}>4</button>
          <button className="button" onClick={() =>inputHandler('5')}>5</button>
          <button className="button" onClick={() =>inputHandler('6')}>6</button>
          <button className="button" onClick={() =>inputHandler('-')}>-</button>
          {/* <input type="button" value="4" className="button" onClick={inputHandler}/>
          <input type="button" value="5" className="button" onClick={inputHandler}/>
          <input type="button" value="6" className="button" onClick={inputHandler}/>
          <input type="button" value="-" className="button" onClick={inputHandler}/> */}
        </div>

        <div className="row">
          <button className="button" onClick={() =>inputHandler('1')}>1</button>
          <button className="button" onClick={() =>inputHandler('2')}>2</button>
          <button className="button" onClick={() =>inputHandler('3')}>3</button>
          <button className="button" onClick={() =>inputHandler('+')}>+</button>
          {/* <input type="button" value="1" className="button" onClick={inputHandler}/>
          <input type="button" value="2" className="button" onClick={inputHandler}/>
          <input type="button" value="3" className="button" onClick={inputHandler}/>
          <input type="button" value="+" className="button" onClick={inputHandler}/> */}
        </div>

        <div className="row">
        <button className="button" onClick={() =>inputHandler('00')}>00</button>
        <button className="button" onClick={() =>inputHandler('0')}>0</button>
        <button className="button" onClick={() =>inputHandler('.')}>.</button>
        <button className="button" onClick={() =>inputHandler('=')}>=</button>
          {/* <input type="button" value="00" className="button" onClick={inputHandler}/>
          <input type="button" value="0" className="button" onClick={inputHandler}/>
          <input type="button" value="." className="button" onClick={inputHandler}/>
          <input type="button" value="=" className="button" onClick={inputHandler}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
