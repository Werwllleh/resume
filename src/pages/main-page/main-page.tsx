import React from 'react';
import Navbar from "../../components/navbar/navbar";
import styles from './main-page.module.css'
import Avatar from "../../components/avatar/avatar";
import LinksBar from "../../components/links-bar/links-bar";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <div className={styles.body}>
                <Avatar/>
                <h1 className={styles.name}>Alexey <span>Aleksandrov</span></h1>
                <div className={styles.about}>
                    <p>Junior Frontend Developer</p>
                    <span className={styles.separator}><p>/</p></span>
                    <Link target={'_blank'} to={'https://yandex.ru/maps/-/CCUVFBXKlD'}>
                        <span className={styles.place}>Cheboksary, Russia</span>
                    </Link>
                </div>
                <LinksBar/>
            </div>
            <Navbar/>
        </>
    );
};

export default MainPage;
