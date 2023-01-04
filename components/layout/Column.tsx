import React, { CSSProperties, ReactNode } from "react";
import { BaseComponent } from "../../types/Div";
import Div from '../html/Div';

const DefaultInline: CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
}

const Column = ({ 
    style,
    componentRef,
    children
}: BaseComponent) => {
    const { componentClass, id, inline } = style;
    const { name, src } = componentClass;
    return (
        <Div
        style={{
            componentClass: {
                name: name,
                src: src
            },
            id: id,
            inline: {...DefaultInline, ...inline }
        }}
        componentRef={componentRef}>
            {children}
        </Div>
    )
}

export default Column;