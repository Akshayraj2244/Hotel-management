import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../../Includes/Landingpage/Header'
import { HeaderFilter } from '../Landingpage/HeaderFilter'
import Landingpage from '../Landingpage/Landingpage'
import { ListPage } from '../Landingpage/ListPage'

const AppRouter = () => {
  return (
    <>
     <Router>
      <Header />
        <Routes>
            <Route path='/' element={<Landingpage/>} />
            <Route path='/' element={<HeaderFilter />} />
            <Route path='/:id/' element={<ListPage />} />

        </Routes>
    </Router> 

    </>
  )
}

export default AppRouter
