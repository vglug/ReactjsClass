import React from "react";

function Students() {
  const names = ["john", "peter", "bob", "john"];
  const members = [
    {
      id: 1,
      name: "John",
      status: true,
    },
    {
      id: 2,
      name: "Paul",
      status: false,
    },
    {
      id: 3,
      name: "Bob",
      status: false,
    },
    {
      id: 4,
      name: "Alice",
      status: true,
    },
  ];
  return (
    <>
      <div>Students</div>
      <ul>
        {members.map((member, index) => (
          <li key={member.id}>
            {index} : {member.name}
          </li>
        ))}
      </ul>

      <ul>
        {names.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
}

export default Students;
