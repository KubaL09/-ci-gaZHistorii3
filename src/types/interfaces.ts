export interface ContentPoint {
    subtitle: string;
    points: string[];
  }
  
  export interface SectionData {
    title: string;
    content: ContentPoint[];
  }
  
  export interface HistoryData {
    [key: string]: SectionData;
  }