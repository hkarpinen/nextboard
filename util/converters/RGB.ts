const componentToHex = (c: any) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export const rgbToHex = (red: number, green: number, blue: number) => {
    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}

export const HexToRgb = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
}

export const HexToRgba = (hex: string, alpha: number) => {
    const rgb = HexToRgb(hex);
    if(rgb !== null) {
        const { r, g , b } = rgb;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `Invalid Hex#:${hex}`;
}