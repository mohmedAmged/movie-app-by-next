import React from 'react'
import MyNavbar from '../../components/navbar/MyNavbar'
import MyFooter from '../../components/footer/MyFooter'

export default function MasterLayout({children}) {
  return (
    <div>
        <MyNavbar />
        {children}
        <MyFooter/>
    </div>
  )
}
