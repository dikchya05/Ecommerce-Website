
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { useSelector } from "react-redux"
import Navigation from '../../components/navigation/navigation';
import Logo from '../../images/front.jpeg'

const AdminDashboard = () => {
    const { fullName } = useSelector(state => state.user)
    return (
        <div className="admin_dashboard">

            <div className="logo"><img src={Logo} alt="" /></div>
            <h1>Welcome, {fullName}</h1>
            <Navigation />

        </div>




    )
}
export default AdminDashboard