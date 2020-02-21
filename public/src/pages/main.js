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
		this.state = {
			selKey: 'home',
			openKeys: ['home']
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

	componentDidUpdate() { }

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
							<LomaBreadcrumb />
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
