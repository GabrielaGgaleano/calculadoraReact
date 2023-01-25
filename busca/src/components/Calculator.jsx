import React from 'react'
import './Calculator.css'
import Container from "@mui/material/Container"
import { Hidden } from '@mui/material';
import { useState } from 'react';



 function Calculator() {
    const[num,setNum]=useState(0);
    const[oldnum,setOldNum]=useState(0);
    const[operator,setOperator]=useState(0);



    function inputNum(e){
        var input = e.target.value
           if(num===0){
               setNum(input);  
               
        }else{
          setNum(num+input);
      }       
    }

    function clear(e){
      setNum(0)
     }

     function porcentage(){
      setNum(num / 100);
     }

     function sinal(){
      if (num>0){
        setNum(-num)
        }else{
          setNum(Math.abs(num));
      }
     }

     function operatorHandler(e){
      var operatorInput=e.target.value
        setOperator(operatorInput)
        setOldNum(num);
        setNum(0);
    }

     function calculate(){
        console.log("Calculou")
     }


     function{}

  return (
    <div>
        <box m={5}/>
    <Container maxWidth="xs">
    <div className="wrapper">
    <box m={12}/>
      <h1 className='result'>{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={sinal}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className='orange' onClick={operatorHandler} value="/">/</button>
            <button className='gray' onClick={inputNum} value={7}>7</button>
            <button className='gray'  onClick={inputNum} value={8}>8</button>
            <button className='gray'  onClick={inputNum} value={9}>9</button>
            <button className='orange' onClick={operatorHandler} value="X" >X</button>
            <button className='gray'  onClick={inputNum} value={4}>4</button>
            <button className='gray'  onClick={inputNum} value={5}>5</button>
            <button className='gray'  onClick={inputNum} value={6}>6</button>
            <button className='orange' onClick={operatorHandler} value="-" >-</button>
            <button className='gray' onClick={inputNum} value={1}>1</button>
            <button className='gray'  onClick={inputNum} value={2}>2</button>
            <button className='gray'  onClick={inputNum} value={3}>3</button>
            <button className='orange'onClick={operatorHandler} value="+" >+</button>
            <button className='gray'  onClick={inputNum} value={0}>0</button>
            <button className='gray' onClick={inputNum} value={","}>,</button>
            <button className='gray' style={{visibility:"hidden"}}>,</button>
            <button className='orange' onClick={calculate}>=</button>
    </div>
    </Container>
    </div>
  );
    }

export default Calculator