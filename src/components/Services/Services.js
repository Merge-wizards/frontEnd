/*import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        <div className="service">
          <i className="fas fa-laptop-code service-icon"></i>
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            We create modern and responsive websites that drive results and
            elevate your online presence.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-mobile-alt service-icon"></i>
          <h3 className="service-title">Mobile App Development</h3>
          <p className="service-description">
            From iOS to Android, we build customized mobile applications that
            engage users and deliver exceptional user experiences.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-paint-brush service-icon"></i>
          <h3 className="service-title">UI/UX Design</h3>
          <p className="service-description">
            Our talented designers create captivating interfaces and seamless
            user experiences that captivate your target audience.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-database service-icon"></i>
          <h3 className="service-title">Database Management</h3>
          <p className="service-description">
            We design and optimize databases to ensure efficient data storage,
            retrieval, and management for your business needs.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-cloud service-icon"></i>
          <h3 className="service-title">Cloud Solutions</h3>
          <p className="service-description">
            We provide scalable and secure cloud solutions that enable your
            business to leverage the power of the cloud for enhanced
            productivity and flexibility.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-headset service-icon"></i>
          <h3 className="service-title">Customer Support</h3>
          <p className="service-description">
            Our dedicated customer support team is available 24/7 to assist you
            and ensure a smooth experience with our products and services.
          </p>
        </div>
      </div>
      <div className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        
      </div>
    </div>
  );
};

export default Services;*/


import React from "react";
import { FaCode, FaDesktop, FaUsers, FaBriefcase, FaChartLine, FaCog } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Create responsive and dynamic websites with modern web technologies.",
    },
    {
      icon: <FaDesktop />,
      title: "UI/UX Design",
      description: "Design visually appealing and user-friendly interfaces for web and mobile apps.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Work together efficiently and effectively to achieve project goals.",
    },
    {
      icon: <FaBriefcase />,
      title: "Project Management",
      description: "Efficiently plan, execute, and manage projects to achieve desired outcomes.",
    },
    {
      icon: <FaChartLine />,
      title: "Strategic Planning",
      description: "Develop strategic plans to guide organizations towards their goals.",
    },
    {
      icon: <FaCog />,
      title: "Custom Solutions",
      description: "Develop tailored solutions that meet specific business requirements.",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
