import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Category API
export const fetchCategories = () => axios.get(`${API_URL}/categories`);
export const fetchCategoryById = (cId) => axios.get(`${API_URL}/categories/${cId}`);
export const createCategory = (category) => axios.post(`${API_URL}/categories`, category);
export const updateCategory = (cId, category) => axios.put(`${API_URL}/categories/${cId}`, category);
export const deleteCategory = (cId) => axios.delete(`${API_URL}/categories/${cId}`);

// Free Question API
export const fetchFreeQuestions = () => axios.get(`${API_URL}/free-questions`);
export const createFreeQuestion = (question) => axios.post(`${API_URL}/free-questions`, question);
export const updateFreeQuestion = (qId, question) => axios.put(`${API_URL}/free-questions/${qId}`, question);
export const deleteFreeQuestion = (qId) => axios.delete(`${API_URL}/free-questions/${qId}`);

// Purchase API
export const createPurchase = (purchase) => axios.post(`${API_URL}/purchases`, purchase);
export const markPurchaseAsPaid = (purchaseId) => axios.put(`${API_URL}/purchases/pay/${purchaseId}`);
export const markPurchaseAsRefunded = (purchaseId) => axios.put(`${API_URL}/purchases/refund/${purchaseId}`);

// Question API
export const fetchQuestions = () => axios.get(`${API_URL}/questions`);
export const fetchQuestionById = (qId) => axios.get(`${API_URL}/questions/${qId}`);
export const createQuestion = (question) => axios.post(`${API_URL}/questions`, question);
export const updateQuestion = (qId, question) => axios.put(`${API_URL}/questions/${qId}`, question);
export const deleteQuestion = (qId) => axios.delete(`${API_URL}/questions/${qId}`);

// Quiz Attempt API
export const recordQuizAttempt = (quizAttempt) => axios.post(`${API_URL}/quiz-attempts`, quizAttempt);
export const fetchAttemptsByUser = (userId) => axios.get(`${API_URL}/quiz-attempts/user/${userId}`);

// Set API
export const fetchSets = () => axios.get(`${API_URL}/sets`);
export const fetchSetById = (setId) => axios.get(`${API_URL}/sets/${setId}`);
export const createSet = (set) => axios.post(`${API_URL}/sets`, set);
export const updateSet = (setId, set) => axios.put(`${API_URL}/sets/${setId}`, set);
export const deleteSet = (setId) => axios.delete(`${API_URL}/sets/${setId}`);

// User API
export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const fetchUserById = (userId) => axios.get(`${API_URL}/users/${userId}`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUsers = (userId, user) => axios.put(`${API_URL}/users/${userId}`, user);
export const deleteUser = (userId) => axios.delete(`${API_URL}/users/${userId}`);

// Generate Real-Time Test
export const generateRealTimeTest = (userId, categoryName, totalMarks) =>
  axios.post(`${API_URL}/real-time-test/generate`, {
    userId,
    categoryName,
    totalMarks,
  });

// Check if User Has Paid for Real-Time Test
export const checkUserPayment = (userId) =>
  axios.get(`${API_URL}/real-time-test/check-payment`, {
    params: { userId },
  });

// Get Real-Time Test Details
export const getRealTimeTestDetails = (userId, categoryName) =>
  axios.get(`${API_URL}/real-time-test/details`, {
    params: { userId, categoryName },
  });
  
// ========== AUTH APIs ==========

// Sign Up
export const signUpUser = (user) =>
    axios.post(`${API_URL}/users/signup`, user);
  
  // Email Verification
  export const verifyEmail = (email, code) =>
    axios.post(`${API_URL}/users/verify`, null, {
      params: { email, code },
    });
  
  // Login
  export const loginUser = (user) =>
    axios.post(`${API_URL}/users/login`, user);
  
  // Logout
  export const logoutUser = () =>
    axios.post(`${API_URL}/users/logout`);
  
  // Forgot Password
  export const forgotPassword = (email) =>
    axios.post(`${API_URL}/users/forgot-password`, null, {
      params: { email },
    });
  
  // Reset Password
  export const resetPassword = (email, code, newPassword) =>
    axios.post(`${API_URL}/users/reset-password`, null, {
      params: { email, code, newPassword },
    });
  
  // Update User Profile
  export const updateUser = (userId, user, currentPassword) =>
    axios.put(`${API_URL}/users/update/${userId}`, user, {
      params: { currentPassword },
    });
  
  // Verify New Email (after user updates their email)
  export const verifyEmailUpdate = (email, code) =>
    axios.post(`${API_URL}/users/verify-email-update`, null, {
      params: { email, code },
    });
  
  // ========== OAUTH2 ==========
  
  // Replace with your actual OAuth2 config
  const OAUTH2_AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
  const CLIENT_ID = '379686626116-v84ksb84h5ppvhtkoep8t1c4jfhkaevd.apps.googleusercontent.com';
  const REDIRECT_URI = 'http://localhost:5173/callback';
  const SCOPE = 'openid email profile';
  
  // Start OAuth2 Login
  export const initiateOAuth2Login = () => {
    const url = `${OAUTH2_AUTHORIZATION_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPE)}`;
    window.location.href = url;
  };