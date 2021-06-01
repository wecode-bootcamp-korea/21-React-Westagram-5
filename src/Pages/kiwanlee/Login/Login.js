import React from 'react';
import './Login.scss';
//import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: '',
      inputPw: '',
      background: '#bfdffd',
      disabled: true,
      idChecked: false,
      pwChecked: false,
    };
  }

  handleInputId = e => {
    this.setState({ inputId: e.target.value });
    e.target.value.includes('@')
      ? this.setState({ idChecked: true }, () => this.btnChangeColor())
      : this.setState({ idChecked: false }, () => this.btnChangeColor());
  };

  handleInputPw = e => {
    this.setState({ inputPw: e.target.value });
    e.target.value.length > 4
      ? this.setState({ inputId: e.target.value, pwChecked: true }, () =>
          this.btnChangeColor()
        )
      : this.setState({ pwChecked: false }, () => this.btnChangeColor());
  };

  btnChangeColor = () => {
    this.state.idChecked && this.state.pwChecked
      ? this.setState({ background: '#1c7ed6', disabled: false })
      : this.setState({ background: '#bfdffd', disabled: true });
  };
  goToMain = () => {
    window.location.href = './mainW';
  };

  render() {
    return (
      <body>
        <div className="Login">
          <div className="container">
            <div className="inner">
              <header className="header">
                <h1>Westagram</h1>
              </header>

              <form className="form">
                <div className="input_box">
                  <input
                    onChange={this.handleInputId}
                    name="inputId"
                    id="id"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                  />
                </div>
                <div className="input_box">
                  <input
                    onChange={this.handleInputPw}
                    name="inputPw"
                    id="password"
                    type="password"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="button_box">
                  <button
                    style={{ backgroundColor: this.state.background }}
                    type="button"
                    className="btn"
                    disabled={this.state.disabled}
                    onClick={this.goToMain}
                  >
                    <span>로그인</span>
                  </button>
                </div>
              </form>
              <div className="password_forget">
                <a href="" className="page_move">
                  <span>비밀번호를 잊으셨나요?</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
