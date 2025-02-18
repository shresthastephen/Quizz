import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MockTest from "./components/MockTest";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Entrance from "./components/Entrance";
import BcaPage from "./pages/BcaPage";
import CsitPage from "./pages/CsitPage";
import BimPage from "./pages/BimPage";
import BitPage from "./pages/BitPage";
import BcePage from "./pages/BcePage";
import BdsPage from "./pages/BdsPage";
import AdminPanel from "./components/AdminPanel";
import CardSlider from "./components/CardSlider";
import Subscription from "./components/Subscription";
import PlanSub from "./components/PlanSub";
import TestGuides from "./components/TestGuides";
import Ielts from "./pages/Ielts";
import Sat from "./pages/Sat";
import Pte from "./pages/Pte";
import Footer from "./components/Footer";

// Admin Components
import UserList from "./components/AdminComponents/Userlist";
import UserForm from "./components/AdminComponents/UserForm";
import CategoryList from "./components/AdminComponents/CategoryList";
import CategoryForm from "./components/AdminComponents/CategoryForm";
import QuestionList from "./components/AdminComponents/QuestionList";
import QuestionForm from "./components/AdminComponents/QuestionForm";
import SubscriptionList from "./components/AdminComponents/SubscriptionList";
import SubscriptionForm from "./components/AdminComponents/SubscriptionForm";
import QuizAttemptList from "./components/AdminComponents/QuizAttemptList";
import QuizAttemptForm from "./components/AdminComponents/QuizAttemptForm";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin", "/signup", "/plansub"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  // Admin Panel State (For Editing Forms)
  const [editingUser, setEditingUser] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [editingQuizAttempt, setEditingQuizAttempt] = useState(null);

  // Handlers for Save (Reset Editing State)
  const handleUserSave = () => setEditingUser(null);
  const handleCategorySave = () => setEditingCategory(null);
  const handleQuestionSave = () => setEditingQuestion(null);
  const handleSubscriptionSave = () => setEditingSubscription(null);
  const handleQuizAttemptSave = () => setEditingQuizAttempt(null);

  // Handlers for Edit (Set Editing State)
  const handleEditUser = (user) => setEditingUser(user);
  const handleEditCategory = (category) => setEditingCategory(category);
  const handleEditQuestion = (question) => setEditingQuestion(question);
  const handleEditSubscription = (subscription) => setEditingSubscription(subscription);
  const handleEditQuizAttempt = (quizAttempt) => setEditingQuizAttempt(quizAttempt);

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/entrance/csit" element={<CsitPage />} />
        <Route path="/entrance/bim" element={<BimPage />} />
        <Route path="/entrance/bit" element={<BitPage />} />
        <Route path="/entrance/bce" element={<BcePage />} />
        <Route path="/entrance/bds" element={<BdsPage />} />
        <Route path="/entrance/bca" element={<BcaPage />} />
        <Route path="/testguides" element={<TestGuides />} />
        <Route path="/test-guides/ielts" element={<Ielts />} />
        <Route path="/test-guides/sat" element={<Sat />} />
        <Route path="/test-guides/pte" element={<Pte />} />
        <Route path="/plansub" element={<PlanSub />} />
        <Route
          path="/AboutUs"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />

        {/* Admin Panel Routes */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/users" element={<UserList onEdit={handleEditUser} />} />
        <Route path="/admin/categories" element={<CategoryList onEdit={handleEditCategory} />} />
        <Route path="/admin/questions" element={<QuestionList onEdit={handleEditQuestion} />} />
        <Route path="/admin/subscriptions" element={<SubscriptionList onEdit={handleEditSubscription} />} />
        <Route path="/admin/quiz-attempts" element={<QuizAttemptList onEdit={handleEditQuizAttempt} />} />
      </Routes>

      {/* Admin Panel Forms (Conditional Rendering) */}
      {location.pathname.startsWith("/admin") && (
        <Layout>
          {location.pathname === "/admin/users" && (
            <>
              <h2>Create/Update User</h2>
              <UserForm userToEdit={editingUser} onSave={handleUserSave} />
            </>
          )}

          {location.pathname === "/admin/categories" && (
            <>
              <h2>Create/Update Category</h2>
              <CategoryForm categoryToEdit={editingCategory} onSave={handleCategorySave} />
            </>
          )}

          {location.pathname === "/admin/questions" && (
            <>
              <h2>Create/Update Question</h2>
              <QuestionForm questionToEdit={editingQuestion} onSave={handleQuestionSave} />
            </>
          )}

          {location.pathname === "/admin/subscriptions" && (
            <>
              <h2>Create/Update Subscription</h2>
              <SubscriptionForm subscriptionToEdit={editingSubscription} onSave={handleSubscriptionSave} />
            </>
          )}

          {location.pathname === "/admin/quiz-attempts" && (
            <>
              <h2>Create/Update Quiz Attempt</h2>
              <QuizAttemptForm quizAttemptToEdit={editingQuizAttempt} onSave={handleQuizAttemptSave} />
            </>
          )}
        </Layout>
      )}
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
