import api from './api';

export const getQuestion = async () => {
  const response = await api.get('/api/Survey/question');
  return response.data;
};

export const submitSurveyAnswers = async (answers) => {
  const response = await api.post('api/Survey/answer', answers);
  return response.data;
};


export const getSubmitted = async () => {
  const response = await api.get('/api/Survey/submitted');
  return response.data;
};

export const getSubmittedById = async (id) => {
  const response = await api.get(`/api/Survey/submitted/${id}`);
  return response.data;
};


