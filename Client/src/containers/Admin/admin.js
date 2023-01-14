
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { useSelector } from "react-redux"
import Navigation from '../../components/navigation/adminNavigation';
import Logo from '../../images/front.jpeg'
import item from './items';
import itemList from './itemsList';


const AdminDashboard = () => {
    const {fullName} = useSelector(state => state.user)
    return (
        <div className="admin_dashboard">
           
           
            <h1>Welcome, {fullName}</h1>
   

        </div>




    )
}
export default AdminDashboard