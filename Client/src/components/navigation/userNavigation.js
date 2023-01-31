import React, {useEffect, useState} from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';
import Card from "../../components/card";
import { faDolly, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { resetUserDetails } from "../../reducers/userSlice"
import { useNavigate } from "react-router-dom";
import { Dropdown, Avatar, Image, Button, Drawer,Pagination } from 'antd';
import { DownOutlined, ArrowLeftOutlined, UserOutlined, ShoppingOutlined  } from '@ant-design/icons';
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_BASE_URL);


const UserNavigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cartItem, setCartItem] = useState(0)

  const { fullName } = useSelector(state => state.user)


  const logout = () => {
    dispatch(resetUserDetails())
    navigate('/')
  }

  const changePassword = () => {
    navigate("/changepassword");
  };
  const profile = () => {
    navigate("/profile");
  };
  const items = [
    {
      label: (
        <a target="_blank" onClick={() => logout()} >
          Logout
        </a>
      ),
      key: '0',
    },
    
    {
      label: (
        <a target="_blank" onClick={() => changePassword()} >
          Change Password
        </a>
      ),
      key: '1',
    },
    {
      label: (
        <a target="_blank" onClick={() => profile()} >
         Profile
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
  ]
  const cartInItem = async()=>{
  
    const response = await fetch(`http://localhost:4000/cart`)
    const data = await response.json()
    if (data) {
        setCartItem(data.cartInItem)
    }
    
}

useEffect(() => {
    cartInItem()
}, [])

useEffect(() => {
  socket.on('Cartsvalues', (Cartsvalues) => {
      if (Cartsvalues) {
          const bcupCartItem = cartItem + 1;
          setCartItem(bcupCartItem)
      }
  })
}, [socket, cartItem])



  return (

 <nav class="navbar" style={{backgroundColor: 'wheat'}} >
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
        <span style={{ marginTop: '-6px', fontSize: '15px', color: 'red', fontWeight: 'bold' }}>{cartItem}</span>
        <Link to="/cartdetails"><ShoppingOutlined style={{ fontWeight: 'bolder', fontSize: '30px', color: 'green' }} /></Link> 
         
          <li><a><Link to="/itemsList">Item List</Link></a></li> &nbsp; &nbsp; &nbsp; &nbsp;
          <Avatar style={{ backgroundColor: '#68d0ac', }} icon={<UserOutlined />} /> &nbsp;
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <span> {fullName} <DownOutlined /> </span>
            </a>
          </Dropdown> &nbsp; &nbsp; &nbsp;
          
          <li class="nav-item">
            <ArrowLeftOutlined onClick={() => navigate(-1)} />
          </li>
        </ul>
        <h1 class="logo">Ecommerce</h1>
      </div>
    </nav>






  );
}
export default UserNavigation;