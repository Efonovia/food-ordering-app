import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const AdminProtectedRoute = () => {
    const userInfo = useSelector(state => state.user)
    const isLoggedIn = Boolean(userInfo)
    const authorized = isLoggedIn && (userInfo.type === "admin")
    
    if(!isLoggedIn || (isLoggedIn && userInfo.type === "student")) {
        return <Navigate to="/" />
    } else if(authorized) {
        return <Outlet/>
    }
}

export default AdminProtectedRoute