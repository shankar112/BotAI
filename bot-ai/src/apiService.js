// apiService.js
import mockData from './data/mockData.json';

export const fetchRandomResponse = () => {
  // Get a random response from mockData
  const randomIndex = Math.floor(Math.random() * mockData.length);
  return mockData[randomIndex];
};

export const fetchResponseByQuestionId = (questionId) => {
    // Find the response object with the matching questionId
    const response = mockData.find((item) => item.id === questionId);
    return response;
};