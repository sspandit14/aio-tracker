import { Outlet } from "react-router"

import Navbar from "./Navbar"
import Footer from "./Footer"
import ResetScroll from "./ResetScroll"

export default function SiteLayout() {
    return(
        <>
            <ResetScroll />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}