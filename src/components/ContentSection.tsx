import React from 'react';
import SectionContent from './SectionContent';
import { SectionData, ContentPoint } from '../types/interfaces';

interface ContentSectionProps {
  section: SectionData;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">
        {section.title}
      </h2>
      
      {section.content.map((item: ContentPoint, idx: number) => (
        <SectionContent key={idx} item={item} />
      ))}
    </div>
  );
};

export default ContentSection;