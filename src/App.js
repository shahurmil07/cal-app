// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const[number,setNumber]=useState("")

  const onbtnclick=(e)=>{
    try{
      setNumber(number.concat(e.target.name))
    }catch(err){
      setNumber("err")
    }
  } 

  const clear = ()=>{
    setNumber("")
  }

  const remove = ()=>{
    try{
      setNumber(number.slice(0,-1))
    }catch(err){
      setNumber("err")
    }
  }

  const total=()=>{
    try{

      setNumber(eval(number))
    }catch(err){
      setNumber("err")
    }
  }
 
  return (
    <div className="container">
      <div className='input'>
    <input type='text' value={number}>
  </input>   
    </div>
    
    <div className='type'>
    <button name="" onClick={clear} className='btncolor' >Ac</button>
    <button onClick={remove}  className='btncolor'>C</button>
    <button className='btncolor' name='%' onClick={onbtnclick}  >%</button>
    <button name='/' onClick={onbtnclick} className='btncolor1'>&divide;</button>
    <button name='7' onClick={onbtnclick} className="btn">7</button>
    <button name='8' onClick={onbtnclick} className="btn">8</button>
    <button name='9' onClick={onbtnclick} className="btn">9</button>
    <button name='*' onClick={onbtnclick} className='btncolor1'>&times;</button>
    <button name='4' onClick={onbtnclick} className="btn">4</button>
    <button name='5' onClick={onbtnclick} className="btn">5</button>
    <button name='6' onClick={onbtnclick} className="btn">6</button>
    <button name='-' onClick={onbtnclick} className='btncolor1'>&ndash;</button>
    <button name='1' onClick={onbtnclick} className="btn">1</button>
    <button name='2' onClick={onbtnclick} className="btn">2</button>
    <button name='3' onClick={onbtnclick} className="btn">3</button>
    <button name='+' onClick={onbtnclick} className='btncolor1'>+</button>
    <button name='0' onClick={onbtnclick} id='zero' className='btn'>0</button>
    <button name='.' onClick={onbtnclick} className="btn">.</button>
    <button name='=' onClick={total}className='btncolor1'>=</button>
    </div>

   </div>
  );
}

export default App;
