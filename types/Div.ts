import { CSSProperties, MutableRefObject, ReactNode } from "react";

export type StyleSheet = {
    readonly [key: string]: string;
}

export interface DivProps {
    className: string,
    src: StyleSheet
}

export interface ComponentClass {
    name: string,
    src: StyleSheet
}

export interface ComponentStyle {
    componentClass: ComponentClass,
    id?: string,
    inline?: CSSProperties
}

export interface BaseComponent {
    style: ComponentStyle,
    componentRef?: MutableRefObject<null>,
    children: ReactNode
}