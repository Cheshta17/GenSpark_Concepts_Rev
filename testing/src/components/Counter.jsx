import React, { useState, useTransition } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition(); // React Fiber feature

  const increment = () => {
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment} disabled={isPending}>
        {isPending ? "Updating..." : "Increment"}
      </button>
    </div>
  );
};

export default Counter;
