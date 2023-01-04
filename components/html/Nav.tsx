import { CSSProperties } from "react";
import { BaseComponent } from "../../types/Div";

const Nav = ({
    style,
    componentRef,
    children
}: BaseComponent) => {
    const { componentClass, id, inline } = style;
    const { src, name } = componentClass;

    const DefaultInline: CSSProperties = {
        display: 'flex'
    }

    const Style = { ...inline, ...DefaultInline };

    return (
        <nav
        id={id}
        ref={componentRef}
        className={src[name]}
        style={Style}>
            {children}
        </nav>
    )
}

export default Nav;