import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes>

          <Route path="login/*" element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>

            <Route path="/*" element={<LoginPage />} />
              </Routes>

            </PublicRoute>
          } />

          <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } />
          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
