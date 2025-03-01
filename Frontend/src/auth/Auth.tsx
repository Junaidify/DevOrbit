import '../styles/auth.css';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  return (
    <div id="auth">
      <div className="auth_left">
        <h3>DevOrbit</h3>
        <h1>Log in</h1>
        <p>
          Don't have an account ? <button>create account</button>
        </p>

        <button>
          <FontAwesomeIcon icon={faGoogle} style={{ color: "#6d603c" }} />{" "}
          Continue with Google
        </button>
        <p>or</p>

        <div>
          <div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Log in</button>
          </div>

          <p>Forget password ?</p>
        </div>
      </div>

      <div className="auth_right"></div>
    </div>
  );
};

export default Auth;
