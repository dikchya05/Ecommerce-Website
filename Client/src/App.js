import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./containers/registration/register";
import Login from "./containers/login/login";
import UserDashboard from './containers/User/dashboard'
import Orders from './containers/User/orders'
import OrdersList from "./containers/User/ordersList";
import { useSelector, useDispatch } from 'react-redux'
import AdminDashboard from "./containers/Admin/admin";

function App() {
  return (
    <Router>
      <ConditionalRouting/>
    </Router>
  );
}
const ConditionalRouting = () => {
  const {userRole} = useSelector(state=>state.user)
  if (userRole === 'user') {
    return <UserScreen/>
  } else if (userRole === 'admin') {
    return <AdminScreen />
  } else {
    return <AuthScreen />
  }
}

function UserScreen() {
  return (
      <Routes>
        <Route exact path='/' element={<UserDashboard/>}></Route>
        <Route exact path='/orders' element={<Orders/>}></Route>
        <Route exact path='/ordersList' element={<OrdersList/>}></Route>
       
      </Routes>
   
  );
}
function AdminScreen() {
  return (
    
      <Routes>
        <Route exact path='/' element={<AdminDashboard/>}></Route>

      </Routes>

  );
}
function AuthScreen() {
  return (
   
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      </Routes>
    
  );
}

export default App;