import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const [allValues, setValues] = useState({
    username: "",
    password: "",
    showErrorMsg: false,
    errorMsg: "",
  });

  const navigate = useNavigate();
  const token = Cookies.get("jwtToken");

  console.log(token);

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

    if(response.ok === true){

      setValues({...allValues, showErrorMsg : false, errorMsg : ""});

      navigate("/");

      Cookies.set("jwtToken",data.jwt_token);

    }
    else{

      setValues({...allValues, showErrorMsg : true, errorMsg : data.error_msg});

    }

  };

  useEffect(()=>{

    if(token !== undefined){
      navigate("/");
    }


  },[])

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
        <br /><br />
        {
          allValues.showErrorMsg ? <p>{allValues.errorMsg}</p> : null
        }
      </form>
    </div>
  );
};

export default Login;
