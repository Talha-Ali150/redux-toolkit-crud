import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

export default function App() {
  return (
    <div>
      <h1>Redux toolkit CRUD</h1>

      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}
