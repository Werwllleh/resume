import React from 'react';
import {route} from "../../utils/consts";
import {Link} from "react-router-dom";
import styles from './navbar.module.css';

const Navbar = () => {

    return (
        <ul className={styles.body}>
            {
                Object.entries(route).map(page => (
                    <li key={page[0]} className={styles.li}>
                        <Link target={page[0] === 'PHOTOS' ? '_blank' : undefined} to={page[1]}>
                            <span className={styles.link}>{page[0]}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default Navbar;
