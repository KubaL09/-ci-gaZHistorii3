import React from 'react';
import { HistoryData } from '../types/interfaces';

interface SidebarProps {
  sections: HistoryData;
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, setActiveSection }) => {
  return (
    <nav className="bg-blue-100 p-4 md:w-64">
      <h2 className="text-lg font-semibold mb-4 text-blue-800">Spis treści</h2>
      <ul>
        {Object.entries(sections).map(([key, section]) => (
          <li key={key} className="mb-2">
            <button
              className={`w-full text-left p-2 rounded ${
                activeSection === key ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
              }`}
              onClick={() => setActiveSection(key)}
            >
              {key}. {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;