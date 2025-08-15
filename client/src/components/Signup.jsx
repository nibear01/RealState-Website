import { useState } from "react";
import "./Signup.css";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    dob: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      confirmPass: user.confirmPass,
      dob: user.dob,
      address: user.address,
    };

    if (data.password != data.confirmPass) {
      alert("Password Doesn't match.");
    }

    const response = await fetch(`http://localhost:5000/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("works");
    } else {
      console.log("error :(");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-container-outer">
        <div className="form-div">
          <h1 className="head">Sign Up Form</h1>
          <fieldset>
            <label htmlFor="name">Enter your full name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              required
              placeholder="Enter first name"
            />
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={user.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
            <label htmlFor="password">Enter your password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={user.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
            <label htmlFor="confirmPassword">Confirm your password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPass"
              required
              value={user.confirmPass}
              onChange={handleInputChange}
              placeholder="Confirm password"
            />

            <label htmlFor="dob">Enter your Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              value={user.dob}
              onChange={handleInputChange}
            />
            <label htmlFor="address">Enter your Address:</label>
            <textarea
              id="address"
              name="address"
              required
              value={user.address}
              onChange={handleInputChange}
            ></textarea>
            <button className="clkbtn" type="submit">
              Create account
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};
