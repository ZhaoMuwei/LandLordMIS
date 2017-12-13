import React, {Component} from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import Cookies from 'js-cookie';
import {Form, Input, Button, Icon} from 'antd';
import './style.css';

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
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const headers = new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded',
                });
                let response = await fetch('http://103.72.145.118:80/login', {
                    method: 'POST',
                    headers,
                    body: qs.stringify(values),
                    mode: 'cors',
                });

                if (response.status !== 200) {
                    this.props.onError();
                    return;
                }

                response = await response.json();

                if (!response.Token) {
                    this.props.onError();
                    return;
                }

                // We've a valid Token here.
                const token = response.Token;
                Cookies.set('x-ll-auth', token);
                this.props.onSuccess();
            }
        });
    }

    render = () => {
        const {getFieldDecorator} = this.props.form;
        const FormItem = Form.Item;

        return (
            <div className="login-wrapper">
                <h1 style={{marginBottom: 15}}>Hi</h1>
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
            </div>
        );
    }
}

export default Form.create()(Login);
