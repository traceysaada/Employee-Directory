import React from "react";

function DisplayArea({employees}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Phone Number</th>
                    <th>Image</th>
                </tr>
            </thead>
        </table>
    )
}
export default DisplayArea;