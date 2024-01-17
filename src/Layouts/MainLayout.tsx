import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.tsx'

const MainLayout: React.FC = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default MainLayout