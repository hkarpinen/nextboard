import { ReactNode } from "react";
import styles from '../../../styles/navbar.module.css'
import { HexToRgba } from "../../../util/converters/RGB";
import { ThemeContext } from '../../../context/ThemeProvider'
import Column from "../../layout/Column";
import Row from "../../layout/Row";
import ThemedComponent from "../../styled/ThemedComponent";

type Props = {
    label: string,
    children: ReactNode,
    handler: {
        selected: number,
        id: number,
        onClick: Function
    }
}

const NavAction = ({ label, children, handler }: Props) => {
    const { id, selected, onClick } = handler;
    return (
        <ThemeContext.Consumer>
            {value => {
                const isSelected = (id === selected);
                return (
                    <li>
                        <Row 
                        style={{
                            componentClass: {
                                name: 'nav-action',
                                src: styles
                            },
                            inline: {
                                backgroundColor: HexToRgba(value.secondary, 0.2)
                            }
                        }}>
                            <button onClick={() => onClick(id)}>
                                {label}
                            </button>
                            {isSelected && <Column style={{
                                componentClass: {
                                    name: 'nav-action-content',
                                    src: styles
                                },
                                inline: {
                                    backgroundColor: HexToRgba(value.tertiary, 0.2)
                                }
                            }}>
                                {children}
                            </Column>}
                        </Row>
                    </li>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default NavAction;