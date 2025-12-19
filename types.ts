
export interface Project {
  id: string;
  title: string;
  category: 'Router' | 'STB' | 'AndroidTV' | 'IoT' | 'Firmware';
  description: string;
  technicalDetails: string[];
  status: 'Completed' | 'Ongoing' | 'Planned';
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
