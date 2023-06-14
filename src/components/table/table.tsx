import React from 'react';
import styles from './table.module.css';
import {contacts} from "../../utils/consts";
import {Link} from "react-router-dom";


const Table = ({tableData}: { tableData: object }) => {
    return (
        <div className={styles.body}>
            {Object.entries(tableData).map((info) => (
                <div key={info[0]} className={styles.row}>
                    <div className={styles.row_field}>
                        {info[0]}
                    </div>
                    <div className={styles.row_value}>
                        {info[1] === contacts.Gmail || info[1] === contacts.Vk || info[1] === contacts.Telegram ? (
                            <Link target={'_blank'} to={info[1]}>{info[1]}</Link>
                        ) : info[1]}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Table;
