import React from 'react';
import styles from './timeline.module.css';
import {Link} from "react-router-dom";
import {ITimeLineArrData} from "../../utils/types";


const Timeline = ({data}: { data: ITimeLineArrData[] }) => {
    return (
        <div className={styles.timeline}>
            <div className={styles.timeline_content}>
                {data.map((item, index) => (
                    <div key={index} className={styles.timeline_item}>
                        <div className={styles.timeline_header}>
                            <h3 className={styles.timeline_title}>{item.title}</h3>
                            {item.title && item.link?.url ? (
                                <Link target="_blank" className={styles.timeline_link} to={item.link.url}><span>{item.link.url}</span></Link>
                            ) : null}
                        </div>
                        <div className={styles.timeline_dates}>
                            {item.description.map((date, index) => (
                                <div key={index} className={styles.timeline_date_info}>
                                    <div className={
                                        `${styles.timeline_date_column} ${date.date_until ? styles.timeline_date_column_height : styles.timeline_date_row_height}`
                                    }>
                                        {date.date_until ? (
                                            <div className={styles.timeline_date}>
                                                <span>until</span>
                                                <p>{date.date_until}</p>
                                            </div>
                                        ) : null}
                                        <div className={styles.timeline_date}>
                                            {date.date_until ? <span>from</span> : null}
                                            <p>{date.date_from}</p>
                                        </div>
                                    </div>
                                    <div className={styles.timeline_date_separator}></div>
                                    <div className={styles.timeline_date_description}>
                                        <h4 className={styles.timeline_date_subtitle}>{date.subtitle}</h4>
                                        {date.link ? (
                                            <Link target="_blank" className={styles.timeline_date_link} to={date.link}><span>{date.link}</span></Link>
                                        ) : null}
                                        <div className={styles.timeline_date_text}>{date.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
