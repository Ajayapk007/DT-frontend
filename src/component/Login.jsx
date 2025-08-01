import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { API_URL } from "../utils/constant";
const Login = () => {

  const [credential,setCredential] = useState({email:'anish@gmail.com',password:'Ajay1234@'});
  const navigate = useNavigate();
  const handleCredentials = (e)=>{
     const { name, value } = e.target;
    setCredential(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  }
  const [loginError,setLoginError] = useState(""); 
  const dispatch = useDispatch();
  const handleLogin = async () =>{
    try{
     const result = await axios.post(API_URL + "login",credential,
      {withCredentials:true}
     );
     dispatch(addUser(result?.data));
     navigate('/');
    }
    catch(err){
        setLoginError(err?.response?.data || "something went wrong");
        // console.error(err);
    }
  } 
  return (
    <div className="login-form flex flex-col items-center gap-3">
      <div className="login-box border-1 w-1/4 p-8 mt-8   ">
        <div className="login-logo text-center  mx-auto mb-8">Pals</div>
        <div className="login-input flex flex-col gap-2">
          <div className="email">
            <input
              className="input validator"
              type="text"
              required
              name="email"
              onChange={handleCredentials}
              value={credential.email}
              placeholder="mail@site.com"
            />
            {/* <div className="validator-hint">Enter valid email address</div> */}
          </div>
          <div className="password">
            <input
              type="password"
              className="input validator"
              name="password"
              onChange={handleCredentials}
              value={credential.password}
              required
              placeholder="Password"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </div>
          <div className="login-btn mt-2">
            <p className="  text-red-500">{loginError}</p>
            <button onClick={handleLogin} className="btn w-full bg-[#1A77F2] text-white border-[#005fd8]">
              Login
            </button>
          </div>
        </div>
        <div className="login-option w-full gap-4 flex items-center mt-2">
          <div className=" w-2/3 h-[1px] bg-gray-300 "></div>
          <div className="  ">OR</div>
          <div className=" w-2/3 h-[1px] bg-gray-300"></div>
        </div>
        <div className="login-with-google">
          <button className="btn bg-white w-full text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
        </div>
      </div>
      <div className="sign-up">
        <div>
          Dont't have an account <Link>sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
