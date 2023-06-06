import React from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="auth-inner" style={{ width: "auto" }}>
        <div>
          <h3>Hi! Welcome to PWD Jobs, {userData.fname} {userData.lname}</h3>
          <br/>
          <p>Here are the lists of possible jobs according to your disability</p>
          <table style={{ width: 600 }}>
            <thead>
              <tr>
                <th>Job Listing</th>
              </tr>
            </thead>
            <tr>
              <td>IT Professional</td>
            </tr>
            <tr>
              <td>Product Manager</td>
            </tr>
            <tr>
              <td>Bookkeeper</td>
            </tr>
            <tr>
              <td>Credit Counselor</td>
            </tr>
            <tr>
              <td>Human Resources</td>
            </tr>
            <tr>
              <td>Recruiter</td>
            </tr>
            <tr>
              <td>Mental Health Counselor</td>
            </tr>
            <tr>
              <td>Addiction Counselor</td>
            </tr>
            <tr>
              <td>Tutor</td>
            </tr>
            <tr>
              <td>Artist</td>
            </tr>
            <tr>
              <td>Musician</td>
            </tr>
          </table>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
