import React, { useEffect, useState } from 'react'
import Box from '../../components/box'
import { Skeleton, Button, Card, Pagination, message } from 'antd';
import Navigation from '../../components/navigation/adminNavigation'
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_BASE_URL);

const Dashboard = () => {
   
    const navigate = useNavigate()

    

         

    return (
        <>
            <section>
            
             
                    
                
            </section>
        </>
    )
}

export default Dashboard