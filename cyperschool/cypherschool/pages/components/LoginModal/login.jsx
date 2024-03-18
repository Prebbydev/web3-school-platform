import React, { useState, useCallback } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import SignUpModal from "../SignupModal/signup";
import ForgotPassword from "../ForgotPassWord/forgotPassWord";
import useLogin from "../../../hooks/useLogin";
import { useRouter } from "next/router";
import useValidation from "../../../hooks/useValidation";
import { validateEmail, validatePassword } from "../../../helpers/validation";

function LoginModal({ toggleModal }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleForgotPassClick = () => {
    setShowForgotPassword(true);
  };

  const emailError = useValidation(formData.email, validateEmail);
  const passwordError = useValidation(formData.password, validatePassword);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidTogether = useCallback(() => {
    if (emailError?.type === "error") {
      return false;
    }

    if (passwordError?.type === "error") {
      return false;
    }

    return true;
  }, [emailError, passwordError]);
  const email = formData.email
  const password = formData.password

  const { login, notification, isLoading } = useLogin({
    email,
    password,
  });
  console.log(notification);
  console.log(isLoading);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isValidTogether()) {
      return;
    }

    if (await login()) {
      navigate.push("/dashboard");
    }
  };
  //function for hide and show password

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span className="cancel" onClick={toggleModal}>
            &times;
          </span>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="logIn">
              <div className="userLabel">
                <FaUser style={{ fontSize: "18px" }} />{" "}
                <label htmlFor="email">Email</label>
              </div>
              <div className="userInput">
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>{emailError?.message ?? ""}</div>
            </div>
            <div className="logIn">
              <div className="userLabel">
                <AiOutlineLock style={{ fontSize: "18px" }} />{" "}
                <label htmlFor="password">Password</label>
              </div>
              <div className="userInput">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  id="password"
                  name="password"
                  required
                />
                <p onClick={toggleShowPassword}>
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>
              <div>{passwordError?.message ?? ""}</div>
            </div>
            <h5 onClick={handleForgotPassClick}>Forgot password?</h5>

            <button type="submit">Log In</button>
            </form>
            <div onClick={handleSignUpClick}>
              <h4>Create account</h4>
            </div>
            {showSignUpModal && (
              <SignUpModal onClose={() => setShowSignUpModal(false)} />
            )}
            {showForgotPassword && <ForgotPassword toggleModal={toggleModal} />}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
