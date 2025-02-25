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
import QuestionForm from "./components/AdminComponents/QuestionForm";
import QuestionList from "./components/AdminComponents/QuestionList";
import UserForm from "./components/AdminComponents/UserForm";
import UserList from "./components/AdminComponents/UserList";
import SubscriptionForm from "./components/AdminComponents/SubscriptionForm";
import SubscriptionList from "./components/AdminComponents/SubscriptionList";


const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/signin", "/signup", "/plansub"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  // Admin Panel State (For Editing Forms)
  const [editingUser, setEditingUser] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingSubscription, setEditingSubscription] = useState(null);

  return (
    <>
      {shouldShowHeader && <Nav />}
      <Routes>
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
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/categories" element={<CategoryList />} />
        <Route path="/admin/questions" element={<QuestionList />} />
        <Route path="/admin/subscriptions" element={<SubscriptionList />} />
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
