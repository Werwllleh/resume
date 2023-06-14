import React from 'react';
import styles from './back-button.module.css';
import {Link} from "react-router-dom";

const BackButton = () => {
    return (
        <Link className={styles.button} to={'/'}>Back</Link>
    );
};

export default BackButton;
