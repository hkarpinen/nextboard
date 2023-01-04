import { StaticImageData } from "next/image";
import { NavDropdownItem } from '../../../../types/Nav'
import styles from '../../../../styles/navbar.module.css'
import { ThemeContext } from "../../../../context/ThemeProvider";
import { HexToRgba } from "../../../../util/converters/RGB";
import NavDropdownContent from "./NavDropdownContent";
import NavDropdownHeader from "./NavDropdownHeader";
import HoverableComponent from "../../../styled/HoverableComponent";

type Props = {
    link: {
        label: string,
        img: StaticImageData,
        href: string
    },
    items: NavDropdownItem[],
    handler: {
        selected: number,
        id: number,
        onClick: Function
    }
}

const NavDropdown = ({ link, items, handler }: Props) => {
    const { label, img, href } = link;
    const { id, selected, onClick } = handler;

    return (
        <ThemeContext.Consumer>
            {value => {
                const isSelected = (id === selected);
                return (
                    <HoverableComponent 
                    style={{
                        componentClass: {
                            name: 'nav-dropdown',
                            src: styles
                        },
                        state: {
                            active: {
                                backgroundColor: HexToRgba(value.secondary, 0.2)
                            },
                            fallback: {}
                        }
                    }}>
                        <NavDropdownHeader 
                            link={{
                                label: label,
                                img: img,
                                href: href
                            }}
                            handler={{
                                onClick: onClick,
                                id: id
                            }}
                        />
                        {isSelected && <NavDropdownContent 
                            label={label}
                            items={items}
                        />}
                    </HoverableComponent>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default NavDropdown; 