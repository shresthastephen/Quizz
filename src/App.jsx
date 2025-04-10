import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

// Import public components
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import VerifyEmailPage from "./components/VerifyEmailPage";
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
import SetPage from "./pages/SetPage";
import DefaultPage from "./pages/DefaultPage";
import QuestionGeneratePage from "./pages/QuestionGeneratePage";
import OAuthCallback from "./components/OAuthCallback";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin", "/signup", "/plansub"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  const handleLoginSuccess = (response) => {
    // Handle the response from Google login (e.g., send token to your backend)
    console.log("Google login success:", response);
  };

  const handleLoginFailure = (error) => {
    // Handle any errors from Google login
    console.log("Google login error:", error);
  };

  return (
    <>
      {shouldShowHeader && <Nav />}
      <Routes>
        {/* Public Routes */}
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
        <Route
          path="/aboutus"
          element={
            <>
              <AboutUs /> <Footer />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/entrance/:course" element={<CoursePage />} />
        <Route path="/entrance/:course/:type" element={<QuestionTypePage />} />
        <Route path="/testguides" element={<TestGuides />} />
        <Route path="/test-guides/:test" element={<TestGuidePage />} />
        <Route path="/test-guides/:test/:type" element={<TestTypePage />} />
        <Route path="/plansub" element={<PlanSub />} />
        <Route path="/entrance/:course/old/:set" element={<SetPage />} />
        <Route path="/test-guides/:test/old/:set" element={<SetPage />} />
        <Route path="/callback" element={<OAuthCallback />} />
        <Route
          path="/entrance/:course/model/default"
          element={<DefaultPage />}
        />
        <Route
          path="/entrance/:course/real-time/set"
          element={<QuestionGeneratePage />}
        />
        <Route
          path="/test-guides/:test/model/default"
          element={<DefaultPage />}
        />
        <Route
          path="/test-guides/:test/real-time/set"
          element={<QuestionGeneratePage />}
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId="379686626116-v84ksb84h5ppvhtkoep8t1c4jfhkaevd.apps.googleusercontent.com">
      <Router>
        <AppContent />
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
