import { createContext, useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Parent from "./pages/ParentChild/Parent";
import Child from "./pages/ParentChild/Child";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthContext } from "./Context/AuthContext";
import { Home, About } from "./pages";
import ContactUs from "./pages/ContactUs";

function App() {
  const { loggedIn, jwtToken } = useContext(AuthContext);
  return (
    <>
      {/* Componenets  Wrapping */}
      {/* <Parent>
        <Child />
        <Child />

        <Child />
      </Parent> */}

      {/* Layout  */}
      {/* <Layout>
        <About />
      </Layout> */}
      {/* <div className="content">Body</div> */}

      {/* Routes */}

      <Routes>
        <Route path="/" element={<ProtectedRoutes priya={loggedIn} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />

      {children}
      <Footer />
    </>
  );
};

const ProtectedRoutes = ({ priya }) => {
  if (priya) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }
  return <Navigate to={"/login"} />;
};
