import React from "react";
import UserCard from "../UserCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../features/userSlice";

export default function UsersList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  return (
    <div className="container">
      {users.length ? (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {users.map((item) => (
            <div key={item.id} className="col">
              <UserCard
                name={item.name}
                email={item.email}
                editFunc={() => navigate(`/editUser/${item.id}`)}
                deleteFunc={() => dispatch(deleteUser({ id: item.id }))}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No users to show</p>
      )}

      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/addUser")}
      >
        Add New User
      </button>
    </div>
  );
}
