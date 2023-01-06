import Image from "next/image"
import Menu from '../../../public/menu_w.webp'
import Row from "../../layout/Row";
import styles from '../../../styles/navbar.module.css'
import BrandLogo from '../../../public/brand-logo.webp'
import Column from "../../layout/Column";
import { useToggle } from "usehooks-ts";

const MobileSidebar = () => {
    return <Column style={{
        componentClass: {
            name: 'mobile-sidebar',
            src: styles
        }
    }}>
        
        <Image
            src={BrandLogo}
            alt="Coreforum"
            width={130}
            height={14}
            layout="fixed"
        />
    </Column>
}

export default MobileSidebar;