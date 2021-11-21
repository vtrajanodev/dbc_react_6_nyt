import { ApiContextProvider } from "./context/ApiContext";
import { AuthContextProvider } from "./context/AuthContext";
import { LinkRoutes } from "./Routes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ApiContextProvider>
          <LinkRoutes />
        </ApiContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
