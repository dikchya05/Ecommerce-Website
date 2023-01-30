import React, { useEffect, useState } from 'react'
import Box from '../../components/box'
import { Skeleton, Button, Card, Pagination } from 'antd';
import Navigation from '../../components/navigation/adminNavigation'
import { useNavigate } from "react-router-dom";

const ItemsList = () => {
    const [itemList, setitemList] = useState([])
    const [totalOrderCount, setTotalOrderCount] = useState(0)

    const navigate = useNavigate()

    const fetchData = async () => {
        const response = await fetch("http://localhost:4000/items?page={page || 1}&size ={size || 2}")
        const data = await response.json()
        if (data) {
            setitemList(data.itemsList)
            setTotalOrderCount(data.totalOrderCount)

        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <section>
                <div className='container'>
                    <div className='orderList row'>
                        <h1 className='title'> Item</h1>
                        {itemList.length > 0 ? itemList.map((item) => {
                            return (
                                <Box item={item} fetchData={fetchData} />

                            )


                        }) : <Skeleton />
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default ItemsList