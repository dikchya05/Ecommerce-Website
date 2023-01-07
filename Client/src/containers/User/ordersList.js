import React, {useEffect, useState} from 'react'
import Box from '../../components/box'

const OrdersList = ()=>{
    const [orderList, setOrderList] = useState([])

    const fetchData = async()=>{
        const response = await fetch("http://localhost:4000/orders")
        const data = await response.json()

        if(data){
            setOrderList(data.ordersList)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <section>
            <div className='container'>
                <div className='orderList'>
                    <h1 className='title'> My Orders</h1>
                    {orderList.length > 0 ? orderList.map((item)=>{
                        return(
                            <Box item={item}/>
                            )
                    }): 'list not found'}
                </div>
            </div>
        </section>
    )
}

export default OrdersList