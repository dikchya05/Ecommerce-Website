import React, {useState} from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';
import Card from "../card";
import { faDolly, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { resetUserDetails } from "../../reducers/userSlice"
import { useNavigate } from "react-router-dom";
import { Dropdown, Avatar, Image, Button, Drawer,Pagination } from 'antd';
import { DownOutlined, ArrowLeftOutlined, UserOutlined , MenuOutlined} from '@ant-design/icons';


const AdminNavigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { fullName, userRole } = useSelector(state => state.user)

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const logout = () => {
    dispatch(resetUserDetails())
    navigate('/')
  }
  const changePassword = () => {
    navigate("/changepassword");
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
      type: 'divider',
    },
  ]

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
          <li><a href="/items">Add Item</a></li>
          <li><a><Link to="/itemsList">Item List</Link></a></li> &nbsp; &nbsp; &nbsp; &nbsp;
          <Avatar style={{ backgroundColor: '#68d0ac', }} icon={<UserOutlined />} /> &nbsp;
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <span> {fullName} <DownOutlined /> </span>
            </a>
          </Dropdown> &nbsp; &nbsp; &nbsp;
          {/* <MenuOutlined onClick={showDrawer} style={{ color: 'black', backgroundColor: 'none !important', marginTop: '5px', fontWeight: 'bolder' }} />
          <Drawer title="Admin Dashboard" placement="right" onClose={onClose} open={open}>
            <p><Link to="/">Dashboard</Link></p>
          </Drawer> */}
          <li class="nav-item">
            <ArrowLeftOutlined onClick={() => navigate(-1)} />
          </li>
        </ul>
        <h1 class="logo">Ecommerce</h1>
      </div>
    </nav>

  )
}
export default AdminNavigation