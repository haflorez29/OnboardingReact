import React from "react";

function SeniorInitial({array, style}) {
  return (
    <div className="p-1">
      <ul className={`list-group ${style} table-secondary`}>
        {array.map((item) => {
          return <li className="text-center p-1 list">{item}</li>;
        })
        }
      </ul>
    </div>
  );
}

export default SeniorInitial;
