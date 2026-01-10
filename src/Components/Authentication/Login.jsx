import "./Auth.css";

const Login = ({ switchToSignup }) => {
  return (
    <>
      <h2>Login</h2>

      <p className="switch-text">
        New to Tech-Shop?
        <span onClick={switchToSignup}> Create an account</span>
      </p>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button className="primary-btn">Login</button>

      <div className="divider">or login with</div>

      <div className="social-buttons">
        <button className="fb">Facebook</button>
        <button className="google">Google</button>
        <button className="twitter">Twitter</button>
      </div>
    </>
  );
};

export default Login;
