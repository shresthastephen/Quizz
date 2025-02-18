// src/services/api.js
import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:8080/api';

// User-related API functions
export const getUsers = () => axios.get(`${API_URL}/users`);

export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);

export const createUser = (user) => axios.post(`${API_URL}/users`, user);

export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);

export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Category-related API functions
export const getCategories = () => axios.get(`${API_URL}/categories`);

export const getCategoryById = (id) => axios.get(`${API_URL}/categories/${id}`);

export const createCategory = (category) => axios.post(`${API_URL}/categories`, category);

export const updateCategory = (id, category) => axios.put(`${API_URL}/categories/${id}`, category);

export const deleteCategory = (id) => axios.delete(`${API_URL}/categories/${id}`);

// Question-related API functions
export const getQuestions = () => axios.get(`${API_URL}/questions`);

export const getQuestionById = (id) => axios.get(`${API_URL}/questions/${id}`);

export const createQuestion = (question) => axios.post(`${API_URL}/questions`, question);

export const updateQuestion = (id, question) => axios.put(`${API_URL}/questions/${id}`, question);

export const deleteQuestion = (id) => axios.delete(`${API_URL}/questions/${id}`);

// Subscription-related API functions
export const getSubscriptions = () => axios.get(`${API_URL}/subscriptions`);

export const getSubscriptionById = (id) => axios.get(`${API_URL}/subscriptions/${id}`);

export const createSubscription = (subscription) => axios.post(`${API_URL}/subscriptions`, subscription);

export const updateSubscription = (id, subscription) => axios.put(`${API_URL}/subscriptions/${id}`, subscription);

export const deleteSubscription = (id) => axios.delete(`${API_URL}/subscriptions/${id}`);

// Quiz Attempt-related API functions
export const getQuizAttempts = () => axios.get(`${API_URL}/quiz-attempts`);

export const getQuizAttemptById = (id) => axios.get(`${API_URL}/quiz-attempts/${id}`);

export const createQuizAttempt = (quizAttempt) => axios.post(`${API_URL}/quiz-attempts`, quizAttempt);

export const updateQuizAttempt = (id, quizAttempt) => axios.put(`${API_URL}/quiz-attempts/${id}`, quizAttempt);

export const deleteQuizAttempt = (id) => axios.delete(`${API_URL}/quiz-attempts/${id}`);

// User-related API functions
export const signUpUser = (user) => axios.post(`${API_URL}/users/signup`, user);
export const loginUser = (user) => axios.post(`${API_URL}/users/login`, user);
export const logoutUser = () => axios.post(`${API_URL}/users/logout`);
export const editUser = (id, user) => axios.put(`${API_URL}/users/update/${id}`, user);

// Question-related API functions
export const getQuestionsByCategory = (cName) => axios.get(`${API_URL}/questions/fetch`, { params: { cName } });