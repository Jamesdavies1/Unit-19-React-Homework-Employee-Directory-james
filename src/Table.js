import React, { useEffect, useState } from "react";

const Table = ({ users }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name: { first, last } }) => (
          <tr>
            <th>{first}</th>
            <td>{last}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
