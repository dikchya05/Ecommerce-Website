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
import Items from './containers/Admin/items'
import ItemsList from "./containers/Admin/itemsList";
import { useSelector, useDispatch } from 'react-redux'
import AdminDashboard from "./containers/Admin/admin";
import ChangePassword from "./containers/registration/changepassword";
// import Items from "../../Server/src/models/items";

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
        <Route exact path='/changepassword' element={<ChangePassword/>}></Route>

       
      </Routes>
   
  );
}
function AdminScreen() {
  return (
    
      <Routes>
        <Route exact path='/' element={<AdminDashboard/>}></Route>
        <Route exact path='/items' element={<Items/>}></Route>
        <Route exact path='/itemsList' element={<ItemsList/>}></Route>
        <Route exact path='/changepassword' element={<ChangePassword/>}></Route>


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
