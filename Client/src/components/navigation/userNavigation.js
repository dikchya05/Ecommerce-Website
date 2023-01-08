import * as React from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';
import Card from "../../components/card";
import { faDolly, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { resetUserDetails } from "../../reducers/userSlice"
import { useNavigate } from "react-router-dom";



const UserNavigation=()=> {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logout = () => {
    dispatch(resetUserDetails())
    navigate('/')
}

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Ecommerce</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" link="/orders">Home</a>
               
      </li>
      <li class="nav-item">
        <a class="nav-link" link="/ordersList">Order List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Order</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={() => logout()}>Logout</a>
      </li>
     
    </ul>
  </div>
</nav>
 



  );
}
export default UserNavigation;