import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function UserCard(props) {
  return (
    <Card bg="dark" text="white" className="mb-2">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.email}</Card.Text>
        </div>
        <div>
          <AiOutlineEdit onClick={props.editFunc} className="me-2" />
          <AiOutlineDelete onClick={props.deleteFunc} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
