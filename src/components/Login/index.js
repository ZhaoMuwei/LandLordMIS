/**
 * @file Login Component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Form, Input, Button, Icon} from 'antd';

class Login extends Component {
    static defaultProps = {
        onSuccess() {},
        onError() {},
    }

    static propTypes = {
        onSuccess: PropTypes.func,
        onError: PropTypes.func,
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                this.props.onError(err);
                return;
            }

            axios.get('/api/login', {
                params: values,
                withCredentials: true,
            }).then(response => {
                if (response.data.status !== 0) {
                    this.props.onError();
                    return;
                }
                this.props.onSuccess();
            }).catch(error => {
                this.props.onError(error);
            });
        });
    }

    render = () => {
        const {getFieldDecorator} = this.props.form;
        const FormItem = Form.Item;

        return (
            <Form onSubmit={this.handleSubmit} className="Form">
                <FormItem>
                    {
                        getFieldDecorator('UserName', {
                            rules: [{required: true, message: '请输入用户名'}],
                        })(<Input
                            size="large"
                            prefix={<Icon type="user" style={{fontSize: 13}} />}
                            placeholder="用户名"
                        />)
                    }
                </FormItem>

                <FormItem>
                    {
                        getFieldDecorator('Password', {
                            rules: [{required: true, message: '请输入密码'}],
                        })(<Input
                            size="large"
                            prefix={<Icon type="lock" style={{fontSize: 13}} />}
                            type="password"
                            placeholder="密码"
                        />)
                    }
                </FormItem>

                <FormItem style={{marginBottom: 0}}>
                    <Button
                        size="large"
                        style={{width: '100%'}}
                        className="login-form-button"
                        type="primary"
                        htmlType="submit"
                    >
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Login);
