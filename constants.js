
export const SUMMARY_TEXT = `20+ years of embedded systems software experience in leading, designing, implementing and productizing scalable, modular, secure and resilient software projects for products like feature phones, wireless broadband routers, Set Top Boxes and IOT devices.`;

export const COMPETENCIES = [
  { category: 'Project Management', skills: 'Matrix org management, Feature roadmapping, CI/CD, Code reviews, Git/SVN' },
  { category: 'Embedded Linux & RTOS', skills: 'Zephyr, Board bring-up, Bootloader, Kernel porting, Device Drivers, HAL, Application Dev' },
  { category: 'CPU Architectures', skills: 'RISC-V, ARM32/64, MIPS 32' },
  { category: 'Networking', skills: 'MQTT, HTTPS, TCP/IP, Socket programming, Routing & Switching, DHCP' },
  { category: 'Multimedia/Wireless', skills: 'MPEG2TS, Wi-Fi 6/7, LTE-M, NB-IoT, BLE, Audio/Video decoding, HDMI/HDCP' },
  { category: 'Modern Tech Stack', skills: 'Vue.js, .NET Core, C, C++, C#, Python, MongoDB, PostGreSQL' }
];

export const PATENTS = [
  { id: 'US 9282373', type: 'Granted', title: 'Managing Time Shift & Permanent Recordings', impact: 'Widely adopted in STBs and streaming devices.' },
  { id: 'US 8,633,940', type: 'Granted', title: 'Texture Compression in AVC Decoders', impact: 'Optimized 3D graphics engines.' },
  { id: 'US 7,289,823', type: 'Granted', title: 'Video Overlay Buffer Mirroring', impact: 'Processor resource sharing in feature phones.' },
  { id: 'US 18/790,443', type: 'Pending', title: 'ML-based Ad Analytics for STBs', impact: 'Innovation in wireless router analytics (2024).' }
];

export const PROJECTS = [
  {
    id: 'gt1',
    title: 'nRF9160 Geographic Tracking',
    category: 'IoT',
    description: 'Ultra-low power geographic tracking system developed using Nordic nRF9160 DK and Zephyr SDK.',
    technicalDetails: ['Zephyr RTOS', 'LTE-M / NB-IoT', 'GPS/GNSS Power Optimization'],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'br1',
    title: 'Wi-Fi Analytics Library & SaaS',
    category: 'Router',
    description: 'Enterprise-grade analytics system for 802.11ax/Wi-Fi 6 routers at Broadcom scale.',
    technicalDetails: ['C-System Library', 'JSON/MQTT Telemetry', '802.11ax Specs'],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'stb1',
    title: 'DVB-S2 Dual-Tuner Receiver',
    category: 'STB',
    description: 'Production firmware for dual-tuner satellite receivers with permanent recording logic.',
    technicalDetails: ['MPEG-TS Demux', 'PVR Storage Engine', 'Kernel Driver Dev'],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  }
];

export const FUTURE_INITIATIVES = [
  {
    title: 'RISC-V Secure Gateway',
    description: 'Developing a trusted execution environment for next-gen IoT gateways on open-source ISA.',
    tech: 'RISC-V, OpenSBI, Rust',
    date: 'Q1 2025'
  },
  {
    title: 'Intelligent Wi-Fi 7 QoS',
    description: 'Exploration of machine learning for real-time interference mitigation in 6GHz bands.',
    tech: 'Wi-Fi 7, Edge AI, NPU HAL',
    date: 'Q2 2025'
  },
  {
    title: 'Smart Home Hub v2.0',
    description: 'A matter-compliant smart home hub with integrated voice and sensor fusion.',
    tech: 'Matter Protocol, Thread, ESP32-H2',
    date: 'Q3 2025'
  }
];

export const EXPERIENCE = [
  { company: 'Broadcom Inc.', role: 'L6 Embedded Developer', years: '2005 - 2024', location: 'San Jose, CA' },
  { company: 'NeoMagic Corp.', role: 'L3 Embedded Developer', years: '2001 - 2005', location: 'Santa Clara, CA' },
  { company: 'Intel India', role: 'L2 Graphics Developer', years: '2000 - 2001', location: 'Bengaluru, India' }
];

export const EDUCATION = [
  {
    institution: 'Georgia Institute of Technology',
    degree: 'Master of Science in Analytics',
    years: '2023 - 2025',
    description: 'Specializing in Computational Data Science and Edge AI.'
  },
  {
    institution: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Computer Engineering',
    years: '1995 - 1999',
    description: 'Core foundation in computer architecture and systems.'
  }
];

export const Icons = {
  Cpu: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`,
  Wifi: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.05 9.05 0 0112.728 0M1 6.929c4.793-4.793 12.556-4.793 17.35 0" /></svg>`,
  Globe: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>`
};
