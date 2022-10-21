import { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import StyleProps from "../../interfaces/style";
import Row from "../Row";
import styles from '../../styles/navbar.module.css'
import Image from 'next/image'

type ActionProps = {
    label?: string,
    img?: StaticImageData
    children: ReactNode,
    style: StyleProps
}

const NavAction = ({ label, img, children, style }: ActionProps) => {
    const [open, setOpen] = useState(false);
    function handleClick() { setOpen(!open); }
    return <Row style={{ cName: 'action', sheet: styles }}>
        <Row style={style}>
            {(img !== undefined) && 
            <Image 
                src={img} 
                width={24} 
                height={24} 
                layout="fixed" 
                onClick={handleClick} 
                priority={true} />}
            {label && <button onClick={handleClick}>{label}</button>}
        </Row>
        {open &&
        <Row style={{ cName: 'action-dropdown', sheet: styles }}>
            {children}
        </Row>}
    </Row>
}

export default NavAction;