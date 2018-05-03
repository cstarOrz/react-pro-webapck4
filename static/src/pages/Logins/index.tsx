import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {Form, Input, Button} from 'element-react';
import './app.less';
import { Props} from "../../utils/interface/index";

@inject('store')
@observer
class Login extends React.Component<Props,any> {
  constructor(props:Props) {
    super(props);
    console.log('Login');
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
  handleSubmit(e:Event) {
    e.preventDefault();
    let form:any = this.refs.form;
    form.validate((valid:any) => {
      if(valid) {
        this.props.store.login().then((res:any) => {
          this.props.history.push(`/overview/list?pid=${this.props.store.actived}`);
        })
        return null;
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  handleReset(e:Event) {
    e.preventDefault();
    let form:any = this.refs.form;
    form.resetFields();
    this.setState({
      form: {
        userName: '',
        passWord: ''
      }
    });
  }
  onChange(key:any, value:any) {
    this.setState({
      form: Object.assign({}, this.state.form, {[key]: value})
    });
  }
  render() {
    return (
      <div className="login-box">
        <h3 className='login-title'>登录</h3>
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

export default withRouter(Login)