import React from 'react';
import Links from '../Links/Links';
import Photo from '../Photo/Photo';
import s from "../ProfileInfo/ProfileInfo.module.css";



const ProfileInfo = () => {
	return (
		<div className={s.profile_info} itemScope itemType="http://schema.org/Person">
			<Photo/>
			<h1 className={s.profile_title } itemProp="name"><span>Alexey</span> Aleksandrov</h1>
			<Links/>
		</div>
	);
}

export default ProfileInfo;
