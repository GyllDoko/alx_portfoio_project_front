import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import ProductListScreen from './pages/ProductListScreen'
import { Persistor, Store } from './redux/store'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfileSreen from './pages/ProfileSreen'
import EditProfileScreen from './pages/EditProfileScreen'
import OrderScreen from './pages/OrderScreen'
import CheckoutScreen from './pages/CheckoutScreen'
import DetailScreen from './pages/DetailScreen'
import HelpScreen from './pages/HelpScreen'
import CartScreen from './pages/CartScreen'
import Category from './pages/Category'
import { Error404 } from './pages/404'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage'

export default function App() {
  const currentState = Store.getState()
  useEffect(() => {
    if (currentState.user.currentUser == null) {
      <Navigate to='/login' />
    }
  }, [currentState.user])
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<ProductListScreen />} />

            <Route path="profile" element={<ProfileSreen />} />
            <Route path="edit_profile" element={<EditProfileScreen />} />
            <Route path="orders" element={<OrderScreen />} />
            <Route path="checkout" element={<CheckoutScreen />} />
            <Route path="details" element={<DetailScreen />} />
            <Route path="help" element={<HelpScreen />} />
            <Route path="cart" element={<CartScreen />} />
            <Route path="category" element={<Category />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Routes>


        </BrowserRouter>
      </PersistGate>
    </Provider>

  )
}
