import React, { useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");
  const [disability, setDisability] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "jackyg888") {
      e.preventDefault();
      alert("Invalid Admin!");
    } else {
      e.preventDefault();

      console.log( fname, lname, gender, skills, disability, address, contactno, email, password, userType);
      fetch("http://localhost:3000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          gender: gender,
          skills: skills,
          disability: disability,
          address: address,
          contactno: contactno,
          email: email,
          password: password,
          userType: userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Successfully Register!");
          } else {
            alert("Something went wrong, try again!");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Create your account</h3>
          <div>
            Register As
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
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Gender</label>
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Skills</label>
            <input
              type="text"
              className="form-control"
              placeholder="Skills"
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Disability</label>
            <input
              type="text"
              className="form-control"
              placeholder="Disability"
              onChange={(e) => setDisability(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Contact Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Contact Number"
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/sign-in">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
