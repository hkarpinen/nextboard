import Navbar from "../Navbar";
import NavLinks from './link/NavLinks'
import NavActions from "../action/NavActions";

const DesktopNavbar = () => {
    return <Navbar content={{
        leftNode: <NavLinks />,
        rightNode: <NavActions />
    }} />
}

export default DesktopNavbar;