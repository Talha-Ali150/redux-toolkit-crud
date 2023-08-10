import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../features/userSlice";

function EditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  const users = useSelector((store) => store.users);
  const updatedUsers = users.filter((item) => item.id === params.id);
  const { name, email } = updatedUsers[0];

  const [values, setValues] = useState({ name, email });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUser({ id: params.id, name: values.name, email: values.email })
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
          Edit User
        </Button>
      </Form>
    </div>
  );
}

export default EditUser;
