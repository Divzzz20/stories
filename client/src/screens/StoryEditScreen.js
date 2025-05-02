import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Form, Button, FormGroup, FormLabel, FormControl, FormCheck } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getStoryById, createStory, updateStory } from '../services/storyService';

const StoryEditScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mediaUrl: '',
    ctaText: '',
    ctaLink: '',
    isActive: true,
    order: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchStory = async () => {
        try {
          setLoading(true);
          const data = await getStoryById(id);
          setFormData({
            title: data.title,
            description: data.description,
            mediaUrl: data.mediaUrl || '',
            ctaText: data.ctaText || '',
            ctaLink: data.ctaLink || '',
            isActive: data.isActive,
            order: data.order,
          });
          setLoading(false);
        } catch (error) {
          setError(error.message || 'An error occurred while fetching the story');
          setLoading(false);
        }
      };
      fetchStory();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      if (id) {
        await updateStory(id, formData);
      } else {
        await createStory(formData);
      }

      setSuccess(true);
      setLoading(false);
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate('/admin');
      }, 2000);
    } catch (error) {
      setError(error.message || 'An error occurred while saving the story');
      setLoading(false);
    }
  };

  return (
    <>
      <Link to="/admin" className="btn btn-light my-3">
        Go Back
      </Link>
      
      <h1>{id ? 'Edit Story' : 'Create Story'}</h1>
      
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">Story saved successfully!</Message>}
      
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="title">
          <FormLabel>Title</FormLabel>
          <FormControl
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="description">
          <FormLabel>Description</FormLabel>
          <FormControl
            as="textarea"
            rows={3}
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="mediaUrl">
          <FormLabel>Media URL (optional)</FormLabel>
          <FormControl
            type="text"
            name="mediaUrl"
            placeholder="Enter image URL"
            value={formData.mediaUrl}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="ctaText">
          <FormLabel>CTA Text (optional)</FormLabel>
          <FormControl
            type="text"
            name="ctaText"
            placeholder="Enter CTA button text"
            value={formData.ctaText}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="ctaLink">
          <FormLabel>CTA Link (optional)</FormLabel>
          <FormControl
            type="text"
            name="ctaLink"
            placeholder="Enter CTA button link"
            value={formData.ctaLink}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="order">
          <FormLabel>Display Order</FormLabel>
          <FormControl
            type="number"
            name="order"
            value={formData.order}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="isActive">
          <FormCheck
            type="checkbox"
            name="isActive"
            label="Active"
            checked={formData.isActive}
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit" variant="primary">
          Save
        </Button>
      </Form>
    </>
  );
};

export default StoryEditScreen; 