import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Icon} from 'antd';

class Login extends Component {
    static defaultProps = {
        onSuccess() {},
        onError() {}
    }

    static propTypes = {
        onSuccess: PropTypes.func,
        onError: PropTypes.fucn
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                const response = await fetch('http://103.72.145.118:80/login', {
                    method: 'POST',
                    // credentials: 'include',
                    cache: 'no-cache',
                    mode: 'cors',
                    headers: {
                        // 'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: values
                });
                debugger;
            }
        });
    }

    render = () => {
        const {getFieldDecorator} = this.props.form;
        const FormItem = Form.Item;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {
                        getFieldDecorator('UserName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(<Input prefix={<Icon type="user" style={{fontSize: 13}} />} placeholder="Username" />)
                    }
                </FormItem>

                <FormItem>
                    {
                        getFieldDecorator('Password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(<Input prefix={<Icon type="lock" style={{fontSize: 13}} />} type="password" placeholder="Password" />)
                    }
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Login);
