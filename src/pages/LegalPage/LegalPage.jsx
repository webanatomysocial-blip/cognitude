import React from 'react';
import { useParams } from 'react-router-dom';
import { legalData } from '../../data/legalData';
import './LegalPage.css';

const LegalPage = () => {
  const { slug } = useParams();
  const pageData = legalData[slug];

  if (!pageData) {
    return (
      <div className="legal-page-container">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="legal-page-container">
      <div className="legal-content-wrapper">
        <h1 className="legal-title">{pageData.title}</h1>
        <p className="legal-updated-date">{pageData.updatedDate}</p>
        <div 
          className="legal-content-body" 
          dangerouslySetInnerHTML={{ __html: pageData.content }} 
        />
      </div>
    </div>
  );
};

export default LegalPage;
