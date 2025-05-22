import React from 'react';
import { ContentPoint } from '../types/interfaces';

interface SectionContentProps {
  item: ContentPoint;
}

const SectionContent: React.FC<SectionContentProps> = ({ item }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.subtitle}</h3>
      <ul className="list-disc pl-6">
        {item.points.map((point: string, pidx: number) => (
          <li key={pidx} className="mb-1 text-gray-800">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionContent;