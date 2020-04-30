import React, { useEffect, useState } from "react";

const Table = ({ users }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">gender</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
          <th scope="col">cell</th>
          <th scope="col">city</th>
          <th scope="col">state</th>
          <th scope="col">country</th>
          <th scope="col">postcode</th>
          <th scope="col">picture</th>
        </tr>
      </thead>
      <tbody>
        {users.map(
          ({
            location: { city, state, country, postcode },
            picture: { thumbnail },
            cell,
            phone,
            gender,
            email,
            name: { first, last, title }
          }) => (
            <tr>
              <td>{title}</td>
              <th>{first}</th>
              <td>{last}</td>
              <td>{gender}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{cell}</td>
              <td>{city}</td>
              <td>{state}</td>
              <td>{country}</td>
              <td>{postcode}</td>
              <td>
                <img src={thumbnail} />
              </td>

              <td></td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
