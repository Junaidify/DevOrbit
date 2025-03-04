import "../styles/auth.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import login_page from "../images/login_page.jpg";

const Auth = () => {
  return (
    <div id="auth">
      <div className="auth_left">
        <h3 className="auth_welcome">Welcome Back!</h3>
        <div id="auth_container">
          <p className="auth_account_created">
            Don't have an account ?&nbsp;&nbsp;
            <button className="auth_account_btn"> Create account</button>
          </p>

          <button className="auth_google">
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#6d603c" }} />{" "}
            Continue with Google
          </button>
          <p className="auth_or">OR</p>

          <div id="auth_input">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Log in</button>
          </div>

          <p className="auth_forget_btn">Forget password ?</p>
        </div>
      </div>

      <div className="auth_right">
        <img src={login_page} alt="auth_login_page_image" />
      </div>
    </div>
  );
};

export default Auth;
