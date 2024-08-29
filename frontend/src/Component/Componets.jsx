import React, { useEffect, useState } from 'react';
import './style.css';

const Components = () => {
  const [cards, setCards] = useState([]); // State to store cards data
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Fetch cards when the component mounts
  useEffect(() => {
    fetchCards();
  }, []);

  // Function to fetch cards data from the backend
  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards'); // Ensure backend server is running on port 3000
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse JSON data
      setCards(data); // Set state with fetched data
    } catch (error) {
      console.error('Error fetching cards:', error); // Log errors if any
    }
  };

  // Filter cards based on the search term
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="help-center">
      <nav className="navbar">
        <div className="navbar__brand">
          <img src='logo.png' className='logo' alt="Abstract Logo" />
          <span>Abstract</span> | <span>Help Center</span>
        </div>
        <button className="navbar__request-button">Submit a request</button>
      </nav>

      <header className="help-center__header">
        <h1>How can we help?</h1>
        <div className="help-center__search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
          />
          <button>&rarr;</button>
        </div>
      </header>

      <div className="help-center__cards">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div key={index} className="help-center__card">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))
        ) : (
          <p>No cards found.</p> // Message when no cards match the search term
        )}
      </div>

      <footer className="help-center__footer">
        <div className="footer__section">
          <h4>Abstract</h4>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Community</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Contact Us</h4>
          <ul>
            <li> <p>info@abstract.com</p></li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Components;
