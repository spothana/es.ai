
export const SUMMARY_TEXT = `20+ years of embedded systems software experience in leading, designing, implementing and productizing scalable, modular, secure and resilient software projects for products like feature phones, wireless broadband routers, Set Top Boxes and IOT devices.`;

export const COMPETENCIES = [
  { category: 'Project Management', skills: 'Matrix org management, Feature roadmapping, CI/CD, Code reviews, Git/SVN' },
  { category: 'Embedded Linux & RTOS', skills: 'Zephyr, Board bring-up, Bootloader, Kernel porting, Device Drivers, HAL, Application Dev' },
  { category: 'CPU Architectures', skills: 'RISC-V, ARM32/64, MIPS 32' },
  { category: 'Networking', skills: 'MQTT, HTTPS, TCP/IP, Socket programming, Routing & Switching, DHCP' },
  { category: 'Multimedia/Wireless', skills: 'MPEG2TS, Wi-Fi 6/7 (802.11ax/be), LTE-M, NB-IoT, BLE, Audio/Video decoding, HDMI/HDCP' },
  { category: 'Modern Tech Stack', skills: 'Vue.js, .NET Core, C, C++, C#, Python, MongoDB, PostGreSQL' }
];

export const PATENTS = [
  { 
    id: 'US 9,282,373', 
    type: 'Granted', 
    title: 'Managing Timeshift and Permanent Recording', 
    impact: 'Core architecture for storage device management in video broadcast receivers.',
    url: 'https://patents.google.com/patent/US9282373B2'
  },
  { 
    id: 'US 8,633,940', 
    type: 'Granted', 
    title: 'Texture Compression for AVC & 3D Engines', 
    impact: 'Optimized 3D rendering and texture compression within AVC decoders.',
    url: 'https://patents.google.com/patent/US8633940B2'
  },
  { 
    id: 'US 7,289,823', 
    type: 'Granted', 
    title: 'Video Overlay Buffer Mirroring', 
    impact: 'Shared mailbox architecture for dual-processor video synchronization in mobile devices.',
    url: 'https://patents.google.com/patent/US7289823B1'
  },
  { 
    id: 'US 7,107,044', 
    type: 'Granted', 
    title: 'Hardware UI Virtualization', 
    impact: 'Virtualizing hardware user-interfaces via shared mailboxes between processors.',
    url: 'https://patents.google.com/patent/US7107044B1/'
  },
  { 
    id: 'US 6,987,961', 
    type: 'Granted', 
    title: 'Ethernet Emulation via Shared Mailbox', 
    impact: 'High-speed data emulation between dual processors in feature phone architectures.',
    url: 'https://patents.google.com/patent/US6987961B1/'
  },
  { 
    id: 'US 2007/0189732', 
    type: 'Published', 
    title: 'MPEG-2 Start Code Reconstruction', 
    impact: 'Innovative method for reconstructing legacy transport stream start codes from AVC data.',
    url: 'https://patents.google.com/patent/US20070189732A1/'
  },
  { 
    id: 'US 18/790,443', 
    type: 'Pending', 
    title: 'Audiovisual content watching detection and feedback using a wireless set top box', 
    impact: 'Ad analytics using AV processing, text processing, wi-fi, ML algorithms in a wireless STB and a wireless broadband router. (Filed: Jul 31, 2024)',
    url: 'about:blank'
  }
];

export const PROJECTS = [
  {
    id: 'wifi7',
    title: 'Wi-Fi 7 Enterprise Router',
    category: 'Router',
    description: 'Developed high-performance firmware for Broadcom-based Wi-Fi 7 (802.11be) reference designs.',
    technicalDetails: ['Multi-Link Operation (MLO)', '6GHz Spectrum Management', 'Low-latency Packet Steering'],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'atv1',
    title: 'Android TV Hybrid Middleware',
    category: 'AndroidTV',
    description: 'Designed a hybrid DVB/OTT middleware layer for global Android TV deployments.',
    technicalDetails: ['HAL/HIDL implementation', 'MediaCAS Integration', 'TIF (TV Input Framework)'],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'stb_4k',
    title: '4K Ultra HD STB SoC',
    category: 'STB',
    description: 'Lead software architect for a flagship 4K Set Top Box SoC with dual DVB-S2X tuners.',
    technicalDetails: ['Secure Boot/TEE', 'HEVC/AV1 Decoding', 'High-bandwidth memory tuning'],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'iot_tracker',
    title: 'nRF9160 Asset Tracking',
    category: 'IoT',
    description: 'Developed a ultra-low-power cellular IoT tracker using Zephyr RTOS.',
    technicalDetails: ['LTE-M/NB-IoT', 'PSM/eDRX Optimization', 'Cloud-to-Silicon Security'],
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800'
  }
];

