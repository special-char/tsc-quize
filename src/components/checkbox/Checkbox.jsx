import React from "react";

const Checkbox = ({ name, value, options }) => {
  return (
    <div>
      {options.map((x) => (
        <div>
          <input type="checkbox" name={name} id={x.id} />
          <span>{x.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
