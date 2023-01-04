import { ThemeContext } from '../../../../context/ThemeProvider'
import Caret from '../../../../public/caret-down-w.webp'
import Image from "next/image";
import { HexToRgba } from '../../../../util/converters/RGB';
import HoverableComponent from '../../../styled/HoverableComponent';
import styles from '../../../../styles/navbar.module.css'

type Props = {
    onClick: Function,
    id: number
}

const NavDropdownButton = ({ onClick, id }: Props) => {

    return (
        <ThemeContext.Consumer>
            {value => {
                return (
                    <HoverableComponent 
                    style={{
                        componentClass: {
                            name: 'nav-dropdown-button',
                            src: styles
                        },
                        state: {
                            active: {
                                backgroundColor: HexToRgba(value.secondary, 0.25)
                            },
                            fallback: {}
                        }
                    }}>
                        <button onClick={() => onClick(id)}>
                            <Image 
                                src={Caret}
                                alt="Caret"
                                width={13}
                                height={13}
                                layout="fixed"
                            />
                        </button>
                    </HoverableComponent>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default NavDropdownButton;