import React, { lazy, Suspense, useState, useTransition } from "react";
import Modal from "./components/Modal";
import RefComponent from "./components/RefComponent";
import ForwardRefComponent from "./components/ForwardRefComponent";

const LazyComponent = lazy(() => import("./components/LazyComponent")); // Lazy Loaded

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition(); // Concurrent Mode

  return (
    <div className="container">
      <h1 className="mt-3">React Features</h1>

      {/* Portal (Modal) */}
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}

      {/* useRef Example */}
      <RefComponent />

      {/* ForwardRef Example */}
      <ForwardRefComponent />

      {/* Suspense for Lazy Loading */}
      <Suspense fallback={<div>Loading Component...</div>}>
        <LazyComponent />
      </Suspense>

      {/* Concurrent Mode Example */}
      <button
        className="btn btn-secondary mt-2"
        onClick={() => {
          startTransition(() => {
            console.log("Concurrent mode activated");
          });
        }}
      >
        Concurrent Mode Action
      </button>
    </div>
  );
};

export default App;
