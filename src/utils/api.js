import axios from 'axios';

// Configurer l'instance axios avec l'URL de base
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplacez par l'URL de votre backend
});

// ==================== Gestion des Tâches ====================

// Fonction pour obtenir la liste des tâches
export const getTasks = async () => {
  try {
    const response = await api.get('/tasks');
    return response.data; // Retourne les données des tâches
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches', error);
    throw error;
  }
};

// Fonction pour ajouter une nouvelle tâche
export const addTask = async (taskData) => {
  try {
    const response = await api.post('/tasks', taskData);
    return response.data; // Retourne la tâche ajoutée
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la tâche', error);
    throw error;
  }
};

// Fonction pour mettre à jour une tâche
export const updateTask = async (taskId, taskData) => {
  try {
    const response = await api.put(`/tasks/${taskId}`, taskData);
    return response.data; // Retourne la tâche mise à jour
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la tâche', error);
    throw error;
  }
};

// Fonction pour supprimer une tâche
export const deleteTask = async (taskId) => {
  try {
    await api.delete(`/tasks/${taskId}`);
  } catch (error) {
    console.error('Erreur lors de la suppression de la tâche', error);
    throw error;
  }
};

// ==================== Gestion des Utilisateurs ====================

// Fonction pour obtenir la liste des utilisateurs
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data; // Retourne les données des utilisateurs
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs', error);
    throw error;
  }
};

// Fonction pour ajouter un nouvel utilisateur
export const addUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data; // Retourne l'utilisateur ajouté
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
    throw error;
  }
};

// Fonction pour mettre à jour un utilisateur
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data; // Retourne l'utilisateur mis à jour
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
    throw error;
  }
};

// Fonction pour supprimer un utilisateur
export const deleteUser = async (userId) => {
  try {
    await api.delete(`/users/${userId}`);
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur', error);
    throw error;
  }
};

// ==================== Authentification ====================

// Fonction pour se connecter
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data; // Retourne les données de l'utilisateur connecté
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    throw error;
  }
};

// Fonction pour s'inscrire
export const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data; // Retourne l'utilisateur inscrit
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
    throw error;
  }
};

// D'autres fonctions d'API peuvent être ajoutées ici
