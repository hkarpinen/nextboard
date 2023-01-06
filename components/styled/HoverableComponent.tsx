import { CSSProperties, ReactNode, useRef } from "react";
import useHoverEvent from "../../hooks/useHoverEvent";
import { ComponentClass, ComponentStyle, DivProps } from "../../types/Div";
import Div from "../html/Div";

type PropsV2 = {
    style: {
        componentClass: ComponentClass,
        state: {
            active: CSSProperties,
            fallback: CSSProperties
        }
    }
    children: ReactNode
}

const HoverableComponent = ({ style, children }: PropsV2) => {
    const { componentClass, state } = style;
    const { name, src } = componentClass;
    const { active , fallback } = state;
    
    // Create component ref.
    const ref = useRef(null);

    // Use hover event and return the state.
    const isHovered = useHoverEvent(ref);

    return (
        <Div 
            style={{
                componentClass: {
                    name: name,
                    src: src
                },
                inline: isHovered ? active : fallback
            }}
            componentRef={ref}>
                {children}
        </Div>
    )
}

export default HoverableComponent;