import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Import public components
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import VerifyEmailPage from "./components/VerifyEmailPage";
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
import DefaultPage from "./pages/ModelSetPage";
import QuestionGeneratePage from "./pages/QuestionGeneratePage";
import OAuthCallback from "./components/OAuthCallback";
import RandomPage from "./components/RandomPage";

// Admin Components
import AdminPanel from "./components/AdminPanel";
import CategoryList from "./components/AdminComponents/CategoryList";
import CategoryForm from "./components/AdminComponents/CategoryForm";
import QuestionList from "./components/AdminComponents/QuestionList";
import QuestionForm from "./components/AdminComponents/QuestionForm";
import UserList from "./components/AdminComponents/Userlist";
import PurchaseList from "./components/AdminComponents/PurchaseList";
import PurchaseForm from "./components/AdminComponents/PurchaseForm";
import QuizAttemptList from "./components/AdminComponents/QuizAttemptList";
import SetList from "./components/AdminComponents/SetList";
import SetForm from "./components/AdminComponents/SetForm";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin", "/signup", "/plansub"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  const handleLoginSuccess = (response) => {
    console.log("Google login success:", response);
  };

  const handleLoginFailure = (error) => {
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
        <Route path="/random" element={<RandomPage />} />
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
        <Route path="/entrance/:course/model/:set" element={<DefaultPage />} />
        <Route path="/entrance/:course/real-time/set" element={<QuestionGeneratePage />} />
        <Route path="/test-guides/:test/model/:set" element={<DefaultPage />} />
        <Route path="/test-guides/:test/real-time/set" element={<QuestionGeneratePage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedAdminRoute><AdminPanel /></ProtectedAdminRoute>}>
          <Route path="categories" element={<CategoryList />} />
          <Route path="add-category" element={<CategoryForm />} />
          <Route path="questions" element={<QuestionList />} />
          <Route path="add-question" element={<QuestionForm />} />
          <Route path="users" element={<UserList />} />
          <Route path="purchases" element={<PurchaseList />} />
          <Route path="add-purchase" element={<PurchaseForm />} />
          <Route path="quiz-attempts" element={<QuizAttemptList />} />
          <Route path="sets" element={<SetList />} />
          <Route path="add-set" element={<SetForm />} />
        </Route>
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
