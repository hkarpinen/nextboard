import Row from '../../../layout/Row'
import styles from '../../../../styles/navbar.module.css'
import { StaticImageData } from "next/image";
import NavLink from '../link/NavLink'
import NavDropdownButton from "./NavDropdownButton";

type Props = {
    link: {
        label: string,
        img: StaticImageData,
        href: string
    },
    handler: {
        onClick: Function,
        id: number
    }
}

const NavDropdownHeader = ({ link, handler }: Props) => {
    const { label, img, href } = link;
    const { id, onClick } = handler;
    
    return (
        <Row 
        style={{
            componentClass: {
                name: 'nav-dropdown-header',
                src: styles
            }
        }}>
            <NavLink
                label={label}
                imgSrc={img}
                url={href}
            />
            <NavDropdownButton 
                onClick={onClick}
                id={id}
            />
        </Row>
    )
}

export default NavDropdownHeader;