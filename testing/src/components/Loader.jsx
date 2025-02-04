import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyLoaded"));

const Loader = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComponent />
    </Suspense>
  );
};

export default Loader;
