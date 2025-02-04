import React, { useRef } from "react";

const RefComponent = () => {
  const inputRef = useRef(null);

  return (
    <div className="mt-3">
      <h3>useRef Example</h3>
      <input ref={inputRef} className="form-control" type="text" placeholder="Type here..." />
      <button className="btn btn-success mt-2" onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
};

export default RefComponent;
