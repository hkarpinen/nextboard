import React from "react";
import { BaseComponent, DivProps } from "../../types/Div";

const Div = ({ 
    style, 
    componentRef, 
    children 
}: BaseComponent) => {
    const { componentClass, id, inline } = style;
    const { src, name } = componentClass;
    
    return (
        <div
            id={id}
            ref={componentRef}
            className={src[name]}
            style={inline}>
                {children}
        </div>
    )
}

export default Div;