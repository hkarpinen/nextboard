import { BaseComponent } from "../../types/Div";

type Props = BaseComponent & {
    href: string
}

const Anchor = ({ style, componentRef, children, href }: Props) => {
    const { componentClass, id, inline } = style;
    const { src, name } = componentClass;

    return (
        <a 
        ref={componentRef}
        style={inline}
        href={href}
        className={src[name]}>
            {children}
        </a>
    )
}

export default Anchor;