import React, { Component } from 'react';
import { Form, Modal, Input } from 'antd';

const FormItem = Form.Item;

export const MInput = (props) => {
    const {
        getFieldDecorator,
        fieldDecoratorOptions,
        label,
        name,
        inputProps
    } = props;
    return (
        <FormItem label={label}>
            {getFieldDecorator(name, fieldDecoratorOptions)(
                <Input {...inputProps} />,
            )}
        </FormItem>
    )
}