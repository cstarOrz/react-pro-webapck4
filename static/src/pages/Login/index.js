import React, {Component} from 'react'
import {Form, Input, Button} from 'element-react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import './index.less'

@withRouter
@inject('store')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    console.log(2222)
    this.state = {
      form: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        passWord: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    this
      .refs
      .form
      .validate((valid) => {
        if (valid) {
          this
            .props
            .store
            .login()
            .then(res => {
              this
                .props
                .history
                .push(`/`)
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
  }

  handleReset(e) {
    e.preventDefault();
    this
      .refs
      .form
      .resetFields();
  }
  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, {[key]: value})
    });
  }
  render() {
    return (
      <div className="ptop50">
        <Form
          ref="form"
          model={this.state.form}
          rules={this.state.rules}
          labelWidth="100"
          className="demo-ruleForm">
          <Form.Item label="用户名" prop="userName">
            <Input
              type="text"
              value={this.state.form.userName}
              onChange={this
              .onChange
              .bind(this, 'userName')}
              autoComplete="off"/>

          </Form.Item>
          <Form.Item label="密码" prop="passWord">
            <Input
              type="password"
              value={this.state.form.passWord}
              onChange={this
              .onChange
              .bind(this, 'passWord')}/>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={this
              .handleSubmit
              .bind(this)}>登录</Button>
            <Button onClick={this
              .handleReset
              .bind(this)}>重置</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login