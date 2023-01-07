import { faDolly, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "../../components/card";
import { useSelector, useDispatch } from 'react-redux';
import {resetUserDetails} from "../../reducers/userSlice"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const Dashboard = ()=>{
    const dispatch = useDispatch()
    const {fullName} = useSelector(state=> state.user)
    return(
        <>  
            <div className="body">
            <h4>Welcome, {fullName}</h4>
            
            <button class="btn btn-success" onClick={()=>dispatch(resetUserDetails())}>Logout</button>
            <div className="card_block">
                <Card title='Send Item' link="/orders" icon={faPaperPlane}/>
                <Card title='My Orders' link="/ordersList"  icon={faDolly}/>
                </div>
            </div>
        </>
    )
}
export default Dashboard