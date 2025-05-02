import React from 'react';
import { Card, Button } from 'react-bootstrap';

const StoryCard = ({ story }) => {
  return (
    <Card className="my-3 rounded shadow-sm story-card">
      {story.mediaUrl && (
        <Card.Img 
          variant="top" 
          src={story.mediaUrl} 
          alt={story.title}
          className="story-image"
        />
      )}
      <Card.Body>
        <Card.Title as="h4">{story.title}</Card.Title>
        <Card.Text>{story.description}</Card.Text>
        {story.ctaLink && story.ctaText && (
          <Button
            variant="primary"
            href={story.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {story.ctaText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default StoryCard; 