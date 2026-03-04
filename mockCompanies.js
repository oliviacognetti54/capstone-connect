const mockCompanies = [
  {
    id: "c1",
    name: "AeroVance Systems",
    industry: "Aerospace & Defense",
    size: "500–1,000 employees",
    location: "El Segundo, CA",
    website: "aerovance.com",
    logo: "https://placehold.co/60x60/1a1a2e/white?text=AV",
    description: "AeroVance builds next-gen propulsion and drone intelligence systems for defense and commercial aviation.",
    contactEmail: "partnerships@aerovance.com"
  },
  {
    id: "c2",
    name: "Lumina Health",
    industry: "Healthcare Technology",
    size: "50–200 employees",
    location: "San Diego, CA",
    website: "luminahealth.io",
    logo: "https://placehold.co/60x60/0d7377/white?text=LH",
    description: "Lumina Health is a Series B startup developing AI-powered remote patient monitoring tools.",
    contactEmail: "university@luminahealth.io"
  },
  {
    id: "c3",
    name: "Verdant Advisory",
    industry: "Sustainability Consulting",
    size: "10–50 employees",
    location: "San Francisco, CA",
    website: "verdantadvisory.co",
    logo: "https://placehold.co/60x60/2d6a4f/white?text=VA",
    description: "Verdant Advisory helps Fortune 500 companies design and execute net-zero transition roadmaps.",
    contactEmail: "capstone@verdantadvisory.co"
  }
];

// Current logged-in company (for industry dashboard)
const currentCompany = mockCompanies[0];