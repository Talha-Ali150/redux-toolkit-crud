import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";

function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: "20",
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={values.name}
            onChange={(event) =>
              setValues({ ...values, name: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>User Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={(event) =>
              setValues({ ...values, email: event.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add User
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
