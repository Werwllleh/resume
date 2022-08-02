import React from 'react';
import avatar from '../../../assets/img/12.jpg';
import s from '../Photo/Photo.module.css';


const Photo = () => {
	return (
		<div className={s.photo}>
			<img src={avatar} alt="Alexey Alexandrov" />
		</div>
	);
}

export default Photo;