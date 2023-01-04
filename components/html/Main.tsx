import { CSSProperties } from "react";
import { BaseComponent } from "../../types/Div";

const Main = ({
    style,
    componentRef,
    children
}: BaseComponent) => {
    const { componentClass, id, inline } = style;
    const { src, name } = componentClass;

    const DefaultInline: CSSProperties = {
        display: 'flex',
        flexDirection: 'column'
    }

    const Style = { ...inline, ...DefaultInline };

    return (
        <main
        id={id}
        ref={componentRef}
        className={src[name]}
        style={Style}>
            {children}
        </main>
    )
}

export default Main;