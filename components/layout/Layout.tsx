import React, { ReactNode } from "react"
import styles from '../../styles/layout.module.css'
import Column from "./Column";
import Row from "./Row";
import useWindowDimensions from '../../hooks/useWindowDimension'
import Head from "next/head";
import DesktopNavbar from "../navbar/desktop/DesktopNavbar";
import MobileNavbar from "../navbar/mobile/MobileNavbar";
import { ThemeContext, ThemeOne, ThemeThree, ThemeTwo } from '../../context/ThemeProvider'
import { HexToRgba } from '../../util/converters/RGB'
import Section from "../html/Section";
import Main from "../html/Main";
import SiteBreadcrumb from "./Breadcrumb";

type Props = {
    title: string,
    children?: ReactNode
}


export default function Layout ({ title, children }: Props) {
    const { width } = useWindowDimensions();
    var useMobileLayout: boolean = false;
    if(width != undefined) {
        useMobileLayout = width <= 1024;
    }

    return (
        <ThemeContext.Provider value={ThemeOne}>
            <ThemeContext.Consumer>
                {value => {
                    return (
                        <Main 
                            style={{
                                componentClass: {
                                    name: 'page-wrapper',
                                    src: styles
                                },
                                inline: {
                                    backgroundColor: HexToRgba(value.tertiary, 0.5)
                                }
                            }}>
                            <Head>
                                <title>{title}</title>
                                <meta charSet="utf-8" />
                                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                                <meta name="description" content="A fast and flexible forum board." />
                                <meta name="keywords" content="Blog, Post, Thread, Forum, Board, Community, Group"/>
                                <meta name="author" content="kuolintoive" />
                            </Head>
                            <Section
                                style={{
                                    componentClass: {
                                        name: 'page-navbar',
                                        src: styles
                                        },
                                        inline: {
                                            backgroundColor: value.primary
                                        }
                                    }}>
                                        <Row style={{
                                            componentClass: {
                                                name: 'page-navbar-inner',
                                                src: styles
                                            }
                                        }}>
                                            {useMobileLayout && <MobileNavbar />}
                                            {!useMobileLayout && <DesktopNavbar />}
                                        </Row>
                            </Section>
                            <Section
                                style={{
                                    componentClass: {
                                        name: 'page-body',
                                        src: styles
                                    },
                                    inline: {
                                        flexDirection: 'column'
                                    }
                                }}>
                                    <Column style={{
                                        componentClass: {
                                            name: 'page-body-inner',
                                            src: styles
                                        }
                                    }}>
                                        <SiteBreadcrumb />
                                        {children}
                                    </Column>
                            </Section>
                        </Main>
                    )
                }}
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
}