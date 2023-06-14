import React from 'react';
import styles from './resume.module.css';
import Section from "../../components/section/section";
import {aboutMe, educations, projects, skills, works} from "../../utils/consts";
import Table from "../../components/table/table";
import Avatar from "../../components/avatar/avatar";
import AchievementTiles from "../../components/achievement-tiles/achievement-tiles";
import LinksBar from "../../components/links-bar/links-bar";
import Timeline from "../../components/timeline/timeline";

const Resume = () => {
    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Resume</h1>
            <Section title={'About me'}>
                <div className={styles.section_about}>
                    <Table tableData={aboutMe}/>
                    <div className={styles.about_text}>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                        Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                        sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                    </div>
                    <div className={styles.avatar}>
                        <Avatar/>
                    </div>
                </div>
            </Section>
            <Section title={'Contacts'}>
                <div className={styles.section_contacts}>
                    {/*<Table tableData={contacts}/>*/}
                    <LinksBar/>
                </div>
            </Section>
            <Section title={'Skills'}>
                <div className={styles.section_skills}>
                    <AchievementTiles category={'Languages'} skills={skills.languages}/>
                    <AchievementTiles category={'Libraries and Frameworks'} skills={skills.libraries_frameworks}/>
                    <AchievementTiles category={'Tools'} skills={skills.tools}/>
                    <AchievementTiles category={'Databases'} skills={skills.databases}/>
                </div>
            </Section>
            <Section title={'Work experience'}>
                <div className={styles.section_work}>
                    <Timeline data={works}/>
                </div>
            </Section>
            <Section title={'Education'}>
                <div className={styles.section_education}>
                    <Timeline data={educations}/>
                </div>
            </Section>
            <Section title={'Projects'}>
                <div className={styles.section_education}>
                    <Timeline data={projects}/>
                </div>
            </Section>
        </div>
    );
};

export default Resume;
