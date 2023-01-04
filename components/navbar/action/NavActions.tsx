import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useManagedDropdowns from "../../../hooks/useManagedDropdowns";
import UnorderedList from "../../html/UnorderedList";
import styles from '../../../styles/navbar.module.css'
import NavAction from "./NavAction";

const NavActions = () => {
    const [ selected, changeSelection ] = useManagedDropdowns();
    const ref = useRef(null);

    useOnClickOutside(ref, () => {
        changeSelection(-1);
    })

    return (
        <UnorderedList 
        componentRef={ref}
        style={{
            componentClass: {
                name: 'nav-actions',
                src: styles
            }
        }}>
            <NavAction 
            label="Login"
            handler={{
                selected: selected,
                id: 1,
                onClick: changeSelection
            }}>Login</NavAction>
            <NavAction
            label="Register"
            handler={{
                selected: selected,
                id: 2,
                onClick: changeSelection
            }}>Register</NavAction>
            <NavAction
            label="Search"
            handler={{
                selected: selected,
                id: 3,
                onClick: changeSelection
            }}>Search</NavAction>
        </UnorderedList>
    )
}

export default NavActions;