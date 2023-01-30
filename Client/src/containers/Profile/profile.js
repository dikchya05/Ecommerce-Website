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
        const response = await fetch('http://localhost:4000/profile/${_id}');

    }
    const avatarUpload = async (file)=>{
        const formData = new FormData();
        formData.append("avatar", file);
        const response = await fetch('http://localhost:4000/profile/id',{
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
                        {loading?
                            <img src={require(`../../../src/images/${userDetails.avatar|| ''}`)}  height={'100%'} width={'100%'}
                            />: <Skeleton.Avatar active size={200}/>
                        }
                    </div>

                    <div className="uploader">
                        <input onChange={(e)=> avatarUpload(e.target.files[0])} type="file" id="upload" hidden/>
                        <label htmlFor="upload"><FaCamera/></label>
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