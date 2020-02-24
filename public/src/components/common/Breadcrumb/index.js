import React, { Component } from 'react';
import { Router, withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { getDictMenus } from 'utils/transformData';
import './style.less';

@withRouter
class LomaBreadcrumb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: []
		};
	}

	getRoutes = () => {
		let menus = getDictMenus();
		let pathname = window.location.pathname.replace(/\/$/, '').split('/');
		let routes = [{ path: '', breadcrumbName: '当前位置' }];
		if (!pathname[1]) {
			routes.push({
				path: '',
				breadcrumbName: '首页'
			})
			this.setState({ routes });
			return;
		}
		if (pathname[2]) {
			routes.push({
				path: menus[menus[pathname[1]].defaultChildKey].path,
				breadcrumbName: menus[pathname[1]].title
			})
			if (menus[pathname[1]].children.length > 0) {
				routes.push({
					path: menus[pathname[2]].path,
					breadcrumbName: menus[pathname[2]].title
				})
			}
		} else {
			routes.push({
				path: '',
				breadcrumbName: menus[pathname[1]].title
			})
		}
		this.setState({ routes });
	};

	itemRender = (route, params, routes, paths) => {
		const last = routes.indexOf(route) === routes.length - 1;
		return last || !route.path ? (
			<span>{route.breadcrumbName}</span>
		) : (
				<Link to={route.path}>{route.breadcrumbName}</Link>
			);
	};

	UNSAFE_componentWillReceiveProps(props) {
		this.getRoutes();
		if (props.location.pathname != this.props.location.pathname && typeof (this.props.handleClick) == 'function') {
			this.props.handleClick();
		}
	}

	componentDidMount() {
		this.getRoutes();
	}

	render() {
		// const { routes } = this.state;
		return (
			<div id={'miniprogram-breadcrumb'}>
				<Breadcrumb
					itemRender={this.itemRender}
					routes={this.state.routes}
				/>
			</div>
		);
	}
}
export default LomaBreadcrumb;
