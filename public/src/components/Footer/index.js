import React, { Component } from 'react';
import { Row, Col, Menu, Input } from 'antd';
import { Router, withRouter, Link } from 'react-router-dom';
import './style.less';

const Search = Input.Search;

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id={'miniprogram-footer'}>
				<Row>
					<Col>
						<p>
							<a
								href='http://www.beian.miit.gov.cn'
								target='_blank'
							>
								粤ICP备19110811号-1
							</a>
						</p>
					</Col>
					<Col>
						© CopyRight {new Date().getFullYear()} 小程序后台
					</Col>
				</Row>
			</div>
		);
	}
}
export default Footer;
