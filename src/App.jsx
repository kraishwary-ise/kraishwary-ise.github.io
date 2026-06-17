import { useEffect, useMemo, useState } from "react";

const profile = {
  name: "Kumar Aishwary",
  role: "Senior Software Engineer",
  location: "Bangalore, India",
  email: "kraishwary16@gmail.com",
  github: "https://github.com/kraishwary-ise",
  linkedin: "https://www.linkedin.com/in/kraishwary/",
};

const skills = [
  "Java",
  "Spring Boot",
  "IBM MQ",
  "Microservices",
  "PostgreSQL",
  "DB2",
  "WatsonX",
  "Kubernetes",
];

const stats = [
  { value: "79", label: "queue managers upgraded" },
  { value: "126", label: "VMs coordinated" },
  { value: "150k+", label: "devices in ingestion flow" },
  { value: "2TB+", label: "data migration experience" },
];

const projects = [
  {
    title: "MQ Upgrade - B2Bi SaaS",
    description:
      "Led an upgrade of 79 queue managers across 126 virtual machines to IBM MQ 9.4.0.10, improving security posture, compliance, and platform stability.",
  },
  {
    title: "GPS Ingestion Pipeline",
    description:
      "Designed a high-throughput UDP ingestion pipeline for 150k+ devices and improved DB2 query performance with aggregation trees.",
  },
  {
    title: "AI Alerting Platform",
    description:
      "Built alerting and observability integrations with WatsonX, Spring Boot, and MQ to reduce incident triage time.",
  },
];

const products = [
  {
    name: "B2B Integration SaaS Platform",
    domain: "Enterprise integration",
    impact:
      "Worked on platform reliability, IBM MQ upgrades, security remediation, and production incident response for business-critical message flows.",
    stack: ["IBM MQ", "Java", "Linux", "Automation", "Observability"],
  },
  {
    name: "Fleet and GPS Tracking Platform",
    domain: "Telematics",
    impact:
      "Built backend services for high-volume device ingestion, trip processing, geofence events, and query performance improvements.",
    stack: ["Java", "UDP", "DB2", "PostgreSQL", "Microservices"],
  },
  {
    name: "AI-assisted Alerting Workbench",
    domain: "Platform operations",
    impact:
      "Integrated AI-assisted summaries and alert workflows to help teams reduce investigation time during operational events.",
    stack: ["Spring Boot", "WatsonX", "MQ", "REST APIs", "Monitoring"],
  },
];

const blogs = [
  {
    title: "How I approach IBM MQ upgrades in production",
    tag: "Reliability",
    summary:
      "A practical playbook for planning queue manager upgrades, coordinating validation, and reducing rollout risk.",
    status: "Draft idea",
  },
  {
    title: "Designing backend systems for bursty device traffic",
    tag: "System Design",
    summary:
      "Notes from building ingestion flows where traffic spikes, ordering, and storage pressure all matter.",
    status: "Draft idea",
  },
  {
    title: "Using AI to make incident response calmer",
    tag: "AI Integration",
    summary:
      "Where LLMs can help operations teams: summarization, context gathering, and follow-up automation.",
    status: "Draft idea",
  },
];

const recognitions = [
  "Recognized for MQ upgrade leadership and cross-team coordination",
  "Owned incident triage, mitigation, and RCA inputs for production outages",
  "Mentored engineers on backend debugging, platform behavior, and delivery practices",
];

const highlights = [
  "Backend engineering for distributed systems and cloud-native platforms",
  "MQ administration, queue manager upgrades, and production reliability",
  "System design, observability, incident response, and RCA ownership",
  "AI-assisted backend workflows and automation for operations teams",
];

