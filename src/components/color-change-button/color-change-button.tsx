import React, {useEffect, useState} from 'react';
import styles from './color-change-button.module.css';
import {theme} from "../../utils/consts";


const ColorChangeButton = () => {

    const [curTheme, setCurTheme] = useState<string>('');

    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            setCurTheme(theme.LIGHT);
            localStorage.setItem('theme', theme.LIGHT)
        } else {
            let localStorageTheme = localStorage.getItem('theme')
            setCurTheme(localStorageTheme as string);
        }
    }, [])

    const changeTheme = () => {
        if (curTheme === theme.LIGHT) {
            document.documentElement.setAttribute("class", theme.DARK);
            localStorage.setItem('theme', theme.DARK)
            setCurTheme(theme.DARK)
        } else {
            document.documentElement.setAttribute("class", theme.LIGHT);
            localStorage.setItem('theme', theme.LIGHT)
            setCurTheme(theme.LIGHT)
        }
    }

    return (
        <button className={`${styles.button} ${curTheme === theme.DARK ? styles.button_dark : styles.button_light}`} onClick={changeTheme}/>
    );
};

export default ColorChangeButton;
