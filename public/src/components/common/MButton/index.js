import React, { Component } from 'react';
// import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
// import { fireGetRequest } from 'service/app';
import { Button } from 'antd';
import './style.less';

export default ({ title, type = 'primary', handleClick = () => { }, icon = false, iconType = 'plus' }) => {
    let params = { type, onClick: handleClick };
    if (icon) {
        params.icon = iconType;
    }
    return (
        <Button  {...params}>
            {title}
        </Button>
    )
};
