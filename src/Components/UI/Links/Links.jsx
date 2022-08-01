import React from 'react';
import { linksAdress } from '../../../router/links';
import s from '../Links/Links.module.css';
import LinkBtn from './Link/LinkBtn';

const Links = () => {
	return (
		<div className={s.linksBody}>
			{linksAdress.map(link =>
				<LinkBtn
					path={link.path}
					icon={link.icon}
					key={link.socname}
				/>
			)}
		</div>
	);
}

export default Links;
