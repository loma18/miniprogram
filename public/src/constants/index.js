import React, { Component } from 'react';

//通用分页设置
export const hxPaginationSetup = {
	defaultPageSize: 10,
	pageSize: 10,
	showQuickJumper: true,
	showTotal: (total, range) => {
		return (
			<span>
				总共<span style={{ color: '#1890ff' }}>{total}</span>条
			</span>
		);
	}
};

export const braftControls = [
	'undo',
	'redo',
	'separator',
	'font-size',
	'line-height',
	'letter-spacing',
	'separator',
	'text-color',
	'bold',
	'italic',
	'underline',
	'strike-through',
	'separator',
	'superscript',
	'subscript',
	'remove-styles',
	'emoji',
	'separator',
	'text-indent',
	'text-align',
	'separator',
	'headings',
	'list-ul',
	'list-ol',
	'blockquote',
	'code',
	'separator',
	'link',
	'separator',
	'hr',
	'separator',
	'media',
	'separator',
	'clear',
	'fullscreen'
];
