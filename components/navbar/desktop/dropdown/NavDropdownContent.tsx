import { NavDropdownItem } from "../../../../types/Nav";
import UnorderedList from "../../../html/UnorderedList";
import styles from '../../../../styles/navbar.module.css'
import NavDropdownContentItem from "./NavDropdownContentItem";
import { ThemeContext } from '../../../../context/ThemeProvider'
import { HexToRgba } from "../../../../util/converters/RGB";

type Props = {
    label: string
    items: NavDropdownItem[]
}

const NavDropdownContent = ({ label, items }: Props) => {
    return (
        <ThemeContext.Consumer>
            {value => {
                return (
                    <UnorderedList 
                    style={{
                        componentClass: {
                            name: 'nav-dropdown-content',
                            src: styles
                        },
                        inline: {
                            backgroundColor: HexToRgba('#FFFFFF', 1)
                        }
                    }}>
                        {items.map((item, index) => (
                            <NavDropdownContentItem
                                label={item.label}
                                href={item.url} 
                                key={`nav-dropdown-${label}-href-${index}`}
                            />
                        ))}
                    </UnorderedList>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default NavDropdownContent;