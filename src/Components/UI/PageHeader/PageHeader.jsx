import React from 'react'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import PageTitle from './PageTitle/PageTitle'
import s from './PageHeader.module.css'

export default function PageHeader() {
	return (
		<div className={s.header}>
			<Breadcrumbs />
			<PageTitle/>
		</div>
	)
}
