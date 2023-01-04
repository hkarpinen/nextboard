import Anchor from "../../../html/Anchor"
import styles from '../../../../styles/navbar.module.css'
import { useRef } from "react"
import useHoverEvent from "../../../../hooks/useHoverEvent"
import { ThemeContext } from '../../../../context/ThemeProvider'
import { HexToRgba } from "../../../../util/converters/RGB"

type Props = {
    label: string,
    href: string,
    key: string,
}

const NavDropdownContentItem = ({ label, href }: Props) => {
    const ref = useRef(null);
    const hovered = useHoverEvent(ref);

    return (
        <ThemeContext.Consumer>
            {value => {
                return (
                    <li ref={ref} style={hovered ? {
                        'backgroundColor': HexToRgba(value.secondary, 0.1),
                        'color': value.quaternary,
                        'borderLeft': `solid 2px ${value.quaternary}`
                    }: {
                        'color': value.primary
                    }}>
                        <Anchor 
                        style={{
                            componentClass: {
                                name: 'nav-dropdown-content-item',
                                src: styles
                            }
                        }}
                        href={href}>
                            {label}
                        </Anchor>
                    </li>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default NavDropdownContentItem;