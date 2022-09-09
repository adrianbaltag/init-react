import React from "react";
import { Welcome } from "./Welcome";
import { Students } from "./Students";

// Render Components in this Component
const students = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Doe-One",
  },
  {
    firstName: "John",
    lastName: "Doe-Two",
  },
];

export function App() {
  return (
    <>
      <Welcome />


      {/* students */}
      {students.map((student) => <Students {...student} />)}
      
      
    </>
  );
}
