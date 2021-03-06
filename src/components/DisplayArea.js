import React from "react";
import "../styles/DisplayArea.css"

function DisplayArea({ employees, handleSort }) {
  return (
    <table>
      <thead>
        <tr> 
          <th className="tableColumns"
            onClick={() => {
              handleSort("name");
            }}
          >
            Name
          </th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Phone Number</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {employees[0] !== undefined && employees[0].id !== undefined ? (
          employees.map((employees) => {
            return (
              <tr>
                <td>
                  {employees.name.title} {employees.name.first}{" "}
                  {employees.name.last}
                </td>
                <td>{employees.email}</td>
                <td>{employees.dob.date.split("").slice(0, 10).join("")}</td>
                <td>{employees.phone}</td>
                <td>
                  <img src={employees.picture.thumbnail} alt="Profile" />
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}
export default DisplayArea;
