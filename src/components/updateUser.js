//Note: Won't work

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [ID, setID] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [position, setPosition] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      id,
      ID,
      fname,
      lname,
      position,
      gender,
      address,
      contactno,
      email,
      password,
    };

    axios.put("http://localhost:3000/updateUser/" + ID, updatedUser)
      .then((res) => {
        if (res.data.status === "ok") {
          navigate("/");
        } else {
          alert("Not updated");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error updating user");
      });

    if (userType === "Admin" && secretKey !== "Laverne123*") {
      alert("Invalid Admin!");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            Update the user as
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType === "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="ID"
              value={data.ID} onChange={e => setID({ ...values, ID: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={data.fname} onChange={e => setFname({ ...values, fname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={data.lname} onChange={e => setLname({ ...values, lname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Position</label>
            <input
              type="text"
              className="form-control"
              placeholder="Position"
              value={data.position} onChange={e => setPosition({ ...values, position: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Gender</label>
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              value={data.gender} onChange={e => setGender({ ...values, gender: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={data.address} onChange={e => setAddress({ ...values, address: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Contact Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Contact Number"
              value={data.contactno} onChange={e => setContactNo({ ...values, contactno: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={data.email} onChange={e => setEmail({ ...values, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={data.password} onChange={e => setPassword({ ...values, password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-success">Update</button>
            <p className="forgot-password text-right">
              Done update? <a href="/sign-in">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>

  )
};

export default UpdateUser;