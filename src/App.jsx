import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MockTest from "./components/MockTest";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Entrance from "./components/Entrance";
import AdminPanel from "./components/AdminPanel";
import CardSlider from "./components/CardSlider";
import Subscription from "./components/Subscription";
import PlanSub from "./components/PlanSub";
import TestGuides from "./components/TestGuides";
import Footer from "./components/Footer";
const AppContent = () => {
  const location = useLocation();

  const hideHeaderRoutes = ["/signin", "/signup", "/plansub"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Nav />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CardSlider />
              <Subscription />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/testguides" element={<TestGuides />} />
        <Route path="/plansub" element={<PlanSub />} />
        <Route path="/AboutUs" element={<AboutUs />} /> 

        {/* <Route path="/adminpanel" element={<AdminPanel />} /> */}
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
