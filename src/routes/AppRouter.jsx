import { HeroesApp } from "../HeroesApp";
import {
  Route,
  Navigate,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { MarvelPage, DcPage } from "../heroes/pages";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
