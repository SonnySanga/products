import React from "react";

const SignleCategory = ({ params }) => {
  return (
    <div>
      <h2>{`This is my cloths ${params.id}`}</h2>
    </div>
  );
};

export default SignleCategory;
