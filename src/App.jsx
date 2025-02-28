import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";

// Import public components
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MockTest from "./components/MockTest";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Entrance from "./components/Entrance";
import CoursePage from "./pages/CoursePage";
import QuestionTypePage from "./pages/QuestionTypePage";
import CardSlider from "./components/CardSlider";
import Subscription from "./components/Subscription";
import PlanSub from "./components/PlanSub";
import TestGuides from "./components/TestGuides";
import TestGuidePage from "./pages/TestGuidePage";
import TestTypePage from "./pages/TestTypePage";
import Footer from "./components/Footer";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin", "/signup", "/plansub"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Nav />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Hero /><CardSlider /><Subscription /><Footer /></>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/entrance/:course" element={<CoursePage />} />
        <Route path="/entrance/:course/:type" element={<QuestionTypePage />} />
        <Route path="/testguides" element={<TestGuides />} />
        <Route path="/test-guides/:test" element={<TestGuidePage />} />
        <Route path="/test-guides/:test/:type" element={<TestTypePage />} />
        <Route path="/plansub" element={<PlanSub />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

