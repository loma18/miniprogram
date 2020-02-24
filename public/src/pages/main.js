import React, { Component } from 'react';
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fireGetRequest } from 'service/app';
import { BackTop, Layout, Menu } from 'antd';
import Footer from 'components/Footer';
import LomaBreadcrumb from 'components/common/Breadcrumb';
import Routers from 'pages/router';
import { menus } from 'constants/menus';
import { getMenuEle } from 'utils/antd';
import { getRootLevelKey } from 'utils/transformData';
import './style.less';

const { Content, Sider } = Layout;
const rootKey = getRootLevelKey();

class Main extends Component {
	constructor(props) {
		super(props);
		let pathname = window.location.pathname.replace(/\/$/, '').split('/');
		this.state = {
			selKey: pathname[pathname.length - 1] || 'home',
			openKeys: pathname[1] ? [pathname[1]] : ['home']
		}
	}

	handleClick = ({ item, key, keyPath, domEvent }) => {
		this.setState({ selKey: key, openKeys: keyPath })
	}

	onOpenChange = openKeys => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (rootKey.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	};

	changeUrl = () => {
		let pathname = window.location.pathname.replace(/\/$/, '').split('/');
		this.setState({
			selKey: pathname[pathname.length - 1]
		})
	}

	componentDidUpdate() {
		console.log('loma')
	}

	componentDidMount() {
	}

	render() {
		const { selKey, openKeys } = this.state;
		return (
			<div>
				<Layout>
					<Layout>
						<Sider width={200} style={{ background: '#fff' }}>
							<Menu
								mode="inline"
								selectedKeys={[selKey]}
								openKeys={openKeys}
								theme={'dark'}
								onOpenChange={this.onOpenChange}
								style={{ height: '100%', borderRight: 0 }}
								onClick={this.handleClick}
							>
								{getMenuEle(menus)}
							</Menu>
						</Sider>
						<Layout className={'main'}>
							<LomaBreadcrumb handleClick={this.changeUrl}/>
							<Content
								style={{
									background: '#fff',
									padding: 24,
									margin: 0
								}}
							>
								{<Routers />}
							</Content>
						</Layout>
					</Layout>
				</Layout>
				<Footer />
				<BackTop />
			</div>
		);
	}
}
export default Main;
