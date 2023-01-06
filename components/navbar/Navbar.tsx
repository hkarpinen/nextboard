import Row from "../layout/Row";
import styles from '../../styles/navbar.module.css'
import { ReactNode } from "react";

type Props = {
    content: {
        leftNode: ReactNode
        rightNode: ReactNode
    }
}

const Navbar = ({ content }: Props) => {
    return (
        <>
            <Row style={{
                componentClass: {
                    name: 'nav-content-left',
                    src: styles
                }
            }}>
                {content.leftNode}
            </Row>
            <Row style={{
                componentClass: {
                    name: 'nav-content-right',
                    src: styles
                }
            }}>
                {content.rightNode}
            </Row>
        </>
    )
}

export default Navbar;