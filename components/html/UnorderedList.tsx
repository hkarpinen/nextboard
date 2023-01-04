import { BaseComponent } from "../../types/Div";

const UnorderedList = ({
    children,
    style,
    componentRef
}: BaseComponent) => {
    const { componentClass, id, inline } = style;
    const { name, src } = componentClass;
    return (
        <ul 
        style={inline}
        ref={componentRef}
        className={src[name]}>
            {children}
        </ul>
    )
}

export default UnorderedList;