import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Health } from "./pages/Health/Health";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Politics } from "./pages/Politics/Politics";
import { Science } from "./pages/Science/Science";
import { World } from "./pages/World/World";

export const LinkRoutes = () => {

    
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index path="/login" element={<Login />} />
                <Route  path="/home" element={<Home />} />
                <Route  path="/science" element={<Science />} />
                <Route  path="/health" element={<Health />} />
                <Route  path="/politics" element={<Politics />} />
                <Route  path="/world" element={<World />} />
            </Routes>
        </BrowserRouter>
    );
}