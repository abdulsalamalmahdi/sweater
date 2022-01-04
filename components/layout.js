import Navbar from './navbar'
import Footer from './footer'
import SideBar from './SideBar'
import { useState } from 'react';



export default function Layout({ children }) {

 
  return (
   <>
     <SideBar></SideBar>
   
      <Navbar />
      <main>{children}</main>
      
      <Footer />
   </>
    
    

  )
}