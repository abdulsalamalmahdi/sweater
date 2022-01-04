import Navbar from './navbar'
import Footer from './footer'
import SideBar from './SideBar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <SideBar></SideBar>
      <Footer />
    </>
  )
}