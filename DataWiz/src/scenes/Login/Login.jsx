import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://data-wiz-server.vercel.app/user/login",
        {
          email,
          password,
        },
        { withCredentials: false }
      )
      .then(({ data }) => {
        localStorage.setItem("email", email);
        navigate("/driveAgm");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="heading">SignIn to your account</div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email">Email</label>
        </div>
        <div className="input-field">
          <input
            id="password"
            name="text"
            type="password"
            autoComplete="off"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="username">Password</label>
        </div>
        <div className="btn-container">
          <button className="btn" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
