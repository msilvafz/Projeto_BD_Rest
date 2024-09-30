import { Outlet } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

const MainLayout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
