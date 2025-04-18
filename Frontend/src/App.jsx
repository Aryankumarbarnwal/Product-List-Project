// import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import UpdateProduct from './components/UpdateProduct'

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route element={<PrivateComponent/>}>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/update/:id' element={<UpdateProduct/>}/>
            <Route path='/logout' element={<h1>LogOut</h1>}/>
            <Route path='/profile' element={<h1>Your Profile is Here</h1>}/>
            </Route>

            <Route path='/signup' element={<Signup/>}/>
            <Route path='/Login' element={<Login/>} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default App
