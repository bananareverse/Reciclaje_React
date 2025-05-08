import { Outlet, useLocation } from "react-router-dom"
import { NavBar } from "../shared/Navbar"
import { Footer } from "../shared/Footer"
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";

export const RootLayout = () => {
    const {pathname} = useLocation();
    console.log(pathname)

    return (
        <div>
            <NavBar />
            {pathname === '/' && <Banner />}
            <main className="container my-8"><Outlet /></main>
            
            {pathname === '/' && <Newsletter />}
            <Footer />
        </div>
              
    )
}