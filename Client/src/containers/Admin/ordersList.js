import React, { useEffect, useState } from 'react'
import Box from '../../components/box'
import { Skeleton, Button, Card } from 'antd';
import Navigation from '../../components/navigation/navigation'
import { useNavigate } from "react-router-dom";

const OrdersList = () => {
    const [itemList, setitemList] = useState([])
    const navigate = useNavigate()

    const fetchData = async () => {
        const response = await fetch("http://localhost:4000/orders")
        const data = await response.json()
        if (data) {
            setitemList(data.itemsList)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    

 return (
        <>
            <section>
                <Navigation />
                <div className='container'>
                    <div className='orderList'>
                        <h1 className='title'> Item</h1>
                        {itemList.length > 0 ? itemList.map((item) => {
                            return (
                                <Box item={item} fetchData={fetchData} />
                            )
                        }) : <Skeleton />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrdersList