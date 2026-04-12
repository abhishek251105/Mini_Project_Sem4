import { create } from 'zustand';
import api from '../services/api';
import publicApi from '../services/publicApi';

const useQuizStore = create((set) => ({
  quizzes: [],
  currentQuiz: null,
  results: [],

  createQuiz: async (quizData) => {
    const res = await api.post('/api/quiz/create', quizData);
    return res.data;
  },

  getQuizById: async (id) => {
    const res = await publicApi.get(`/api/quiz/${id}`);
    set({ currentQuiz: res.data });
    return res.data;
  },

  submitQuiz: async (id, submissionData) => {
    const res = await publicApi.post(`/api/quiz/${id}/submit`, submissionData);
    return res.data;
  },

  getQuizResults: async (id, branch = '') => {
    const res = await api.get(`/api/quiz/${id}/results${branch ? `?branch=${branch}` : ''}`);
    set({ results: res.data });
    return res.data;
  }
}));

export default useQuizStore;
