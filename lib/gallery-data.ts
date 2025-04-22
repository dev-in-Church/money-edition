export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  src: string;
  category: string;
  date: string;
  location?: string;
  tags?: string[];
}

export const galleryImages: GalleryImage[] = [
  // Projects category
  {
    id: "proj-1",
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard interface for our e-commerce platform with analytics and order management.",
    src: "/gallery/add.png?height=600&width=800",
    category: "projects",
    date: "2023-05-15",
    tags: ["dashboard", "ui", "analytics"],
  },
  {
    id: "proj-2",
    title: "Mobile Banking App",
    description:
      "User interface screens from our mobile banking application showing transaction history and account management.",
    src: "/gallery/add1.png?height=800&width=600",
    category: "projects",
    date: "2023-03-22",
    tags: ["mobile", "fintech", "ui"],
  },
  {
    id: "proj-3",
    title: "Healthcare Portal",
    description:
      "Patient management system interface designed for healthcare providers.",
    src: "/gallery/add2.png?height=700&width=900",
    category: "projects",
    date: "2023-01-10",
    tags: ["healthcare", "portal", "ui"],
  },
  {
    id: "proj-4",
    title: "AI Recommendation Engine",
    description:
      "Visualization of our AI recommendation system architecture and data flow.",
    src: "/gallery/add3.png?height=800&width=1000",
    category: "projects",
    date: "2022-11-05",
    tags: ["ai", "architecture", "data"],
  },

  // Office category
  {
    id: "office-1",
    title: "Main Headquarters",
    description:
      "Our company headquarters located in the downtown tech district.",
    src: "/gallery/add4.png?height=800&width=1200",
    category: "office",
    date: "2022-09-15",
    location: "San Francisco, CA",
    tags: ["headquarters", "building", "exterior"],
  },
  {
    id: "office-2",
    title: "Main Conference Room",
    description:
      "Our primary meeting space for client presentations and team gatherings.",
    src: "/gallery/add5.png?height=800&width=1200",
    category: "office",
    date: "2022-09-15",
    location: "San Francisco, CA",
    tags: ["conference", "interior", "meeting"],
  },
  {
    id: "office-3",
    title: "Collaboration Space",
    description:
      "Open area designed for team collaboration and informal meetings.",
    src: "/gallery/add6.png?height=800&width=1200",
    category: "office",
    date: "2022-09-16",
    location: "San Francisco, CA",
    tags: ["collaboration", "interior", "workspace"],
  },
  {
    id: "office-4",
    title: "Cafeteria",
    description:
      "Company cafeteria where team members gather for meals and casual discussions.",
    src: "/gallery/add7.png?height=800&width=1200",
    category: "office",
    date: "2022-09-16",
    location: "San Francisco, CA",
    tags: ["cafeteria", "interior", "dining"],
  },

  // Team category
  {
    id: "team-1",
    title: "Development Team",
    description:
      "Our core development team during the weekly sprint planning session.",
    src: "/gallery/add8.png?height=800&width=1200",
    category: "team",
    date: "2023-06-12",
    location: "San Francisco Office",
    tags: ["developers", "meeting", "planning"],
  },
  {
    id: "team-2",
    title: "Design Workshop",
    description: "UX/UI design team collaborating on new product features.",
    src: "/gallery/add9.png?height=800&width=1200",
    category: "team",
    date: "2023-05-28",
    location: "San Francisco Office",
    tags: ["design", "workshop", "collaboration"],
  },
  {
    id: "team-3",
    title: "Executive Team",
    description: "Company leadership during the annual strategy meeting.",
    src: "/gallery/add10.png?height=800&width=1200",
    category: "team",
    date: "2023-04-05",
    location: "Retreat Center",
    tags: ["executives", "leadership", "strategy"],
  },
  {
    id: "team-4",
    title: "Customer Support Team",
    description:
      "Our dedicated customer support specialists ensuring client satisfaction.",
    src: "/gallery/add11.png?height=800&width=1200",
    category: "team",
    date: "2023-03-15",
    location: "San Francisco Office",
    tags: ["support", "customer service", "team"],
  },

  // Events category
  {
    id: "event-1",
    title: "Annual Developer Conference",
    description:
      "Our company's annual developer conference with industry experts and technology showcases.",
    src: "/gallery/add12.png?height=800&width=1200",
    category: "events",
    date: "2023-07-15",
    location: "Convention Center, San Francisco",
    tags: ["conference", "developers", "networking"],
  },
  {
    id: "event-2",
    title: "Product Launch Event",
    description:
      "Launch celebration for our newest software platform with clients and partners.",
    src: "/gallery/add13.png?height=800&width=1200",
    category: "events",
    date: "2023-06-22",
    location: "Tech Museum, San Francisco",
    tags: ["launch", "product", "celebration"],
  },
  {
    id: "event-3",
    title: "Hackathon 2023",
    description:
      "Our annual internal hackathon where teams compete to develop innovative solutions.",
    src: "/gallery/add14.jpg?height=800&width=1200",
    category: "events",
    date: "2023-05-10",
    location: "Company Headquarters",
    tags: ["hackathon", "innovation", "competition"],
  },
  {
    id: "event-4",
    title: "Client Appreciation Day",
    description: "Special event honoring our long-term clients and partners.",
    src: "/gallery/add15.jpg?height=800&width=1200",
    category: "events",
    date: "2023-04-18",
    location: "Grand Hotel, San Francisco",
    tags: ["clients", "appreciation", "networking"],
  },

  // Technology category
  {
    id: "tech-1",
    title: "Server Infrastructure",
    description:
      "Our state-of-the-art server room powering client applications and services.",
    src: "/gallery/add16.jpg?height=800&width=1200",
    category: "technology",
    date: "2023-02-15",
    location: "Data Center",
    tags: ["servers", "infrastructure", "hardware"],
  },
  {
    id: "tech-2",
    title: "Development Environment",
    description:
      "Modern development workstation setup with multiple monitors for optimal productivity.",
    src: "/placeholder.svg?height=800&width=1200",
    category: "technology",
    date: "2023-01-20",
    tags: ["workstation", "development", "hardware"],
  },
  {
    id: "tech-3",
    title: "Testing Lab",
    description:
      "Our quality assurance testing lab with various devices for cross-platform testing.",
    src: "/placeholder.svg?height=800&width=1200",
    category: "technology",
    date: "2022-12-05",
    location: "QA Department",
    tags: ["testing", "qa", "devices"],
  },
  {
    id: "tech-4",
    title: "Network Operations Center",
    description:
      "24/7 monitoring center for client applications and infrastructure.",
    src: "/placeholder.svg?height=800&width=1200",
    category: "technology",
    date: "2022-11-10",
    location: "Operations Floor",
    tags: ["noc", "monitoring", "operations"],
  },

  // Workspace category
  {
    id: "workspace-1",
    title: "Developer Workspace",
    description:
      "Ergonomic developer workstation designed for productivity and comfort.",
    src: "/placeholder.svg?height=800&width=1200",
    category: "workspace",
    date: "2023-03-05",
    location: "Engineering Department",
    tags: ["workspace", "ergonomic", "development"],
  },
  {
    id: "workspace-2",
    title: "Design Studio",
    description:
      "Creative space for our design team with drawing tablets and visualization tools.",
    src: "/placeholder.svg?height=800&width=1200",
    category: "workspace",
    date: "2023-02-18",
    location: "Design Department",
    tags: ["design", "studio", "creative"],
  },
  {
    id: "workspace-3",
    title: "Quiet Focus Pods",
    description: "Individual focus pods for deep work and concentration.",
    src: "/placeholder.svg?height=800&width=1200",
    category: "workspace",
    date: "2023-01-25",
    location: "All Floors",
    tags: ["focus", "quiet", "productivity"],
  },
  {
    id: "workspace-4",
    title: "Brainstorming Room",
    description:
      "Dedicated space for creative thinking and problem-solving with interactive whiteboards.",
    src: "/placeholder.svg?height=800&width=1200",
    category: "workspace",
    date: "2022-12-15",
    location: "Innovation Center",
    tags: ["brainstorming", "creativity", "collaboration"],
  },
];

// Get unique categories
export const galleryCategories = [
  { id: "all", label: "All" },
  ...Array.from(new Set(galleryImages.map((img) => img.category))).map(
    (category) => ({
      id: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })
  ),
];
