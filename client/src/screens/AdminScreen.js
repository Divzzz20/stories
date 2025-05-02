import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getAllStories, deleteStory } from '../services/storyService';

const AdminScreen = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const data = await getAllStories();
      setStories(data);
      setLoading(false);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching stories');
      setLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        setLoading(true);
        await deleteStory(id);
        setSuccessMessage('Story deleted successfully');
        fetchStories();
      } catch (error) {
        setError(error.message || 'An error occurred while deleting the story');
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Stories</h1>
        </Col>
        <Col className="text-end">
          <Button as={Link} to="/admin/story" className="my-3">
            <i className="fas fa-plus"></i> Create Story
          </Button>
        </Col>
      </Row>

      {successMessage && <Message variant="success">{successMessage}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      
      {loading ? (
        <Loader />
      ) : stories.length === 0 ? (
        <Message>No stories found. Create one to get started.</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>ACTIVE</th>
              <th>ORDER</th>
              <th>DATE CREATED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story._id}>
                <td>{story._id}</td>
                <td>{story.title}</td>
                <td>
                  {story.isActive ? (
                    <FaCheck style={{ color: 'green' }} />
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>{story.order}</td>
                <td>{new Date(story.createdAt).toLocaleDateString()}</td>
                <td>
                  <Button 
                    as={Link} 
                    to={`/admin/story/${story._id}`} 
                    variant="light" 
                    className="btn-sm mx-1"
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="danger"
                    className="btn-sm mx-1"
                    onClick={() => deleteHandler(story._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AdminScreen; 