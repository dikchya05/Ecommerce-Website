import * as React from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';
import Card from "../../components/card";
import { faDolly, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { resetUserDetails } from "../../reducers/userSlice"
import { useNavigate } from "react-router-dom";
import { Dropdown, Space, Avatar } from 'antd';
import { DownOutlined, ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';



const UserNavigation=()=> {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { fullName } = useSelector(state => state.user)


  const logout = () => {
    dispatch(resetUserDetails())
    navigate('/')
}
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
      <a target="_blank" onClick={() => navigate(-1)} >
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
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Ecommerce</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
     
      <li class="nav-item">
        <a class="nav-link" ><Link to = "/ordersList">Item List</Link></a>
      </li>
      <li className="user_profile" style={{ 'margin-left': '1200px', 'padding': '10px' }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Dropdown
                  menu={{
                    items,
                  }}>
                  <div className='avatar'>
                    {fullName}
                    <Avatar size={55} icon={<UserOutlined style={{ 'color': 'green' }} />} />
                  </div>
                </Dropdown>
              </Space>
            </a>
          </li>
          <li class="nav-item">
            <ArrowLeftOutlined onClick={() => navigate(-1)} />
          </li>
      
     
    </ul>
  </div>
</nav>
    

 



  );
}
export default UserNavigation;