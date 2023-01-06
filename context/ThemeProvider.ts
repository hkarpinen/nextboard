                                                                                                                                                                                                                                                                                                                                                                                    import { createContext } from "react";

// Gray & Teal Theme.
export const ThemeOne = {
    primary: '#202022',
    secondary: '#878787',
    tertiary: '#CACACA',
    quaternary: '#00BBC9',
    quinary: '#00747C'
}

export const ThemeTwo = {
    primary: '#002333',
    secondary: '#159A9C',
    tertiary: '#B4BEC9',
    quaternary: '#DEEFE7',
    quinary: '#FFFFFF'
}

export const ThemeThree = {
    primary: '#2A3D5E',
    secondary: '#4D6EAB',
    tertiary: '#5A6478',
    quaternary: '#808FAB',
    quinary: '#6F9FF7'
}

const SiteThemePaletteBase = {
    light: {
        backgroundColor: '#FFFFFF'
    }
}

interface SiteTheme {
    base: {
        backgroundColor: string,
        color: string
    },
    color: {
        primary: string,
        secondary: string,
        tertiary: string,
        quaternary: string,
        quinary: string
    }
}

const SiteFour: SiteTheme = {
    base: {
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF'
    },
    color: {
        primary: '#202022',
        secondary: '#878787',
        tertiary: '#CACACA',
        quaternary: '#00BBC9',
        quinary: '#00747C'
    }
}

export const ThemeContext = createContext(ThemeOne);