export const GA_TECH_RESEARCH = [
  {
    id: 'wifi_class',
    title: 'Wi-Fi Interface Device Classification',
    subtitle: 'Georgia Institute of Technology - MS in Analytics',
    description: 'A machine learning approach to identifying IoT devices through encrypted traffic patterns.',
    slides: [
      {
        title: "Introduction & Motivation",
        content: "Explosive growth of IoT devices creates a visibility gap for ISPs. With 90%+ traffic encrypted (WPA3/TLS), traditional Deep Packet Inspection is ineffective. Operators need device identity for automated security patches, QoS prioritization, and bandwidth management."
      },
      {
        title: "Problem Statement",
        content: "Passive classification of heterogeneous devices (Smart Home, Mobile, PC) using only unencrypted packet metadata. Goal: Maintain user privacy while achieving high granular classification accuracy."
      },
      {
        title: "Methodology: Data Acquisition",
        content: "Passive traffic collection on Broadcom BCM4908 Wi-Fi 6 Gateway. Dataset covers 50GB of raw traffic across 45 device types. Labels generated via MAC-OUI and DHCP fingerprinting as ground truth."
      },
      {
        title: "Feature Engineering",
        content: "Extracted 142 features from packet headers: Inter-Arrival Times (IAT) variance, Packet Size entropy, TCP Window scaling, burst frequency, and protocol ratios (DNS/NTP/HTTPS)."
      },
      {
        title: "Machine Learning Pipeline",
        content: "Pipeline implemented in Python (Scikit-Learn/Spark): Pre-processing -> SMOTE for class balancing -> Recursive Feature Elimination (RFE) -> Multi-class Classifier training."
      },
      {
        title: "Model Selection & Results",
        content: "Evaluated Random Forest, XGBoost, and KNN. Random Forest achieved the best balance of accuracy and inference speed. Results: 94.2% Overall Accuracy; 97% Precision for high-risk IoT (Cameras/Smart Locks)."
      },
      {
        title: "Edge Implementation",
        content: "Optimized model for deployment on ARM Cortex-A53 gateway cores. Quantized feature vectors reduced RAM footprint to <500KB. Real-time inference latency measured at <12ms per classification event."
      },
      {
        title: "Conclusion & Future Work",
        content: "Successful proof-of-concept for metadata-only fingerprinting. Future work includes Reinforcement Learning for adaptive security policies based on classified device behavior."
      }
    ]
  },
  {
    id: 'deep_racer',
    title: 'Reinforcement Learning for Edge AI',
    subtitle: 'AWS DeepRacer Implementation',
    description: 'Optimizing Deep Reinforcement Learning (DRL) models for low-latency decision making on edge hardware.',
    slides: [
      {
        title: "Project Overview",
        content: "Developing autonomous racing agents using AWS DeepRacer ecosystem. Focus on migration from high-compute simulation to resource-constrained physical hardware."
      },
      {
        title: "RL Algorithm: PPO",
        content: "Utilized Proximal Policy Optimization (PPO) for stable model convergence. Tuned hyperparameters: discount factor, learning rate, and entropy coefficient."
      },
      {
        title: "Edge Deployment",
        content: "Quantized TensorFlow models to 8-bit integers for the Intel OpenVINO toolkit. Achieved 30FPS inference on the physical car's onboard CPU/TPU."
      }
    ]
  }
];

export const FUTURE_INITIATIVES = [
  {
    title: 'Reinforcement Learning: The Living Control Plane',
    date: '2026 Vision',
    description: 'The era of static, rule-based control loops is ending. From DOCSIS cable plants to hyper-scale cloud data centers, the complexity has outpaced human-coded heuristics. We are transforming infrastructure into a "Living Control Plane" that senses, learns, and optimizes in real-time.',
    tech: 'RL, MDP, MARL, Broadband, Cloud',
    framework: [
      { title: '1. Problem Modelling', content: 'Formalize hardware/services as (PO/S)MDPs with actionable control knobs and specific reward functions.' },
      { title: '2. Learning Architecture', content: 'Centralised-Training-Decentralised-Execution (CTDE) models for coordinated agent structure.' },
      { title: '3. Data-Driven Pipeline', content: 'High-fidelity Digital Twins for offline RL training and regulatory action masking.' },
      { title: '4. Deployment & Ops', content: 'Quantized low-latency inference on MCUs/ASICs with automated roll-back triggers.' }
    ],
    status: 'WIP: Documenting canonical state-space definitions for XGS-PON and Gen-AI Inference Engines.'
  },
  {
    title: 'Digital Security Number (DSN)',
    date: 'Strategic Roadmap',
    description: 'The global identity layer for the AI Era. In an age of synthetic media, the DSN acts as a Universal Verification Protocol—a digital notary for every citizen, business, and nonprofit to bridge the "Truth Gap" in AI content.',
    tech: 'Identity, Cryptography, Blockchain, Web3',
    pillars: [
      { title: 'Cryptographic Identity', content: 'Unique DSN issued by global authorities to verify Proof of Personhood or Proof of Organization.' },
      { title: 'Embedded Provenance', content: 'Immutable metadata tags providing a Digital DNA for all human or AI-assisted content.' },
      { title: 'The Truth Ledger', content: 'Blockchain protocol recording content consumption to ensure 100% transparency and attribution.' },
      { title: 'Automated Value Flow', content: 'Automatic credit-debit features to ensure creators are compensated fairly for AI training data.' }
    ],
    status: 'Seeking: Data scientists and policy advocates to shape standards for AI-driven value creation.'
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
    description: 'Foundation in computer architecture and systems.'
  }
];

export const Icons = {
  Cpu: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`,
  Wifi: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.05 9.05 0 0112.728 0M1 6.929c4.793-4.793 12.556-4.793 17.35 0" /></svg>`,
  Globe: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>`
};
