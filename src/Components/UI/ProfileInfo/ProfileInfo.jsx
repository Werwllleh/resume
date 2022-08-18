import React from 'react';
import { Link } from 'react-router-dom';
import Links from '../Links/Links';
import Photo from '../Photo/Photo';
import s from "../ProfileInfo/ProfileInfo.module.css";
import ProfileInfoAbout from './ProfileInfoAbout/ProfileInfoAbout';



const ProfileInfo = () => {
	return (
		<div className={s.profile_info} itemScope itemType="http://schema.org/Person">
			<Photo/>
			<h1 className={s.profile_title } itemProp="name"><span>Alexey</span> Aleksandrov</h1>
			<Links />
			<ProfileInfoAbout />
			<Link className={s.profile_link } to='/resume'>Resume</Link>
		</div>
	);
}

export default ProfileInfo;
