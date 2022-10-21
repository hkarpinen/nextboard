import Row from "../Row";
import { ForumMenus } from "../../lib/navbar";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Actions from "./Actions";
import Logo from '../../public/brand-logo.png'
import styles from '../../styles/navbar.module.css'
import NavLink from "./Link";

const Desktop = () => {
    return (
        <Row style={{ cName: 'desktop', sheet: styles }}>
            <Row style={{ cName: 'nav', sheet: styles}}>
                <Image src={Logo} alt="Nextboard" width={137} height={30} layout="fixed" priority />
                <Row style={{ cName: 'links', sheet: styles }}>
                    {ForumMenus.map((menu) => {
                        const { label, img, href } = menu;
                        const key = label + "_nav_menu";
                        if(menu.items) {
                            const { items } = menu;
                            return <Dropdown key={key} link={{
                                label: label,
                                img: img,
                                href: href
                            }} dContent={items.map((item) => {
                                const itemKey = key + "_href_" + label;
                                return <a href={item.href} key={itemKey}>{item.label}</a>
                            })} />
                        } else {
                            return <NavLink label={label} img={img} href={href} />
                        }
                    })}
                </Row>
            </Row>
            <Actions />
        </Row>
    )
}

export default Desktop;