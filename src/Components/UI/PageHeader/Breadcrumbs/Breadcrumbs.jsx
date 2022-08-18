import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { pageRoutes } from '../../../../router/routes';
import s from "../Breadcrumbs/Breadcrumbs.module.css";


const Breadcrumbs = () => {

  const breadcrumbs = useBreadcrumbs(pageRoutes);

	return (
		<div className={s.crumbBody}>
			{breadcrumbs.map(({
        match,
        breadcrumb
      }) => (
        <span className={s.crumbLink} key={match.pathname}>
          <NavLink to={match.pathname}>{breadcrumb}</NavLink>
        </span>
      ))}
		</div>
  );
};

export default Breadcrumbs;
