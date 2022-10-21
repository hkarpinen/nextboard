import React, { ReactNode } from "react";
import StyleProps from '../interfaces/style'
import type { CSSProperties } from "react";

type Props = {
    children?: ReactNode,
    style: StyleProps,
    inline?: CSSProperties,
    id?: string
}

const Container = ({ children, style, inline }: Props) => (
    <div
        className={style.sheet[style.cName]}
        style={inline}>
            {children}
    </div>
)

export default Container;