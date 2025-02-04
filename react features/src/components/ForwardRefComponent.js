import React, { forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} className="form-control" {...props} />
));

const ForwardRefComponent = () => {
  const inputRef = useRef(null);

  return (
    <div className="mt-3">
      <h3>ForwardRef Example</h3>
      <CustomInput ref={inputRef} placeholder="ForwardRef Input" />
      <button className="btn btn-warning mt-2" onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
};

export default ForwardRefComponent;
