import React, { Component } from 'react';
import { Form, Modal } from 'antd';
import { MInput } from 'components/common/FormCom';
import { setFormItemLayout } from 'utils/functions';

const form = Form.create();
const FormItem = Form.Item;


@form
class AddModal extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const { handleOk } = this.props;
    }


    componentDidMount() {
    }

    render() {
        const { title, visible, handleCancel, selItem } = this.props;
        let modTitle = Object.keys(selItem).length > 0 ? '编辑' + title : '添加' + title;
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                wrapClassName={'addModal'}
                title={modTitle}
                visible={visible}
                onOk={this.handleClick}
                onCancel={handleCancel}
            >
                <Form>
                    <MInput
                        label={'自定义类型'}
                        name={'customType'}
                        getFieldDecorator={getFieldDecorator}
                        require
                        formLayout={setFormItemLayout(2)}
                        fieldDecoratorOptions={{
                            rules: [{ required: true, message: '请输入' }],
                            initialValue: selItem['customType'] || ''
                        }}
                        inputProps={{
                            placeholder: '',
                        }}
                    />
                </Form>
            </Modal>
        );
    }
}
export default AddModal;