import React, { useEffect, useState } from "react";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useSelector} from 'react-redux'
import { message, Skeleton } from "antd";



const Profile =()=>{
    const {_id} = useSelector(state=> state.user)
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchProfileDetails = async()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/profile/${_id}`)
        .then(res=> setUserDetails(res.data.user))

    }
    const avatarupload = async (file)=>{
        const formData = new FormData();
        formData.append("avatar", file);
        formData.append("avatar", file);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/profile/${_id}`, {
            method: "POST",
            body: formData,
        })
        const data = await response.json()
        if(data.msg === 'successfully uploaded'){
            message.success(data.msg)    
            setLoading(false)     
        }

    }
    useEffect(()=>{
    fetchProfileDetails()
        
   },[])
   
    
    

return(
    <>
    <section>
            <div className="container">
                <div className="user_profile">
                    <div className="user_img">
                        {/* {loading?
                      
                            <img src={require(`../../uploads"${userDetails.avatar|| ''}`).default}  height={'100%'} width={'100%'}
                            />: <Skeleton.Avatar active size={200}/>
                        } */}
                    </div>

                   

                    <div className="user_detail">
                    <h1>{userDetails.name}</h1>
                        <p>{userDetails.email}</p>
                        <p>{userDetails.permanentAddress}, {userDetails.country}</p>
                    </div>
                </div>
            </div>
        </section></>
)
}
export default Profile