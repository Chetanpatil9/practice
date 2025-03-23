import React, { useState } from "react";
import ChildA from "./ChildA";

const Parents = () => {
    const [fName, setfName] = useState("Chetan");
    const [lName, setlName] = useState("Patil");
  return (
    <>
      <div>This is a Parents component</div>
      <br />
      <ChildA fName={fName} lName={lName} />
    </>
  )
}

export default Parents