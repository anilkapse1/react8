import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompA=()=>{

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=>{
       async function getData(){
           const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           setNum(res.data.id);            
           setName(res.data.name);            
           setMoves(res.data.moves.length);            
        }
       getData();
    })

    const callFun=(e)=>{
        console.log(e.target); 
        const {value} = e.target;
        setNum(value);
    }

    return (
        <>

            <h1>number is: {num} </h1>
            <h1>pokemon name is: {name}</h1>
            <h1>total moves is: {moves} </h1>

            <select value={num} onChange={callFun}>
            <option value="25">  25</option>
            <option value="1">1</option>
            <option value="4">4</option>
            <option value="1">1</option>
            <option value="15">15</option>
            </select>
        </>
    )   
}

export default CompA;
