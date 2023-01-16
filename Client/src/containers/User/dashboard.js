import { faDolly, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "../../components/card";
import { useSelector, useDispatch } from 'react-redux';
import {resetUserDetails} from "../../reducers/userSlice"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Items from '../Admin/itemsList'
import ItemsList from "../Admin/itemsList";



const Dashboard = ()=>{
    const dispatch = useDispatch()
    const {fullName} = useSelector(state=> state.user)
    return(
        <>
        
            <div className="body">
            <div className="body-contain">
            <h4>Welcome, {fullName}</h4>
            
            
            <ItemsList/>
            <div className="card_block">
                
                {/* <Card title='Send Item' link="/orders" icon={faPaperPlane}/> */}
                {/* <Card title='My Orders' link="/itemsList"  icon={faDolly}/>?\ */}
                </div>
            </div>
            </div>
        </>
    )
}
export default Dashboard