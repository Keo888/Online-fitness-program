import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
 const [showAnswer, setShowAnswer] = useState([]);

 const toggleAnswer = (index) => {
    setShowAnswer((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
 };

 return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3 onClick={() => toggleAnswer(0)} className="faq-question">Is it possible to switch packages on the same day of the session?</h3>
            {showAnswer[0] && <p className="faq-answer">Yes, of course! As long as you have communicated in time with your trainer on your change of choice so that you can commence on your chosen package.</p>}
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleAnswer(1)} className="faq-question">Do we still get charged when making a last-minute cancellation?</h3>
            {showAnswer[1] && <p className="faq-answer">Yes, since it is a last-minute cancellation which is not allowed in our policy, the amount will be referenced to your next session of choice.</p>}
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleAnswer(2)} className="faq-question">Do we pay for meal plans each session?</h3>
            {showAnswer[2] && <p className="faq-answer">No, not at all! All meal plans are for free and are given and altered by your trainer as you progress through your sessions.</p>}
          </div>
          <div className="faq-item">
            <h3 onClick={() => toggleAnswer(3)} className="faq-question">Do we get discounts?</h3>
            {showAnswer[3] && <p className="faq-answer">Yes, for as long as you stick to your meal plan and are consistent with your training sessions for 3 months straight, you have a 15% discount going forward for each package.</p>}
          </div>
        </div>
      </div>
    </section>
 );
};

export default FAQ;