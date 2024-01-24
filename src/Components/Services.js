import React from 'react';
import './Services.css';

const Services = () => (
  <div>
    <h2>Services</h2>
    <div className="service-package">
      <h3>Virtual Training</h3>
      <img src="/img/virtual.jpg" alt="Virtual Training" />
      <img src="/img/virtual2.jpg" alt="Virtual Training" />
      <img src="/img/virtual3.jpg" alt="Virtual Training" />


      <details>
        <summary>View Options</summary>
        <ul>
          <li>1 Hour Cardio (R500)</li>
          <li>30 Min Cardio (R200)</li>
          <li>1 Hour Pilates (R200)</li>
          <li>30 Min Pilates (R250)</li>
          <li>1 Hour Strength Building (R200)</li>
          <li>30 Min Strength Building (R200)</li>
        </ul>
      </details>
      <p>Virtual training revolutionizes fitness by offering a flexible and convenient approach to workouts. 
        This online platform allows clients to engage in tailored training sessions from the comfort of their homes. 
        Whether it's cardio, Pilates, or strength building, virtual training provides a diverse range of exercise options guided by a dedicated trainer. 
        The sessions are scheduled based on the client's preferences, offering the freedom to choose optimal workout times. Additionally, virtual training includes a complimentary meal plan, ensuring a holistic approach to health and fitness. 
        This innovative fitness solution accommodates busy schedules, making it an ideal choice for individuals seeking effective and personalized training without the constraints of a physical location.</p>
    </div>
    <div className="service-package">
      <h3>In-Person Training</h3>
      <img src="/img/physically.jpg" alt="Staff Member 4" />
      <img src="/img/persoon.jpg" alt="Virtual Training" />
      <img src="/img/inperson2.jpg" alt="Virtual Training" />

      <details>
        <summary>View Options</summary>
        <ul>
          <li>1 Hour Cardio (R500)</li>
          <li>30 Min Cardio (R200)</li>
          <li>1 Hour Pilates (R200)</li>
          <li>30 Min Pilates (R250)</li>
          <li>1 Hour Strength Building (R200)</li>
          <li>30 Min Strength Building (R200)</li>
        </ul>
      </details>
      <p>In-person training offers a personalized and hands-on fitness experience by providing face-to-face sessions at a designated gym branch. 
        Clients can choose from a variety of workout options, including cardio, Pilates, and strength building, tailored to their fitness goals. 
        This approach not only allows for direct interaction with a dedicated trainer but also creates a supportive environment for individuals seeking guidance and motivation in their fitness journey. 
        With the added benefit of a structured meal plan, in-person training ensures a comprehensive approach to health and wellness, fostering a positive and effective workout routine.</p>
    </div>
  </div>
);

export default Services;