/*import React, { useState } from 'react';
import './Feedback.css';


const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() === '' || rating === 0) {
      return;
    }

    const newComment = {
      feedback,
      rating
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setFeedback('');
    setRating(0);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
            required
          />
        </label>
        <label>
          Rating:
          <select value={rating} onChange={handleRatingChange} required>
            <option value={0} disabled>Select a rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>

      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>Rating: {comment.rating}</p>
              <p>{comment.feedback}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Feedback;*/


/*import React, { useState } from 'react';
import './FeedbackForm.css';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() === '' || rating === 0) {
      return;
    }

    const newComment = {
      feedback,
      rating
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="feedback-label">
          Feedback:
          <textarea
            className="feedback-textarea"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
            required
          />
        </label>
        <label className="feedback-label">
          Rating:
          <div className="feedback-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={star <= rating ? 'star selected' : 'star'}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>
        </label>
        <button className="feedback-submit" type="submit">Submit</button>
      </form>

      <h3 className="comments-title">Comments</h3>
      {comments.length === 0 ? (
        <p className="no-comments">No comments yet.</p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <div className="comment-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={star <= comment.rating ? 'star selected' : 'star'}
                  />
                ))}
              </div>
              <p className="comment-feedback">{comment.feedback}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackForm;*/

import React, { useState } from 'react';
import './FeedbackForm.css';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [gameName, setGameName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGameNameChange = (e) => {
    setGameName(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || gameName.trim() === '' || feedback.trim() === '' || rating === 0) {
      return;
    }

    const newComment = {
      name,
      gameName,
      feedback,
      rating
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setName('');
    setGameName('');
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="feedback-label">
          Your Name:
          <input
            type="text"
            className="feedback-input"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label className="feedback-label">
          Game Name:
          <input
            type="text"
            className="feedback-input"
            value={gameName}
            onChange={handleGameNameChange}
            placeholder="Enter the game's name"
            required
          />
        </label>
        <label className="feedback-label">
          Feedback:
          <textarea
            className="feedback-textarea"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
            required
          />
        </label>
        <label className="feedback-label">
          Rating:
          <div className="feedback-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={star <= rating ? 'star selected' : 'star'}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>
        </label>
        <button className="feedback-submit" type="submit">Submit</button>
      </form>

      <h3 className="comments-title">Comments</h3>
      {comments.length === 0 ? (
        <p className="no-comments">No comments yet.</p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <div className="comment-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={star <= comment.rating ? 'star selected' : 'star'}
                  />
                ))}
              </div>
              <p className="comment-info">
                <span className="comment-name">{comment.name}</span> reviewed <span className="comment-game">{comment.gameName}</span>
              </p>
              <p className="comment-feedback">{comment.feedback}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackForm;
