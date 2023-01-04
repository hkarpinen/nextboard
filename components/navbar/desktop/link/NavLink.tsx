import styles from '../../../../styles/navbar.module.css'
import { StaticImageData } from "next/image";
import Image from 'next/image'
import { ThemeContext } from '../../../../context/ThemeProvider'
import { HexToRgba } from '../../../../util/converters/RGB'
import HoverableComponent from '../../../styled/HoverableComponent';

type Props = {
    label: string,
    imgSrc: StaticImageData,
    url: string
}

const NavLink = ({ label, imgSrc, url }: Props) => {  
    return (
        <ThemeContext.Consumer>
            {value => {
                return (
                    <HoverableComponent 
                    style={{
                        componentClass: {
                            name: 'nav-link',
                            src: styles
                        },
                        state: {
                            active: {
                                backgroundColor: HexToRgba(value.secondary, 0.25) 
                            },
                            fallback: {}
                        }
                    }}>
                        <Image
                            src={imgSrc}
                            alt={label}
                            width={24}
                            height={24}
                            layout="fixed"
                        />
                        <a href={url}>{label}</a>
                    </HoverableComponent>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default NavLink;