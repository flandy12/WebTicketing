
import NavbarClient from './navbar_client'
 
export default function Layout({ children }) {
  return (
    <>
      <NavbarClient />
      <main>{children}</main>
    </>
)}