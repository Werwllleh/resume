import React from 'react';
import styles from './links-bar.module.css';
import {links} from "../../utils/consts";
import {Link} from "react-router-dom";

import {ReactComponent as GitHubIcon} from '../../assets/images/github-icon.svg';
import {ReactComponent as GMailIcon} from '../../assets/images/gmail-icon.svg';
import {ReactComponent as TelegramIcon} from '../../assets/images/telegram-icon.svg';
import {ReactComponent as VKIcon} from '../../assets/images/vk-icon.svg';


const LinksBar = () => {
    return (
        <div className={styles.body}>
            <Link target={'_blank'} className={styles.link} to={links.GITHUB}>
                <GitHubIcon/>
            </Link>
            <Link target={'_blank'} className={styles.link} to={links.GMAIL}>
                <GMailIcon/>
            </Link>
            <Link target={'_blank'} className={styles.link} to={links.TELEGRAM}>
                <TelegramIcon/>
            </Link>
            <Link target={'_blank'} className={styles.link} to={links.VK}>
                <VKIcon/>
            </Link>
        </div>
    );
};

export default LinksBar;
