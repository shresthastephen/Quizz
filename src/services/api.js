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
export const updateUser = (userId, user) => axios.put(`${API_URL}/users/${userId}`, user);
export const deleteUser = (userId) => axios.delete(`${API_URL}/users/${userId}`);

// User-related API functions
export const signUpUser = (user) => axios.post(`${API_URL}/users/signup`, user);
export const loginUser = (user) => axios.post(`${API_URL}/users/login`, user);
export const logoutUser = () => axios.post(`${API_URL}/users/logout`);
export const editUser = (id, user) => axios.put(`${API_URL}/users/update/${id}`, user);