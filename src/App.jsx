import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MockTest from "./components/MockTest";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Entrance from "./components/Entrance";
import CoursePage from "./pages/CoursePage";
import QuestionTypePage from "./pages/QuestionTypePage";
import AdminPanel from "./components/AdminPanel";
import CardSlider from "./components/CardSlider";
import Subscription from "./components/Subscription";
import PlanSub from "./components/PlanSub";
import TestGuides from "./components/TestGuides";
import TestGuidePage from "./pages/TestGuidePage";
import TestTypePage from "./pages/TestTypePage";
import Footer from "./components/Footer";

// Admin Components
import CategoryForm from "./components/AdminComponents/CategoryForm";
import CategoryList from "./components/AdminComponents/CategoryList";
import FreeQuestionForm from "./components/AdminComponents/FreeQuestionForm";
import FreeQuestionList from "./components/AdminComponents/FreeQuestionList";
import UserForm from "./components/AdminComponents/UserForm";
import UserList from "./components/AdminComponents/UserList";
import PurchaseForm from "./components/AdminComponents/PurchaseForm";
import PurchaseList from "./components/AdminComponents/PurchaseList";
import QuizAttemptForm from "./components/AdminComponents/QuizAttemptForm";
import QuizAttemptList from "./components/AdminComponents/QuizAttemptList";
import SetForm from "./components/AdminComponents/SetForm";
import SetList from "./components/AdminComponents/SetList";
import QuestionList from "./components/AdminComponents/QuestionList";
import QuestionForm from "./components/AdminComponents/QuestionForm";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin", "/signup", "/plansub"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  // Admin Panel State (For Editing Forms)
  const [editingUser, setEditingUser] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingPurchase, setEditingPurchase] = useState(null);
  const [editingQuizAttempt, setEditingQuizAttempt] = useState(null);
  const [editingSet, setEditingSet] = useState(null);

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
        <Route path="/entrance/:course" element={<CoursePage />} />
        <Route path="/entrance/:course/:type" element={<QuestionTypePage />} />
        <Route path="/testguides" element={<TestGuides />} />
        <Route path="/test-guides/:test" element={<TestGuidePage />} />
        <Route path="/test-guides/:test/:type" element={<TestTypePage />} />
        <Route path="/plansub" element={<PlanSub />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/category-form" element={<CategoryForm />} />
        <Route path="/admin/categories" element={<CategoryList />} />
        <Route path="/admin/free-question-form" element={<FreeQuestionForm />} />
        <Route path="/admin/free-question-list" element={<FreeQuestionList />} />
        <Route path="/admin/user-form" element={<UserForm />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/purchase-form" element={<PurchaseForm />} />
        <Route path="/admin/purchase-list" element={<PurchaseList />} />
        <Route path="/admin/quiz-attempt-form" element={<QuizAttemptForm />} />
        <Route path="/admin/quiz-attempt-list" element={<QuizAttemptList />} />
        <Route path="/admin/set-form" element={<SetForm />} />
        <Route path="/admin/set-list" element={<SetList />} />
        <Route path="/admin/question-form" element={<QuestionForm />} />
        <Route path="/admin/question-list" element={<QuestionList />} />
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
