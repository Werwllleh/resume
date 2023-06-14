import {$themeState, themeChange} from "./index";

$themeState.on(themeChange, state => state === 'theme-light' ? 'theme-dark' : 'theme-light')
