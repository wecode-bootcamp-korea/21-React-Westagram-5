import React from 'react';
import './Login.scss';
//import { Link } from 'react-router-dom';

class Login extends React.Component {
  goMain = () => {
    this.props.history.push('/MainH');
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
                className="id_input"
                placeholder="전화번호,사용자 이름 또는 이메일"
                type="text"
              />
            </div>
            <div className="pw">
              <input
                className="pw_input"
                placeholder="비밀번호"
                type="password"
              />
            </div>
            <div className="login">
              <button type="button" className="login_Btn" onClick={this.goMain}>
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
