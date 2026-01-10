import "./Auth.css";

const Signup = ({ switchToLogin }) => {
  return (
    <>
      <h2>Signup</h2>

      <p className="switch-text">
        Already have an account?
        <span onClick={switchToLogin}> Login</span>
      </p>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <button className="primary-btn">Signup</button>
    </>
  );
};

export default Signup;
