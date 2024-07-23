import React from 'react';

interface ServiceProps {
  title: string;
  description: string;
  link: string;
}

const Service: React.FC<ServiceProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white text-gray-900 rounded-lg p-6 shadow-md transition duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-blue-500 font-medium">Read more</a>
      </div>
    </div>
  );
};

export default Service;
