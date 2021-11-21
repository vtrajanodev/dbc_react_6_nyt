import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ApiContextProvider } from "./context/ApiContext";
import { LinkRoutes } from "./Routes";

function App() {
  return (
    <>
        <ApiContextProvider>
          <LinkRoutes />
        </ApiContextProvider>

    </>
  );
}

export default App;
