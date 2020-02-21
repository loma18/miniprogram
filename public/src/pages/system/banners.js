import React, { Component } from 'react';
// import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
// import { fireGetRequest } from 'service/app';
import MButton from 'components/common/MButton';
import { Table } from 'antd';
import { status } from 'constants/statusMap';
import BannerModal from 'components/system/banners/addModal';
// import './style.less';

const columns = [
    {
        title: '编号/类型',
        dataIndex: 'noType',
        render: (txt, item) => {
            return (
                <div>
                    <p>{item.no}</p>
                    <p>{item.type}</p>
                </div>
            )
        }
    },
    {
        title: '业务编号/链接地址',
        dataIndex: 'business',
        render: (txt, item) => {
            return (
                <div>
                    <p>{item.businessID}</p>
                    <p>{item.src}</p>
                </div>
            )
        }
    },
    {
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '图标',
        dataIndex: 'icon',
        render: (txt, item) => {
            return
        }
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: txt => status[txt].title
    },
    {
        title: '操作',
        dataIndex: 'operate',
        render: (txt, item) => {
            return (
                <div>
                    <span>编辑</span>
                    <span>删除</span>
                </div>
            )
        }
    }
]
const data = [
    {
        type: 'new',
        no: '123456',
        name: '启动图',
        icon: '',
        status: 1,
        businessID: '1',
        src: 'https://loma18.com'
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selItem: {}
        }
    }


    handleCancel = () => {
        this.setState({ visible: false })
    }

    handleClick = () => {
        this.setState({ visible: true })
    }

    handleOk = () => {
        this.handleCancel();
    }

    componentDidMount() {
    }

    render() {
        const { visible, selItem } = this.state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <div className={'banners'}>
                <div>
                    <MButton title={'添加'} icon handleClick={this.handleClick} />
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                {visible && <BannerModal
                    title={'banners'}
                    selItem={selItem}
                    visible={visible}
                    handleCancel={this.handleCancel}
                    handleOk={this.handleOk}
                />}
            </div>
        );
    }
}
export default Home;
