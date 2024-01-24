import React from 'react';
import './About.css';

const About = () => (
 <section id="about" className="about">
    <div className="container">
      <h2>About Us</h2>
      <p>Health and Wellness is dedicated to helping individuals achieve their fitness goals through personalized training programs and expert guidance. 
        Our team of experienced trainers is committed to providing you with the support and motivation you need on your fitness journey.</p>
      <div className="staff-members-container">
        <h3>Meet Our Team</h3>
        <div className="staff-member-container">
          <div className="staff-member">
            <img src="/img/staff1.jpg" alt="Staff Member 1" />
            <div className="staff-info">
              <h2>Alex Turner</h2>
              <p>Co-founder</p>
              <p>With a wealth of experience shaping the fitness industry, our visionary CEO, Alex Turner, stands at the forefront of our fitness empire. 
                Bringing years of expertise and a relentless passion for health and wellness, Alex is not just a leader but a fitness connoisseur. 
                Specializing in strategic gym management and fostering a culture of excellence, 
                Alex is dedicated to sculpting an environment where every member thrives on their journey to peak fitness. 
                Join us under Alex's guidance as we redefine what it means to achieve extraordinary fitness goals..</p>
            </div>
          </div>
          <div className="staff-member">
            <img src="/img/staff2.jpg" alt="Staff Member 2" />
            <div className="staff-info">
              <h2>Jacob Black</h2>
              <p>Strength Trainer</p>
              <p>Meet our powerhouse of motivation, Jacob, our dedicated Strength Trainer with an unwavering commitment to unlocking your full potential. 
                With a robust background sculpted by years of experience in the realms of fitness training, John is not just a trainer; he's a guide on your journey to strength and conditioning excellence. 
                His passion for pushing boundaries and sculpting resilient bodies is contagious. 
                Get ready to embark on a transformative fitness adventure under John's expert guidance, where strength meets passion, and limitations are left in the dust.</p>
            </div>
          </div>
          <div className="staff-member">
            <img src="/img/staff3.jpg" alt="Staff Member 3" />
            <div className="staff-info">
              <h2>Max Wilson</h2>
              <p>Cardio Trainer</p>
              <p>Embark on a cardiovascular journey like never before with our energetic Cardio Trainer, Max. 
                Fueled by a boundless enthusiasm for fitness, Max is your dedicated companion in achieving peak cardiovascular health. 
                With a background forged through years of experience in the dynamic world of fitness training, she brings a unique blend of expertise and vigor to every session. Max is not just a trainer; he's a catalyst for your cardio revolution. 
                Join her in the pursuit of endurance, vitality, and a heart-pumping journey to a healthier you.</p>
            </div>
          </div>
          <div className="staff-member">
            <img src="/img/staff4.jpg" alt="Staff Member 4" />
            <div className="staff-info">
              <h2>Shenice Walters</h2>
              <p>Pilates Instructor</p>
              <p>Step into the world of strength, flexibility, and mind-body harmony with our extraordinary Pilates Instructor, Olivia. 
                A master of the Pilates art, Olivia is more than an instructor; she's a sculptor of well-being. 
                With a wealth of experience and a passion for fostering balance, Olivia guides you through transformative Pilates sessions that transcend the physical. 
                Join Olivia on a journey where each movement is a step towards enhanced posture, flexibility, and a revitalized you. 
                Let the power of Pilates under Olivia's guidance redefine your approach to fitness and well-being.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
);
export default About;