import { MutableRefObject } from "react";
import { useToggle, useEventListener } from "usehooks-ts";

const useHoverEvent = (ref : MutableRefObject<null>) => {
    const [value,, setValue] = useToggle();
    
    // Handlers for mouse enter/leave events.
    const onMouseEnter = () => {
        setValue(true);
    }
    const onMouseLeave = () => {
        setValue(false);
    }

    // Add event listeners for mouse enter/leave.
    useEventListener('mouseenter', onMouseEnter, ref);
    useEventListener('mouseleave', onMouseLeave, ref);

    return value;
}

export default useHoverEvent;