import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserList from "./components/UserList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Fetch User App</h1>
          <UserList />
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
