import React from 'react';
import styles from './avatar.module.css';
import avatar from '../../assets/images/me.jpg';

const Avatar = () => {
    return (
        <div className={styles.photo}>
            <img src={avatar} alt="Alexey Alexandrov" />
        </div>
    );
};

export default Avatar;
