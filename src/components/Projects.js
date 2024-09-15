import React from 'react';
import './Project.css';

const projects = [
  {
    name: 'File Hider',
    codes: ['Java', 'Spring Boot', 'MySQL'],
    platform: 'IntelliJ',
    description: 'This project is a secure file-hiding application using Java, enabling users to hide and unhide their files. The application integrates JDBC with MySQL to manage and store file paths and encrypted data. To ensure security, users must log in with their email and OTP, providing an additional layer of protection for accessing file management features.',
  },
  {
    name: 'HailHack - A Driver Booking System',
    codes: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    platform: 'VS Code',
    description: 'Developed and implemented a system allowing users to book drivers on an hourly basis. The application utilizes PHP with MySQL for backend development, enabling users to select drivers from a list based on their ratings and hourly charges.A Django-based project that provides a simple task management system.',
  },
  {
    name: 'Student Management System',
    codes: ['React', 'Node.js', 'MySQL'],
    platform: 'VS Code',
    description: 'This project is a full-stack application named "Student Management System" using React.js, Node.js, Express.js, and MySQL. The system supports CRUD operations, allowing users to add, update, and delete student records in the database efficiently.',
  },
  {
    name: 'Pizza Hub’s SNRA',
    codes: ['MySQL'],
    platform: 'MySQL Workbench',
    description: ' Developed a project to analyze and provide real-time figures of sales and revenue for Pizza Hub using SQL.',
  },
  {
    name: 'In-depth Analysis of Company’s Revenue',
    codes: ['Python'],
    platform: 'Jupyter',
    description: 'Conducted a detailed revenue analysis using Python (Pandas, NumPy, Matplotlib) to evaluate company performance. Analyzed two years of sales data to identify growth drivers and areas for improvement. Applied statistical methods and predictive models for revenue forecasting. Developed reports and interactive dashboards to support data-driven decision-making.',
  },
];

const Project = ({ theme }) => {
  return (
    <section>
      <h1 className='title'>Projects</h1>
    <div className={`project-container ${theme}`}>
      {/* <h2 className="project-heading">Projects</h2>  */}
      {projects.map((project, index) => (
        <div className="project-tile" key={index}>
          <div className="project-front">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-codes">
              <strong>Technologies:</strong> {project.codes.join(', ')}
            </p>
            <p className="project-platform">
              <strong>Platform:</strong> {project.platform}
            </p>
          </div>
          <div className="project-back">
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Project;
