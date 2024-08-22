import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Nav from "../components/Nav/Nav";
import LoadingSpinner from "../routes/LoadingSpinner";

const Home = lazy(() => import("../routes/Home"));
const Login = lazy(() => import("../routes/Login"));
const Single = lazy(() => import("../routes/Single"));
const Collection = lazy(() => import("../routes/Collection"));

const RouteController = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/single/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Single />
            </Suspense>
          }
        />
        <Route
          path="/collection"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Collection />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default RouteController;
