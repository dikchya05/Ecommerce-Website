import React from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom";

const Box = ({item})=>{
    
   return(
        <>
        <Card
    style={{
      width: 300,
    }}
  >
    <p>{item.name}</p>
    <p>{item.brand}</p>
    <p>{item.size}</p>
    <p>{item.price}</p>
   <p>{item.quantity}</p>

  </Card>
             </>
    )
}
export default Box