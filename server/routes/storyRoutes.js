const express = require('express');
const router = express.Router();
const {
  getStories,
  getAllStories,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
} = require('../controllers/storyController');

// Get all active stories (for user)
router.get('/', getStories);

// Get all stories including inactive (for admin)
router.get('/admin', getAllStories);

// Get single story by ID
router.get('/:id', getStoryById);

// Create a new story
router.post('/', createStory);

// Update a story
router.put('/:id', updateStory);

// Delete a story
router.delete('/:id', deleteStory);

module.exports = router; 