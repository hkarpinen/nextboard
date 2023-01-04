import { CSSProperties } from "react";
import { BaseComponent } from "../../types/Div";

const Section = ({
    style,
    componentRef,
    children
}: BaseComponent) => {
    const { componentClass, id, inline } = style;
    const { src, name } = componentClass;

    // Default CSS for a section. 
    const DefaultInline: CSSProperties = {
        display: 'flex'
    }

    // Concatenated @prop inline and Default component styling.
    const Style = {...inline, ...DefaultInline };

    return (
        <section
        id={id}
        ref={componentRef}
        className={src[name]}
        style={Style}>
            {children}
        </section>
    )
}

export default Section;