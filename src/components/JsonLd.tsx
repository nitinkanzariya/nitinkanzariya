import content from "@/data/content.json";

const BASE_URL = "https://nitinkanzariya.vercel.app";

function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nitin Kanzariya",
    url: BASE_URL,
    image: `${BASE_URL}/profile_photo.JPG`,
    jobTitle: "Full Stack Developer & AI Platform Engineer",
    description: content.hero.description,
    email: "nkanzariya40@gmail.com",
    telephone: "+917778877805",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/nitinkanzariya",
      "https://linkedin.com/in/nitinkanzariya",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "RAG Pipelines",
      "AI Platform Engineering",
      "Full Stack Development",
      "MongoDB",
      "PostgreSQL",
      "Docker",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Maharaja Krishnakumarsinhji Bhavnagar University",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nitin Kanzariya — Portfolio",
    url: BASE_URL,
    description:
      "Nitin Kanzariya — Full Stack Developer & AI Platform Engineer. Building production SaaS platforms with React, Next.js, Node.js, Python FastAPI, and LangGraph-powered RAG pipelines.",
    author: {
      "@type": "Person",
      name: "Nitin Kanzariya",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLd() {
  return (
    <>
      <PersonSchema />
      <WebSiteSchema />
    </>
  );
}

// Breadcrumb component for sub-pages
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
