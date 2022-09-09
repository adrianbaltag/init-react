import React from "react";

export function Students(props) {
  //destructuring
  const { firstName, lastName } = props;
  return (
    <>
      <h3>
        Student name: {firstName} {lastName}
      </h3>
    
    </>
  );
}
