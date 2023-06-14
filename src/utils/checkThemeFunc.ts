import {theme} from "./consts";

export const checkThemeFunc = () => {

    let currentThemeStorage: string | null = localStorage.getItem('theme')

    if (currentThemeStorage === null) {
        document.documentElement.setAttribute("class", theme.LIGHT);
        localStorage.setItem('theme', theme.LIGHT);
    } else {
        document.documentElement.setAttribute("class", currentThemeStorage);
    }
}
