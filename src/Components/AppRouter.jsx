import React from "react";
import Error from '../pages/Error';
import { Routes, Route } from 'react-router-dom';
import { pageRoutes } from '../router/routes';
import Preview from "../pages/Preview";


const AppRouter = () => {

	return (
		<Routes>
			{pageRoutes.map(route =>
				<Route 
					element={<route.element/>}
					path={route.path}
					key={route.path}
				/>
			)}
			<Route path="*" element={<Error />} />
		</Routes>
	)
}

export default AppRouter;
