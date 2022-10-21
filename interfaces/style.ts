export type StyleSheet = {
    readonly [key: string]: string;
}

export default interface StyleProps {
    cName: string,
    sheet: StyleSheet
}