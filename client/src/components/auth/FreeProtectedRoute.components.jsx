import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const FreeProtectedRoute = () => {
    const userInfo = useSelector(state => state.user)
    const isLoggedIn = Boolean(userInfo)
    
    if(isLoggedIn && userInfo.type === "admin") {
        return <Navigate to="admin/allorders" />
    } else {
        return <Outlet/>
    }
}

export default FreeProtectedRoute