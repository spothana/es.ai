
import { Project } from './types';

export const SUMMARY_TEXT = `20+ years of embedded systems software experience in leading, designing, implementing and productizing scalable, modular, secure and resilient software projects for products like feature phones, wireless broadband routers, Set Top Boxes and IOT devices.`;

export const COMPETENCIES = [
  { category: 'Project Management', skills: 'Matrix org management, Feature roadmapping, CI/CD, Code reviews, Git/SVN' },
  { category: 'Embedded Linux & RTOS', skills: 'Zephyr, Board bring-up, Bootloader, Kernel porting, Device Drivers, HAL, Application Dev' },
  { category: 'CPU Architectures', skills: 'RISC-V, ARM32/64, MIPS 32' },
  { category: 'Networking', skills: 'MQTT, HTTPS, TCP/IP, Socket programming, Routing & Switching, DHCP' },
  { category: 'Multimedia/Wireless', skills: 'MPEG2TS, Wi-Fi (ax), LTE-M, NB-IoT, BLE, Audio/Video decoding, HDMI/HDCP' },
  { category: 'Modern Tech Stack', skills: 'Vue.js, .NET Core, C, C++, C#, Python, MongoDB, PostGreSQL' }
];

export const PATENTS = [
  { id: 'US 9282373', type: 'Granted', title: 'Managing Time Shift & Permanent Recordings', impact: 'Widely adopted in STBs and streaming devices.' },
  { id: 'US 8,633,940', type: 'Granted', title: 'Texture Compression in AVC Decoders', impact: 'Optimized 3D graphics engines.' },
  { id: 'US 7,289,823', type: 'Granted', title: 'Video Overlay Buffer Mirroring', impact: 'Processor resource sharing in feature phones.' },
  { id: 'US 18/790,443', type: 'Pending', title: 'ML-based Ad Analytics for STBs', impact: 'Innovation in wireless router analytics (2024).' },
  { id: 'Trade Secret', type: 'Secret', title: 'EMI Detection Algorithms in Wi-Fi', impact: 'Optimized performance in congested frequencies.' }
];

export const PROJECTS: Project[] = [
  {
    id: 'gt1',
    title: 'nRF9160 Geographic Tracking',
    category: 'IoT',
    description: 'Geographic tracking system developed using Nordic nRF9160 DK and Zephyr SDK.',
    technicalDetails: [
      'Zephyr RTOS integration',
      'LTE-M/NB-IoT communication',
      'Low-power sensor management'
    ],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gt2',
    title: 'MIVTA SaaS Music Analytics',
    category: 'AndroidTV',
    description: 'Cloud-based visualization and ML-driven prediction tool for music industry analytics.',
    technicalDetails: [
      'Vue.js frontend architecture',
      'MusicBrainz/ListenBrainz API integration',
      'ML prediction engine'
    ],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'br1',
    title: 'Wi-Fi Analytics Library & SaaS',
    category: 'Router',
    description: 'Broadcom-scale analytics system for 802.11ax products across multiple business units.',
    technicalDetails: [
      'C-based system library',
      'SaaS diagnostics platform',
      'Multi-million dollar revenue impact'
    ],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'br2',
    title: 'RDK-B Hardware Abstraction',
    category: 'Firmware',
    description: 'Proof-of-concept RDK-B HAL implementation that influenced Comcast adoption.',
    technicalDetails: [
      'C-based HAL design',
      'Cable modem orchestration',
      'Broadband standards alignment'
    ],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPERIENCE = [
  { company: 'Broadcom Inc.', role: 'L6 Embedded Developer', years: '2005 - 2024', location: 'San Jose, CA' },
  { company: 'NeoMagic Corp.', role: 'L3 Embedded Developer', years: '2001 - 2005', location: 'Santa Clara, CA' },
  { company: 'Intel India', role: 'L2 Graphics Developer', years: '2000 - 2001', location: 'Bengaluru, India' },
  { company: 'NeoMagic Semiconductor', role: 'L1 Graphics Developer', years: '1999 - 2000', location: 'Kanpur, India' }
];

export const EDUCATION = [
  {
    institution: 'Georgia Institute of Technology',
    degree: 'Master of Science in Analytics (OMS Analytics)',
    years: '2023 - 2025',
    description: 'Top-5 nationally ranked data science and analytics program. Comprehensive interdisciplinary curriculum taught by world-renowned faculty. Topics: ML/AI, statistical modeling, data visualization, and optimization. Specialized in Computational Data (Data Science).'
  },
  {
    institution: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Computer Engineering',
    years: '1995 - 1999',
    description: 'Foundation in computer architecture, operating systems, and core software engineering principles.'
  }
];

export const Icons = {
  Cpu: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M8.25 6.75h7.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25zM10.5 10.5h3v3h-3v-3z" />
    </svg>`
  },
  Wifi: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>`
  },
  Device: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
    </svg>`
  },
  Globe: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>`
  }
};
