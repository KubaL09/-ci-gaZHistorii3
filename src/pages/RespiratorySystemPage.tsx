import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentSection from '../components/ContentSection';
import respiratoryData from '../data/respiratoryData';

const RespiratorySystemPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('1');
  
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar 
          sections={respiratoryData} 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        
        <main className="flex-grow p-6">
          <ContentSection 
            section={respiratoryData[activeSection]} 
          />
        </main>
      </div>
      
    </div>
  );
};

export default RespiratorySystemPage;