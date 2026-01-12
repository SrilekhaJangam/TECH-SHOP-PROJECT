import "./Auth.css";

const Login = ({ switchToSignup }) => {
  return (
    <div className="auth-container">
      <h2>Login</h2>

      <p className="switch-text">
        New to Tech-Shop?
        <span onClick={switchToSignup}> Create an account</span>
      </p>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button className="primary-btn">Login</button>
    </div>
  );
};

export default Login;


