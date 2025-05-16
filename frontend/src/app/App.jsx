import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from '@/pages/blog/home/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App