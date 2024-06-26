import Home from './pages/Home.page';
import Cart from './pages/Cart.page';
import SignIn from './pages/SignIn.page';
import SignUp from './pages/SignUp.page';
import Browse from './pages/Browse.page';
import TrackOrder from './pages/TrackOrder.page';
import Restaurants from './pages/Restaurants.page';
import Navbar from './components/Navbar.components';
import OrderHistory from './pages/OrderHistory.page';
import AdminAllOrders from './pages/AdminAllOrders.page';
import AdminViewOrder from './pages/AdminViewOrder.page';
import RestaurantDetails from './pages/RestaurantDetails.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentProtectedRoute from './components/auth/StudentProtectedRoute.components';
import AdminProtectedRoute from './components/auth/AdminProtectedRoute.components';
import FreeProtectedRoute from './components/auth/FreeProtectedRoute.components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>

        <Route element={<FreeProtectedRoute />}>
            <Route path='/' element={ <Home /> }/>
            <Route path="/browse" element={<Browse />} />
            <Route path="/auth/login" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} />
        </Route>

        <Route element={<StudentProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/trackorder" element={<TrackOrder />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
        </Route>

        <Route element={<AdminProtectedRoute />}>
            <Route path="/admin/allorders" element={<AdminAllOrders />} />
            <Route path="/admin/vieworder/:orderId" element={<AdminViewOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
