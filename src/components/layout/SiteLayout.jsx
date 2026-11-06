import { Outlet } from "react-router"

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function SiteLayout() {
    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}