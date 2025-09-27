import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSLices";
export default function Login() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name] : e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/user/signin", loginData).catch(
      (err) => {
        alert("Please use valid credits");
      }
    );
    if(res.status === 200) {
      localStorage.setItem("token", res.data.token);
      dispatch(setUser());
      nav("/home");
    }
  }
  return (
    <LoginForm loginData={loginData} handleChange={handleChange} handleSubmit={handleSubmit}/>
  );
}
