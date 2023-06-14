import {createEvent, createStore} from "effector";


export const $themeState = createStore('theme-light');
export const themeChange = createEvent();
