import React from "react";
import Row from "./Row";
import UnorderedList from '../html/UnorderedList'
import styles from '../../styles/layout.module.css'
import { ThemeContext } from "../../context/ThemeProvider";
import { HexToRgba } from "../../util/converters/RGB";
import useRoute from "../../hooks/useRoute";
import HoverableComponent from "../styled/HoverableComponent";

const SiteBreadcrumb = () => {
    const breadcrumbs = useRoute();
    return (
        <ThemeContext.Consumer>
            {value => {
                return (
                    <UnorderedList style={{
                        componentClass: {
                            name: 'site-nav-breadcrumb',
                            src: styles
                        },
                        inline: {
                            backgroundColor: HexToRgba(value.primary, 1.0)
                        }
                    }}>
                        {breadcrumbs.map((crumb, index) => {
                            const { breadcrumb, href } = crumb;
                            let str = breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1);
                            return (
                                <>
                                    <li>
                                        <HoverableComponent style={{
                                            componentClass: {
                                                name: 'breadcrumb',
                                                src: styles
                                            },
                                            state: {
                                                active: {
                                                    color: value.quaternary
                                                },
                                                fallback: {}
                                            }
                                        }}>
                                            <a href={href}>{str}</a>
                                        </HoverableComponent>
                                    </li>
                                    { ( breadcrumbs.length > 1 && index !== breadcrumbs.length - 1 ) && <li>{'>'}</li> }
                                </>
                            )
                        })}
                    </UnorderedList>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default SiteBreadcrumb;