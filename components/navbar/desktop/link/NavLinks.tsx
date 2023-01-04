import useManagedDropdowns from "../../../../hooks/useManagedDropdowns";
import { NavLinkData } from '../../../../util/data/Navbar';
import styles from '../../../../styles/navbar.module.css'
import NavDropdown from '../../desktop/dropdown/NavDropdown';
import NavLink from './NavLink';
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import UnorderedList from "../../../html/UnorderedList";
import BrandLogo from '../../../../public/brand-logo.webp'
import Image from "next/image";
import Nav from "../../../html/Nav";

const NavLinks = () => {
    const ref = useRef(null);
    const [ selected, changeSelection ] = useManagedDropdowns();
    const { links, dropdowns } = NavLinkData;

    // Set the selected dropdown to -1 (none) when a user clicks outside of nav-links.
    useOnClickOutside(ref, () => {
        changeSelection(-1);
    });

    return (
        <Nav style={{
            componentClass: {
                name: 'nav-links',
                src: styles
            }
        }}>
            <Image
                src={BrandLogo}
                alt={"Logo"}
                width={130}
                height={14}
                layout="fixed"
            />
            <UnorderedList 
            componentRef={ref}
            style={{
                componentClass: {
                    name: 'nav-links-items',
                    src: styles
                }
            }}>
                {links.map((link) => {
                    const { label, imgSrc, url } = link;
                    return <li key={`nav-link-${label}`}>
                        <NavLink 
                        label={label}
                        imgSrc={imgSrc}
                        url={url}
                        />
                    </li>
                })}
                {dropdowns.map((dropdown, index) => {
                    const { label, imgSrc, url, items } = dropdown;
                    return <li key={`nav-dropdown-${label}`}>
                        <NavDropdown 
                        link={{
                            label: label,
                            img: imgSrc,
                            href: url
                        }}
                        items={items}
                        handler={{
                            selected: selected,
                            id: index,
                            onClick: changeSelection
                        }}
                        />
                    </li>
                })}
            </UnorderedList>
        </Nav>
    )
}

export default NavLinks;