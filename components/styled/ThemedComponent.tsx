import { ThemeContext } from "../../context/ThemeProvider";

interface Props {
    consumer: Function 
}

const ThemedComponent = ({
    consumer
}: Props) => {
    return (
        <ThemeContext.Consumer>
            { value => consumer(value) }
        </ThemeContext.Consumer>
    )
}

export default ThemedComponent;