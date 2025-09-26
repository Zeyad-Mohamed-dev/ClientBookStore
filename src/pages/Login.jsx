import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name] : e.target.value});
  }
  const handleSubmit = (e) => {
    e.preverntDefault();
    const res = axios.post("http://localhost:3000/login", loginData);
  }
  return (
    <div className="d-flex flex-row gap-5 m-5 flex-wrap flex-md-nowrap align-content-center">
      <Form className="border-1 col-sm-12 col-md-6" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={loginData.email} onChange={handleChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="w-50 d-sm-flex flex-column">
        <h1>Login</h1>
        <p>
          Welcome back! Log in to explore our Bookstore, browse new arrivals,
          track your orders, and discover your next favorite read.
        </p>
      </div>
    </div>
  );
}
