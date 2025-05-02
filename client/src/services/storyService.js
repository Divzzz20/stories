import axios from 'axios';

const API_URL = '/api/stories';

// Get all active stories (for users)
export const getStories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching stories:', error);
    throw error;
  }
};

// Get all stories including inactive (for admin)
export const getAllStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all stories:', error);
    throw error;
  }
};

// Get a single story by ID
export const getStoryById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching story ${id}:`, error);
    throw error;
  }
};

// Create a new story
export const createStory = async (storyData) => {
  try {
    const response = await axios.post(API_URL, storyData);
    return response.data;
  } catch (error) {
    console.error('Error creating story:', error);
    throw error;
  }
};

// Update an existing story
export const updateStory = async (id, storyData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, storyData);
    return response.data;
  } catch (error) {
    console.error(`Error updating story ${id}:`, error);
    throw error;
  }
};

// Delete a story
export const deleteStory = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting story ${id}:`, error);
    throw error;
  }
}; 