import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    role: "user",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/user/register", registerData).catch((err) => {
      alert("please use valid creditintials");
    });
    setRegisterData({
      email: "",
    password: "",
    name: "",
    role: "user",
    })
    console.log(res.data.status);
    if(res.status === 201) {
      nav("/");
    }
  }
  return (
    <RegisterForm handleChange={handleChange} handleSubmit={handleSubmit} registerData={registerData}/>
  );
}
