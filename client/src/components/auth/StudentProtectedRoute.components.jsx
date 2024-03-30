import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const StudentProtectedRoute = () => {
    const userInfo = useSelector(state => state.user)
    const isLoggedIn = Boolean(userInfo)
    const authorized = isLoggedIn && (userInfo.type === "student")
    
    if(isLoggedIn && userInfo.type === "admin") {
        return <Navigate to="admin/allorders" />
    }
    return(
        authorized ? <Outlet/> : <Navigate to="/"/>
    )
}

export default StudentProtectedRoute