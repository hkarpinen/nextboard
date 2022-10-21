import Row from "../Row"
import Image from "next/image"
import Menu from '../../public/menu_w.png'
import Logo from '../../public/brand-logo.png'
import styles from '../../styles/navbar.module.css'
import Actions from "./Actions"

// Mobile layout for navbar component.
const Mobile = () => {
    return (
        <Row style={{ cName: 'mobile', sheet: styles }}>
            <Row style={{ cName: 'nav', sheet: styles }}>
                <Row style={{ cName: 'sidebar', sheet: styles }}>
                    <Image 
                        src={Menu} 
                        alt="menu" 
                        width={24} 
                        height={24} 
                        layout="fixed" 
                        priority={true} />
                </Row>
                <Image 
                    src={Logo} 
                    alt="Nextboard" 
                    width={137} height={30} 
                    layout="fixed" 
                    priority={true} />
            </Row>
            <Actions />
        </Row>
    )
}

export default Mobile;