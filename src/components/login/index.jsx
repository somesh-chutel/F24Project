import { useState } from "react";
import "./index.css";

const Login = () => {
  const [allValues, setValues] = useState({
    username: "",
    password: "",
    showErrorMsg: false,
    errorMsg: "",
  });

  const onSubmitUserDetails = async (e) => {
    e.preventDefault();

    const api = "https://apis.ccbp.in/login";

    const userDetails = {
      username: allValues.username,
      password: allValues.password,
    };

    const options = {
      method: "Post",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(api, options);

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="login-cont">
      <form className="my-form" onSubmit={onSubmitUserDetails}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setValues({ ...allValues, username: e.target.value });
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your username with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{ setValues({...allValues,password : e.target.value})}}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary form-control">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
