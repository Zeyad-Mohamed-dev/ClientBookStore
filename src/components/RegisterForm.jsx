import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function RegisterForm({registerData, handleChange, handleSubmit}) {
  return (
    <div className="d-flex flex-row gap-5 m-5">
      <Form className="border-1 col-sm-6" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={registerData.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={registerData.name}
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={registerData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="w-50 d-none d-md-flex flex-column">
        <h1>Register</h1>
        <p>
          Create your account today to join our Bookstore community, save your
          favorite titles, track your orders, and get personalized book
          recommendations.
        </p>
      </div>
    </div>
  )
}
