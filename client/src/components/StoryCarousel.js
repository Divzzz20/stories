import React, { useEffect, useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import StoryCard from './StoryCard';

const StoryCarousel = ({ stories }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 576) {
      setItemsPerSlide(1);
    } else if (screenWidth < 992) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(3);
    }
  }, [screenWidth]);

  // Group stories into slides
  const groupStories = () => {
    const slides = [];
    for (let i = 0; i < stories.length; i += itemsPerSlide) {
      slides.push(stories.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const slides = groupStories();

  return (
    <Carousel 
      className="story-carousel" 
      indicators={slides.length > 1}
      controls={slides.length > 1}
    >
      {slides.map((slideStories, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <Row>
            {slideStories.map((story) => (
              <Col key={story._id} sm={12} md={12 / Math.min(itemsPerSlide, slideStories.length)} lg={12 / Math.min(itemsPerSlide, slideStories.length)}>
                <StoryCard story={story} />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default StoryCarousel; 