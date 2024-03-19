import Home from './pages/Home.page';
import Cart from './pages/Cart.page';
import SignIn from './pages/SignIn.page';
import SignUp from './pages/SignUp.page';
import Browse from './pages/Browse.page';
import Restaurants from './pages/Restaurants.page';
import Navbar from './components/Navbar.components';
import OrderHistory from './pages/OrderHistory.page';
import AdminAllOrders from './pages/AdminAllOrders.page';
import AdminViewOrder from './pages/AdminViewOrder.page';
import RestaurantDetails from './pages/RestaurantDetails.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={ <Home /> }/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/admin/allorders" element={<AdminAllOrders />} />
        <Route path="/admin/vieworder/:id" element={<AdminViewOrder />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