const experience = [
  {
    company: "IBM",
    role: "Senior Software Engineer",
    period: "Feb 2024 - Present",
  },
  {
    company: "Comviva",
    role: "Software Engineer",
    period: "Aug 2020 - Feb 2024",
  },
];

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const atEnd = letterCount === word.length;
    const atStart = letterCount === 0;
    const delay = atEnd && !deleting ? 950 : deleting ? 45 : 75;

    const timer = window.setTimeout(() => {
      if (atEnd && !deleting) {
        setDeleting(true);
        return;
      }

      if (atStart && deleting) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterCount((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, letterCount, wordIndex, words]);

  return words[wordIndex].slice(0, letterCount);
}

function App() {
  const phrases = useMemo(
    () => ["Backend Engineer", "MQ Administrator", "Microservices Architect", "AI Integrations"],
    []
  );
  const typedRole = useTypewriter(phrases);
  const [visits, setVisits] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const storedVisits = Number(window.localStorage.getItem("portfolio_visits") || 0) + 1;
    window.localStorage.setItem("portfolio_visits", String(storedVisits));
    setVisits(storedVisits);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main>
      <ScrollJourney progress={scrollProgress} />
      <section className="hero" id="home" aria-labelledby="page-title">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="page-title">{profile.name}</h1>
          <p className="hero__summary">
            Backend engineer building resilient microservices, reliable messaging systems,
            and practical AI integrations for production platforms.
          </p>
          <div className="hero__actions">
            <a href={`mailto:${profile.email}`} className="button button--primary">
              Contact
            </a>
            <a href="#products" className="button button--secondary">
              Products
            </a>
          </div>
          <div className="stat-strip" aria-label="Career highlights">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="topbar" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="section section--intro" id="about">
        <div>
          <span className="section__kicker">Currently</span>
          <h2>
            <span>{typedRole}</span>
            <span className="cursor" aria-hidden="true" />
          </h2>
          <p>
            I focus on simplifying complex backend systems, improving operational visibility,
            and shipping changes that hold up under real production load.
          </p>
        </div>
        <aside className="profile-panel" aria-label="Profile summary">
          <div className="avatar">KA</div>
          <div>
            <strong>{profile.location}</strong>
            <span>5+ years in backend and platform engineering</span>
          </div>
          <div className="visitor-count">
            <strong>{visits}</strong>
            <span>local visits from this browser</span>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section__header">
          <span className="section__kicker">Core Strengths</span>
          <h2>What I bring to teams</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight" key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="products">
        <div className="section__header">
          <span className="section__kicker">Products</span>
          <h2>Products I worked on</h2>
          <p>
            A portfolio-friendly view of product areas I contributed to, written without
            exposing private implementation details.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <span className="product-card__domain">{product.domain}</span>
              <h3>{product.name}</h3>
              <p>{product.impact}</p>
              <div className="mini-tags">
                {product.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section__header">
          <span className="section__kicker">Selected Work</span>
          <h2>Projects with production impact</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="blogs">
        <div className="section__header">
          <span className="section__kicker">Blogs</span>
          <h2>Writing ideas</h2>
          <p>
            These can become live blog posts later. For now, they make the portfolio feel
            complete and show the topics you can speak about confidently.
          </p>
        </div>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article className="blog-card" key={blog.title}>
              <div>
                <span className="blog-card__tag">{blog.tag}</span>
                <h3>{blog.title}</h3>
                <p>{blog.summary}</p>
              </div>
              <span className="blog-card__status">{blog.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split" id="experience">
        <div>
          <span className="section__kicker">Experience</span>
          <h2>Work history</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline__item" key={`${item.company}-${item.period}`}>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--skills">
        <div>
          <span className="section__kicker">Toolbox</span>
          <h2>Technologies and recognition</h2>
        </div>
        <div className="stack-column">
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="recognition-list">
            {recognitions.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <span className="section__kicker">Contact</span>
          <h2>Open to backend, platform, and integration conversations.</h2>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

function ScrollJourney({ progress }) {
  const pathLength = 1200;
  const markerY = 40 + progress * 520;
  const markerX = 28 + Math.sin(progress * Math.PI * 6) * 18;

  return (
    <div className="scroll-journey" aria-hidden="true">
      <svg viewBox="0 0 80 600" preserveAspectRatio="none">
        <path
          className="scroll-journey__base"
          d="M40 20 L18 95 L58 170 L24 245 L56 320 L20 395 L62 470 L38 580"
        />
        <path
          className="scroll-journey__active"
          d="M40 20 L18 95 L58 170 L24 245 L56 320 L20 395 L62 470 L38 580"
          pathLength={pathLength}
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength * (1 - progress),
          }}
        />
        <circle className="scroll-journey__marker" cx={markerX} cy={markerY} r="6" />
      </svg>
    </div>
  );
}

export default App;
