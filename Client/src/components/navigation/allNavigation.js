import {useSelector} from 'react-redux'
import AdminNavigation from './adminNavigation'
import UserNavigation from './userNavigation'

const AllNavigation =()=>{
    const {userRole} = useSelector(state=> state.user)
    return(
<>
{userRole === 'admin' ? <AdminNavigation/> : null }
{userRole === 'user' ? <UserNavigation/> : null }

</>
    )
}
export default AllNavigation