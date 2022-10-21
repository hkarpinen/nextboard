import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Row from "../Row";
import styles from '../../styles/navbar.module.css'

type LinkProps = {
    label: string,
    img: StaticImageData,
    href: string
}

const NavLink = ({ label, img, href }: LinkProps) => (
    <Row style={{ cName: 'link', sheet: styles }}>
        <Image src={img} alt={label} width={24} height={24} layout="fixed"/>
        <Link href={href}>{label}</Link>
    </Row>
)

export default NavLink;