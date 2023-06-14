import React from 'react';
import styles from './achievement-tiles.module.css';

interface AchievementTilesProps {
    category: string;
    skills: string[]
}
const AchievementTiles = ({category, skills}: AchievementTilesProps) => {
    return (
        <div className={styles.body}>
            <h4 className={styles.category}>{category}</h4>
            <div className={styles.skills}>
                {skills.map((tile: string) => (
                    <div key={tile} className={styles.tile}>{tile}</div>
                ))}
            </div>
        </div>
    );
};

export default AchievementTiles;
