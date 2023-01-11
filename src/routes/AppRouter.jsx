import { HeroesApp } from "../HeroesApp";
import {
  Route,
  Navigate,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="marvel" element={<HeroesApp />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
