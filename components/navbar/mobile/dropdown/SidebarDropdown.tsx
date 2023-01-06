import { StaticImageData } from "next/image"
import { useToggle } from "usehooks-ts"
import { ThemeContext } from "../../../../context/ThemeProvider"
import { NavDropdownItem } from "../../../../types/Nav"
import HoverableComponent from "../../../styled/HoverableComponent"

type Props = {
    link: {
        label: string,
        img: StaticImageData,
        href: string
    },
    items: NavDropdownItem[],
    handler: {
        selected: number,
        id: number,
        onClick: Function
    }
}

const SidebarDropdown = ({
    link,
    items,
    handler
}: Props) => {
    const { label, img, href } = link;
    const { id, selected, onClick } = handler;
    const [value, toggle, setValue] = useToggle();

    return (
        <ThemeContext.Consumer>
            {value => {
                return (
                    <div>Penis</div>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default SidebarDropdown;