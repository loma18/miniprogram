export const changeTheme = theme => {
	document.body.setAttribute('class', theme);
};

export const isApp = () => {
	return (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
			navigator.userAgent
		) || window.innerWidth < 768
	);
};


export const setFormItemLayout = function (num) {
	let result = {};
	if (num === 0) {
		result = {
			labelCol: {
				xs: { span: 0 },
				sm: { span: 0 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 24 }
			}
		};
		return result;
	}
	result = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: num }
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 24 - num }
		}
	};
	return result;
};
