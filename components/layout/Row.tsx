import React, { CSSProperties, MutableRefObject, ReactNode } from "react";
import Container from '../html/Div';
import { BaseComponent } from "../../types/Div";

const DefaultInline: CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}

const Row = ({ 
    style, 
    componentRef, 
    children 
}: BaseComponent) => {
    const { componentClass, id, inline } = style;
    const { name, src } = componentClass;
    return (
        <Container 
            style={{
                componentClass: {
                    name: name,
                    src: src
                },
                id: id,
                inline: { ...DefaultInline, ...inline }
            }}
            componentRef={componentRef}>
                {children}
        </Container>
    )
}

export default Row;