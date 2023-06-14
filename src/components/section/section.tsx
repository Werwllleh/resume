import React, {ReactNode} from 'react';
import styles from "./section.module.css";

interface SectionProps {
    title: string;
    children: ReactNode
}
const Section = ({title, children}: SectionProps) => {
    return (
        <section className={styles.body}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
};

export default Section;
