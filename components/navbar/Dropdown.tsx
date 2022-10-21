import { ReactNode, useState } from "react";
import { NavbarLinkProps } from "../../interfaces/navbar";
import Column from "../Column";
import Row from "../Row";
import NavLink from "./Link";
import Image from 'next/image'
import styles from '../../styles/navbar.module.css'
import Caret from '../../public/caret-down-w.png'

type DropdownProps = {
    link: NavbarLinkProps,
    dContent: ReactNode
}

const NavDropdown = ({ link, dContent }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const { label, img, href } = link;
    function handleClick() { setOpen(!open); }
    return <Row style={{ cName: 'link-dropdown', sheet: styles }}>
        <Row style={{ cName: 'link-action', sheet: styles }}>
            <NavLink label={label} img={img} href={href} />
            <Image src={Caret} alt="Caret" onClick={handleClick} layout="fixed" width={16} height={16} />
        </Row>
        {open && 
        <Column style={{ cName: "link-dropdown-c", sheet: styles }}>
            {dContent}
        </Column>}
    </Row>
}

export default NavDropdown;