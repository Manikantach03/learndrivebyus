import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaThLarge, FaCalendarAlt, FaCar, FaIdCard } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './InfoCards.css';
import { cards } from './Info-Cards-Data';



const InfoCards = () => {
  return (
    <Container className="info-section py-5">
      <Row className="g-4">
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} lg={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.02} transitionSpeed={1500}>
                <div className="info-card p-4 h-100">
                  <div className="info-icon">{card.icon}</div>
                  <h5 className="info-title mt-3">{card.title}</h5>
                  <p className="info-subtitle">{card.subtitle}</p>
                </div>
              </Tilt>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InfoCards;
