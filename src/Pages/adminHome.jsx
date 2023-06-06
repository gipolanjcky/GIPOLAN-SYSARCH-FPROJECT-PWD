import React, { useEffect, useState } from "react";

export default function AdminHome({ userData }) {

  //setting state
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);


  //fetching all user
  const getAllUser = () => {
    fetch("http://localhost:3000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

  //logout
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3>Welcome Admin</h3>
        <p>User Data</p>
        <table style={{ width: 600 }}>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Gender</th>
              <th>Skills</th>
              <th>Disability</th>
              <th>Address</th>
              <th>Contact No.</th>
              <th>Email</th>
              <th>User Type</th>
            </tr>
          </thead>
          {data.map(i => {
            return (
              <tr>
                <td>{i.fname}</td>
                <td>{i.lname}</td>
                <td>{i.gender}</td>
                <td>{i.skills}</td>
                <td>{i.disability}</td>
                <td>{i.address}</td>
                <td>{i.contactno}</td>
                <td>{i.email}</td>
                <td>{i.userType}</td>
                <td>
                </td>
              </tr>
            )
          })}
        </table>
        <br/>
        <button onClick={logOut} className="btn btn-primary">Log Out</button>
      </div>
    </div>
  );
}


