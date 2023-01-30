import React, { useEffect, useState } from 'react'
import Box from '../../components/box'
import { Skeleton, Button, Card, Pagination, message } from 'antd';
import Navigation from '../../components/navigation/adminNavigation'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [itemList, setitemList] = useState([])
    const [totalOrderCount, setTotalOrderCount] = useState(0)

    const navigate = useNavigate()

    const fetchData = async () => {
        const response = await fetch("http://localhost:4000/items?page={page || 1}&size ={size || 2}")
        const data = await response.json()
        if (data) {
            setitemList(data.itemsList)
       

        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const addToCart = async (values) => {
        console.log(values)
        const requestOptions = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        };
    debugger
        const response = await fetch('http://localhost:4000/cart', requestOptions);
        
        const data = await response.json()
        if (data) {
          message.success(data.msg)
        }
      }    

    return (
        <>
            <section>
            
                <div className='container'>
                    <div className='orderList row'>
                        <h1 className='title'> Item</h1>
                        {itemList.length > 0 ? itemList.map((item) => {
                       
                            const {_id , ...data} = item
                        
                            return (
                                <div className='col-md-3'> 

                                <Card
                                style={{
                                 backgroundColor: 'wheat',
                                 marginBottom: '10px'
                                }} >
                                <p>{item.name}</p>
                                <p>{item.brand}</p>
                                <p>{item.size}</p>
                                <p>{item.price}</p>
                                <p>{item.quantity}</p>
                              </Card>
                              <button onClick={()=> addToCart(data)}>Add To Cart</button>
                              </div>  
                          
                            )


                        }) : <Skeleton />
                        }
                    </div>
                    <Pagination defaultPageSize={2}
                        onChange={(page, size) => fetchData(page, size)} total={totalOrderCount} />
                </div>
                
            </section>
        </>
    )
}

export default Dashboard