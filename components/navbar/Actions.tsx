import Row from "../Row";
import styles from '../../styles/navbar.module.css'
import Action from './Action'
import Search from '../../public/search-w.png'
import LoginMenu from '../navbar/Login'
import RegisterMenu from '../navbar/Register'
import SearchMenu from '../navbar/Search'

const NavActions = () => (
    <Row style={{ cName: 'actions', sheet: styles }}>
        <Action 
            label="Login" 
            style={{ cName: 'login', sheet: styles }}>
                {<>{LoginMenu}</>}
            </Action>
        <Action 
            label="Register" 
            style={{ cName: 'register', sheet: styles }}>
                {<>{LoginMenu}</>}
            </Action>
        <Action 
            label="Search" 
            style={{ cName: 'search', sheet: styles }}
            img={Search}>
                {<>{LoginMenu}</>}
            </Action>
    </Row>
)

export default NavActions;