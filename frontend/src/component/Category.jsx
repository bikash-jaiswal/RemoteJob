import React from 'react';

const Category = () => {
  const computerScienceSkills = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'C++', 'Ruby', 'Swift', 'Go'],
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express'],
    },
    {
      title: 'Databases',
      skills: ['SQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'Oracle'],
    },
    {
      title: 'Algorithms and Data Structures',
      skills: ['Sorting algorithms', 'Search algorithms', 'Linked lists', 'Trees', 'Graphs'],
    },
    {
      title: 'Software Engineering',
      skills: ['Agile methodology', 'Version control (Git)', 'Testing (JUnit, Jest)', 'Debugging'],
    },
  ];

  return (
    <div className="category-list">
      {computerScienceSkills.map((category, index) => (
        <div className="category" key={index}>
          <h2 className="category-title">{category.title}</h2>
          <ul className="skills-list">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Category;
