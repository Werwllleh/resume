import React from 'react';
import s from './LinkBtn.module.css';

const LinkBtn = ({path, icon, ...props}) => {
	return (
		<a href={path} target="_blank" rel="noopener noreferrer" className={s.link}>
			{icon}
		</a>
	);
}

export default LinkBtn;
