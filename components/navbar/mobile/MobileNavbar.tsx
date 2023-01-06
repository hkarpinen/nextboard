import Navbar from "../Navbar"
import NavActions from "../action/NavActions"
import MobileSidebar from "./Sidebar"

const MobileNavbar = () => {
    return <Navbar content={{
        leftNode: <MobileSidebar />,
        rightNode: <NavActions />
    }} />
}

export default MobileNavbar;