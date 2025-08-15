import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleEventChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (event) => {
    event.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    console.log(data);

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <form className="container-login" onSubmit={handleForm}>
      <div className="form-section">
        <div className="div-one">
          <h1>Welcome to Horizon Homes</h1>
          <h2>Login in to your account</h2>
        </div>

        <div className="login-box">
          <div className="div-inner">
            <label className="com" htmlFor="email">
              Enter email:
            </label>
            <input
              type="email"
              name="email"
              className="ele"
              placeholder="youremail@email.com"
              value={user.email}
              onChange={handleEventChange}
            />
          </div>
          <div className="div-inner">
            <label className="com" htmlFor="password">
              Enter password:
            </label>
            <input
              type="password"
              name="password"
              className="ele"
              placeholder="password"
              value={user.password}
              onChange={handleEventChange}
            />
          </div>

          <button className="clkbtn">Login</button>
        </div>
      </div>
    </form>
  );
};
