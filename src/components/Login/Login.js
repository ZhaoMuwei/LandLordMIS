import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Icon} from 'antd';

class Login extends Component {
    static propTypes = {

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // fetch('TODO', {
                //     method: 'POST',
                //     credentials: 'include',
                //     cache: 'no-cache',
                //     body: values
                // }).then(response => response.json());
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
                        getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(<Input prefix={<Icon type="user" style={{fontSize: 13}} />} placeholder="Username" />)
                    }
                </FormItem>

                <FormItem>
                    {
                        getFieldDecorator('password', {
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
