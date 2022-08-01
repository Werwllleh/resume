import React from 'react';
import s from './LinkBtn.module.css';

const LinkBtn = ({path, icon, ...props}) => {
	return (
		<a href={path} className={s.link}>
			{icon}
		</a>
	);
}

export default LinkBtn;
