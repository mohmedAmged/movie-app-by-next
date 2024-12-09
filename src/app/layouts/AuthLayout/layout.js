import React from 'react'
import MyNavbar from '../../components/navbar/MyNavbar'
export default function AuthLayout({children}) {
  return (
    <div>
        <MyNavbar />
        {children}
    </div>
  )
}
