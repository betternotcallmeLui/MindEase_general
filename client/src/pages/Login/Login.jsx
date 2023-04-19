import LoginContainer from '../../components/LoginContainer/LoginContainer';

import './Login.scss';

function Login() {
    return (
        <div className="login_page">
            <div className="login_page_content">
                <div className="login_page_container">
                    <LoginContainer />
                </div>
            </div>
        </div>
    )
}

export default Login