import React, { Component } from 'react';
import './Login.scss';
//import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
      background: '',
      disabled: true,
    };
  }

  goMain = () => {
    this.props.history.push('/MainH');
  };

  inputValue = e => {
    // input에 작성한 값
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.id, this.state.pw);
  };

  colorChange = () => {
    if (this.state.id.includes('@') && this.state.pw.length > 4) {
      this.setState({
        background: 'black',
        disabled: false,
      });
    }
  };

  render() {
    return (
      <div>
        <title>Westagram</title>
        <body>
          <div className="logo">
            <h1>Westagram</h1>
          </div>
          <section className="login_section">
            <div className="id">
              <input
                name="id"
                className="id_input"
                placeholder="전화번호,사용자 이름 또는 이메일"
                type="text"
                onKeyUp={this.colorChange}
                onChange={this.inputValue}
              />
            </div>
            <div className="pw">
              <input
                name="pw"
                className="pw_input"
                placeholder="비밀번호"
                type="password"
                onChange={this.inputValue}
                onKeyUp={this.colorChange}
              />
            </div>
            <div className="login">
              <button
                type="button"
                className="login_Btn"
                style={{ backgroundColor: this.state.background }}
                disabled={this.state.disabled}
                onClick={this.goMain}
              >
                <span>로그인</span>
              </button>
            </div>
          </section>
        </body>
        <footer>
          <a href="https://help.instagram.com/" className="forget">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    );
  }
}

export default Login;
