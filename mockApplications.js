const mockApplications = [
  {
    id: "a1",
    projectId: "p1",
    teamId: "t1",
    teamName: "Signal & Spark",
    members: [
      { name: "Aisha Patel", university: "USC", major: "Computer Science", skills: ["Python", "Machine Learning", "React", "SQL", "TensorFlow"] },
      { name: "Marcus Chen", university: "USC", major: "Electrical Engineering", skills: ["C++", "Embedded Systems", "CAD", "MATLAB", "Python"] }
    ],
    proposal: "Our team brings a unique blend of software and hardware expertise. Aisha's ML background in TensorFlow combined with Marcus's embedded systems experience positions us perfectly for real-time edge inference on UAV hardware. We propose a two-phase approach: first a high-accuracy MobileNetV3 model trained on drone-perspective obstacle datasets, then hardware optimization for deployment on NVIDIA Jetson Nano. We can deliver a working prototype within 10 weeks.",
    submittedAt: "2024-11-15",
    status: "pending"
  },
  {
    id: "a2",
    projectId: "p1",
    teamId: "t3",
    teamName: "Circuit Breakers",
    members: [
      { name: "Priya Nair", university: "USC", major: "Computer Science", skills: ["Python", "OpenCV", "Deep Learning", "ROS", "Linux"] },
      { name: "Daniel Wu", university: "USC", major: "Aerospace Engineering", skills: ["MATLAB", "Simulink", "Control Systems", "Python", "C++"] }
    ],
    proposal: "We have hands-on experience with ROS-based drone systems from our senior lab project. Priya has published a paper on real-time semantic segmentation for robotic navigation. Daniel's aerospace background ensures we understand the physics constraints of UAV maneuverability. We'll use a YOLO-based detection backbone with a custom lightweight head optimized for <30ms inference.",
    submittedAt: "2024-11-18",
    status: "pending"
  },
  {
    id: "a3",
    projectId: "p1",
    teamId: "t4",
    teamName: "The Catalysts",
    members: [
      { name: "Ryan Park", university: "USC", major: "Computer Science", skills: ["Python", "TensorFlow", "Keras", "Computer Vision", "Docker"] },
      { name: "Mia Torres", university: "USC", major: "Mathematics", skills: ["Python", "Statistics", "MATLAB", "Algorithm Design", "C++"] }
    ],
    proposal: "We propose using a combination of stereo vision and LiDAR fusion for robust obstacle detection. Our approach leverages Mia's mathematical background to design provably safe avoidance algorithms while Ryan implements the perception stack. We've already prototyped a basic collision avoidance system for a class project and are eager to scale it.",
    submittedAt: "2024-11-20",
    status: "pending"
  },
  {
    id: "a4",
    projectId: "p1",
    teamId: "t5",
    teamName: "Apex Labs",
    members: [
      { name: "Zoe Williams", university: "USC", major: "Computer Engineering", skills: ["C++", "Python", "FPGA", "Embedded Systems", "Signal Processing"] },
      { name: "James Liu", university: "USC", major: "Computer Science", skills: ["Python", "PyTorch", "Edge Computing", "Computer Vision", "Linux"] }
    ],
    proposal: "Zoe's FPGA experience is a differentiator — we can implement critical inference layers directly in hardware for deterministic sub-10ms latency. James handles the PyTorch model development and quantization pipeline. Together we offer a full-stack hardware-accelerated solution that no purely software team can match.",
    submittedAt: "2024-11-22",
    status: "pending"
  },
  {
    id: "a5",
    projectId: "p2",
    teamId: "t1",
    teamName: "Signal & Spark",
    members: [
      { name: "Aisha Patel", university: "USC", major: "Computer Science", skills: ["Python", "Machine Learning", "React", "SQL", "TensorFlow"] },
      { name: "Marcus Chen", university: "USC", major: "Electrical Engineering", skills: ["C++", "Embedded Systems", "CAD", "MATLAB", "Python"] }
    ],
    proposal: "We designed a time-series anomaly detection pipeline using LSTM autoencoders trained on NASA's CMAPSS turbofan dataset. Our feature engineering approach extracts 48 health indicators across temperature, pressure, and vibration signals. Early testing shows 94% accuracy at detecting failures 250 flight hours in advance with a 2.1% false positive rate.",
    submittedAt: "2024-10-20",
    status: "accepted"
  }
];

const mockTeams = [
  {
    id: "t1",
    name: "Signal & Spark",
    members: ["s1", "s2", "s_me"],
    invitePending: []
  },
  {
    id: "t2",
    name: "GreenPath Collective",
    members: ["s3", "s4"],
    invitePending: []
  },
  {
    id: "t3",
    name: "Circuit Breakers",
    members: [],
    invitePending: []
  },
  {
    id: "t4",
    name: "The Catalysts",
    members: [],
    invitePending: []
  },
  {
    id: "t5",
    name: "Apex Labs",
    members: [],
    invitePending: []
  }
];