import React, { ReactNode } from "react"
import styles from '../styles/layout.module.css'
import Column from "./Column";
import Row from "./Row";
import useWindowDimensions from '../hooks/useWindowDimension'
import Desktop from '../components/navbar/Desktop'
import Mobile from "../components/navbar/Mobile";
import Head from "next/head";

type Props = {
    title: string,
    children?: ReactNode
}


export default function Layout ({ title, children }: Props) {
    const { width } = useWindowDimensions();
    var useMobileLayout: boolean = false;
    if(width != undefined) {
        useMobileLayout = width <= 768;
    }

    return (
        <Column style={{ cName: 'app', sheet: styles }}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A fast and flexible forum board." />
                <meta name="keywords" content="Blog, Post, Thread, Forum, Board, Community, Group"/>
                <meta name="author" content="kuolintoive" />
            </Head>
            <Row style={{ cName: 'top-node', sheet: styles }}>
                {useMobileLayout && <Mobile />}
                {!useMobileLayout && <Desktop />}
            </Row>
            <Row style={{ cName: 'bottom-node', sheet: styles }}>
                {children}
            </Row>
        </Column>
    )
}