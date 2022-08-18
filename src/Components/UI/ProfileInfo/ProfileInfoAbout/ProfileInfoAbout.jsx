import React from 'react';
import s from "./ProfileInfoAbout.module.css";


const ProfileInfoAbout = () => {
	return (
		<div className={s.about_body}>
			<h2 className={s.title} >
				Junior Frontend Software Developer / <a className={s.link} target="_blank" rel="noopener noreferrer" itemProp="map" href="https://yandex.ru/maps/-/CCURfIAjLC">Cheboksary, Russia</a> 
			</h2>
		</div>
	);
}

export default ProfileInfoAbout;
