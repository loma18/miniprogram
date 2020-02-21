import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/route';
import Loadable from 'components/Loadable';
const Banners = Loadable(() => import('pages/system/banners'));
const ErrorPage = Loadable(() => import('components/common/404'));

export default props => (
	<Switch>
		<Route
			path={ROUTE_PATH.banners}
			component={Banners}
		/>
		<Route component={ErrorPage} />
		{/* <Redirect from={props.location} to={'/'} /> */}
	</Switch>
);
