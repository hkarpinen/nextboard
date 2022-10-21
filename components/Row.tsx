import React, { ReactNode } from "react";
import StyleProps from '../interfaces/style'
import Container from '../components/Container';

type Props = {
    children: ReactNode,
    style: StyleProps
}

const Row = ({ children, style }: Props) => (
    <Container style={style} inline={{ display: "flex", flexDirection: "row"}}>
        {children}
    </Container>
)

export default Row;