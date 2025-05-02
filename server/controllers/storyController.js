const Story = require('../models/Story');

// @desc    Get all stories
// @route   GET /api/stories
// @access  Public
const getStories = async (req, res) => {
  try {
    const stories = await Story.find({ isActive: true }).sort({ order: 1 });
    res.json(stories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all stories (including inactive) - for admin
// @route   GET /api/stories/admin
// @access  Private/Admin
const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ order: 1 });
    res.json(stories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get single story by ID
// @route   GET /api/stories/:id
// @access  Public
const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    
    if (story) {
      res.json(story);
    } else {
      res.status(404).json({ message: 'Story not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a story
// @route   POST /api/stories
// @access  Private/Admin
const createStory = async (req, res) => {
  try {
    const { title, description, mediaUrl, ctaText, ctaLink, isActive, order } = req.body;

    const story = new Story({
      title,
      description,
      mediaUrl,
      ctaText,
      ctaLink,
      isActive,
      order
    });

    const createdStory = await story.save();
    res.status(201).json(createdStory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a story
// @route   PUT /api/stories/:id
// @access  Private/Admin
const updateStory = async (req, res) => {
  try {
    const { title, description, mediaUrl, ctaText, ctaLink, isActive, order } = req.body;

    const story = await Story.findById(req.params.id);

    if (story) {
      story.title = title || story.title;
      story.description = description || story.description;
      story.mediaUrl = mediaUrl !== undefined ? mediaUrl : story.mediaUrl;
      story.ctaText = ctaText !== undefined ? ctaText : story.ctaText;
      story.ctaLink = ctaLink !== undefined ? ctaLink : story.ctaLink;
      story.isActive = isActive !== undefined ? isActive : story.isActive;
      story.order = order !== undefined ? order : story.order;

      const updatedStory = await story.save();
      res.json(updatedStory);
    } else {
      res.status(404).json({ message: 'Story not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a story
// @route   DELETE /api/stories/:id
// @access  Private/Admin
const deleteStory = async (req, res) => {
  try {
    const result = await Story.findByIdAndDelete(req.params.id);

    if (result) {
      res.json({ message: 'Story removed' });
    } else {
      res.status(404).json({ message: 'Story not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getStories,
  getAllStories,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
}; 