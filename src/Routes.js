import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Health } from "./pages/Health/Health";
import { Home } from "./pages/Home/Home";
import { Politics } from "./pages/Politics/Politics";
import { Science } from "./pages/Science/Science";
import { World } from "./pages/World/World";

export const LinkRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route index path="/science" element={<Science />} />
                <Route index path="/health" element={<Health />} />
                <Route index path="/politics" element={<Politics />} />
                <Route index path="/world" element={<World />} />
            </Routes>
        </BrowserRouter>
    );
}