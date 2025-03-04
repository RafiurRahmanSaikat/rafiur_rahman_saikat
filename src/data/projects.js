export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced product management and user experience.",
      fullDescription: "A full-featured e-commerce platform designed to provide a seamless shopping experience. The project integrates robust product management, secure payment gateways, and personalized user authentication to create a modern online marketplace.",
      image: "/images/ecommerce.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveUrl: "https://shopzone-frontend.vercel.app",
      githubUrl: "https://github.com/RafiurRahmanSaikat/shopzone-frontend",
      category: "Full Stack",
      duration: "3 months",
      goals: [
        "Create a scalable e-commerce platform",
        "Implement secure user authentication",
        "Develop responsive and intuitive UI"
      ],
      technologies: [
        {
          name: "React",
          description: "Frontend library for building interactive user interfaces"
        },
        {
          name: "Node.js",
          description: "Backend runtime for scalable server-side applications"
        },
        {
          name: "MongoDB",
          description: "NoSQL database for flexible data storage"
        }
      ],
      features: [
        {
          name: "Product Management",
          description: "Comprehensive CRUD operations for product catalog"
        },
        {
          name: "User Authentication",
          description: "Secure login with JWT and role-based access"
        },
        {
          name: "Shopping Cart",
          description: "Advanced cart functionality with state management"
        }
      ],
      codeStructure: `
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   └── redux/
  ├── backend/
  │   ├── controllers/
  │   ├── models/
  │   └── routes/
  └── docker-compose.yml
      `
    },
    {
      id: 2,
      title: "Real Estate Platform",
      description: "Advanced property listing platform with geospatial search and filtering.",
      fullDescription: "A comprehensive real estate application that allows users to search, filter, and explore properties using advanced geospatial technologies and intuitive design.",
      image: "/images/realestate.png",
      tags: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      liveUrl: "https://rentease.vercel.app",
      githubUrl: "https://github.com/RafiurRahmanSaikat/RentEase",
      category: "Full Stack",
      duration: "2.5 months",
      goals: [
        "Create an intuitive property search experience",
        "Implement advanced geospatial filtering",
        "Develop a responsive and modern interface"
      ],
      technologies: [
        {
          name: "React",
          description: "Frontend library for building interactive interfaces"
        },
        {
          name: "PostgreSQL",
          description: "Relational database with geospatial extensions"
        },
        {
          name: "Google Maps API",
          description: "Integrating location-based services"
        }
      ],
      features: [
        {
          name: "Geospatial Search",
          description: "Advanced property search with map-based filtering"
        },
        {
          name: "Property Listings",
          description: "Comprehensive property details and image galleries"
        },
        {
          name: "User Profiles",
          description: "Personalized user accounts and saved searches"
        }
      ],
      codeStructure: `
  ├── client/
  │   ├── components/
  │   ├── pages/
  │   └── hooks/
  ├── server/
  │   ├── controllers/
  │   ├── models/
  │   └── routes/
  └── database/
      └── migrations/
      `
    },
    {
      id: 3,
      title: "API Gateway Service",
      description: "Robust microservice-based API gateway with advanced routing and security features.",
      fullDescription: "A scalable API gateway solution providing rate limiting, authentication, and intelligent request routing across multiple microservices.",
      image: "/images/apigateway.png",
      tags: ["Python", "Django", "Redis", "Microservices"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend",
      duration: "2 months",
      goals: [
        "Design a scalable API management system",
        "Implement robust security mechanisms",
        "Create efficient request routing"
      ],
      technologies: [
        {
          name: "Python",
          description: "Primary backend programming language"
        },
        {
          name: "Django",
          description: "High-level Python web framework"
        },
        {
          name: "Redis",
          description: "In-memory data structure store for caching"
        }
      ],
      features: [
        {
          name: "Rate Limiting",
          description: "Intelligent request throttling mechanism"
        },
        {
          name: "Authentication",
          description: "Secure token-based user authentication"
        },
        {
          name: "Request Routing",
          description: "Dynamic routing across microservices"
        }
      ],
      codeStructure: `
  ├── services/
  │   ├── authentication/
  │   ├── routing/
  │   └── rate_limiting/
  ├── configs/
  └── middleware/
      `
    }
  ];