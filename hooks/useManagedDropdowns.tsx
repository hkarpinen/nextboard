import { MutableRefObject, useState } from "react";

type ManagedDropdownsState = [
    number, Function
]

const useManagedDropdowns = (): ManagedDropdownsState => {
    const [selected, setSelected] = useState<number>(-1);
    const changeSelection = (id: number) => {
        id === selected ? setSelected(-1) : setSelected(id);
    }

    return [selected, changeSelection];
}

export default useManagedDropdowns;