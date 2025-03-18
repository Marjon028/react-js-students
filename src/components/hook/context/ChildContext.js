


import React,  { useContext } from 'react';
import ContextData from '../../../context/ContextApp';
const ChildContext =()=>{
 const {data,setdata} = useContext(ContextData)
    return(
        <>
        <h1>{data}</h1>
        </>
    )
}
export default ChildContext