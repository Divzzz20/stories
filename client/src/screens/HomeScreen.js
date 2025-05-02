import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import StoryCarousel from '../components/StoryCarousel';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getStories } from '../services/storyService';

const HomeScreen = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const data = await getStories();
        setStories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching stories');
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <>
      <h1>Latest WebPe Features</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : stories.length === 0 ? (
        <Message>No stories available at the moment.</Message>
      ) : (
        <Row>
          <Col>
            <StoryCarousel stories={stories} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default HomeScreen; 