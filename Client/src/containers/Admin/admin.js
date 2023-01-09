
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { useSelector } from "react-redux"
import Navigation from '../../components/navigation/navigation';
import Logo from '../../images/front.jpeg'
import Orders from './orders';
import OrdersList from './ordersList';


const AdminDashboard = () => {
    const {fullName} = useSelector(state => state.user)
    return (
        <div className="admin_dashboard">
           
            <Navigation />
            <h1>Welcome, {fullName}</h1>
   

        </div>




    )
}
export default AdminDashboard