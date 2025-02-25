import axios from 'axios';

const API_URL = 'http://localhost:8080/admin';

export const fetchCategories = () => axios.get(`${API_URL}/categories`);
export const fetchCategoryById = (cId) => axios.get(`${API_URL}/categories/${cId}`);
export const createCategory = (category) => axios.post(`${API_URL}/categories`, category);
export const updateCategory = (cId, category) => axios.put(`${API_URL}/categories/${cId}`, category);
export const deleteCategory = (cId) => axios.delete(`${API_URL}/categories/${cId}`);

export const fetchQuestions = () => axios.get(`${API_URL}/questions`);
export const fetchQuestionById = (qId) => axios.get(`${API_URL}/questions/${qId}`);
export const createQuestion = (question) => axios.post(`${API_URL}/questions`, question);
export const updateQuestion = (qId, question) => axios.put(`${API_URL}/questions/${qId}`, question);
export const deleteQuestion = (qId) => axios.delete(`${API_URL}/questions/${qId}`);

export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const fetchUserById = (userId) => axios.get(`${API_URL}/users/${userId}`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (userId, user) => axios.put(`${API_URL}/users/${userId}`, user);
export const deleteUser = (userId) => axios.delete(`${API_URL}/users/${userId}`);

export const fetchSubscriptions = () => axios.get(`${API_URL}/subscriptions`);
export const fetchSubscriptionById = (subId) => axios.get(`${API_URL}/subscriptions/${subId}`);
export const createSubscription = (subscription) => axios.post(`${API_URL}/subscriptions`, subscription);
export const updateSubscription = (subId, subscription) => axios.put(`${API_URL}/subscriptions/${subId}`, subscription);
export const deleteSubscription = (subId) => axios.delete(`${API_URL}/subscriptions/${subId}`);

// User-related API functions
export const signUpUser = (user) => axios.post(`${API_URL}/users/signup`, user);
export const loginUser = (user) => axios.post(`${API_URL}/users/login`, user);
export const logoutUser = () => axios.post(`${API_URL}/users/logout`);
export const editUser = (id, user) => axios.put(`${API_URL}/users/update/${id}`, user);