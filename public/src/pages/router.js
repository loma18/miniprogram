import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/route';
import Loadable from 'components/Loadable';
const Home = Loadable(() => import('pages/home'));
const System = Loadable(() => import('pages/system/router'));
const ErrorPage = Loadable(() => import('components/common/404'));

export default props => (
	<Switch>
		<Route
			path={ROUTE_PATH.home}
			component={Home}
		/>
		<Route
			path={ROUTE_PATH.system}
			component={System}
		/>
		<Route component={ErrorPage} />
		{/* <Redirect from={props.location} to={'/'} /> */}
	</Switch>
);
