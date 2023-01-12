import React from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import axios from 'axios'


const Box = ({ item, fetchData }) => {
  const deleteItem = async () => {
    //     const requestOptions = {
    //         method: "DELETE",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify()
    //     };
    //     const response = await fetch('http://localhost:4000/orders', requestOptions);
    //     const data = await response.json()
    //    console.log(data)'
    axios.delete('http://localhost:4000/orders', { data: { id: item._id } })
      .then(response => response ? fetchData() : null)
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
        <Button onClick={() => editItem()}>Delete</Button>
  const  editItem = async ()=>{
    
  }
  return (
    <>
      <Card
        style={{
          width: 300,
        }} >
        <p>{item.name}</p>
        <p>{item.brand}</p>
        <p>{item.size}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
        <Button onClick={() => deleteItem()}>Delete</Button>
        <Button onClick={() => editItem()}>Delete</Button>
      </Card>
    </>
  )
}
export default Box