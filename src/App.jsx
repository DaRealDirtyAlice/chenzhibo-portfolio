import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDownRight,
  ArrowUpRight,
  BookOpenCheck,
  ChevronDown,
  Clock3,
  FileCheck2,
  Mail,
  MapPin,
  Network,
  Radar,
  ShieldCheck,
} from "lucide-react";

const projects = [
  {
    id: "01",
    kind: "Detection engineering",
    title: "SOC Detection & Response Project",
    period: "2026 — Present",
    description:
      "A three-node SOC environment that brings endpoint and network telemetry into one investigation workflow.",
    outcomes: [
      "Built Wazuh and Suricata monitoring across Ubuntu and Windows",
      "Validated failed-login, port-scan, and IDS test coverage",
      "Triaged 50+ suspicious indicators across planned 20,000+ events",
    ],
    tools: ["Wazuh", "Suricata", "Ubuntu", "Windows", "SIEM"],
    image: "/projects/soc-detection-response.svg",
    github: "https://github.com/DaRealDirtyAlice/soc-detection-response-project",
  },
  {
    id: "02",
    kind: "OT / ICS security",
    title: "ICS Honeypot & Threat Analysis",
    period: "2025",
    description:
      "An isolated AWS honeypot environment for observing simulated OT/ICS services and translating telemetry into risk findings.",
    outcomes: [
      "Deployed T-Pot and Conpot for OT/ICS service monitoring",
      "Analyzed 8,000+ logs and flagged 320+ suspicious interactions",
      "Produced mitigation notes and escalation-ready reports",
    ],
    tools: ["AWS", "T-Pot", "Conpot", "Shodan", "Censys"],
    image: "/projects/ics-honeypot-analysis.svg",
  },
  {
    id: "03",
    kind: "Cloud & IoT security",
    title: "IoT Security Monitoring",
    period: "2025",
    description:
      "A cloud-connected monitoring lab combining device, network, and AWS telemetry to investigate simulated IoT threats.",
    outcomes: [
      "Connected three telemetry sources through a searchable SIEM pipeline",
      "Simulated unauthorized MQTT access and DDoS-like traffic",
      "Reviewed 1,200+ events and investigated 45+ suspicious findings",
    ],
    tools: ["AWS IoT", "MQTT", "Suricata", "Elastic", "Kibana"],
    image: "/projects/iot-security-monitoring.svg",
  },
];

const skills = [
  ["Security operations", "SOC monitoring, alert triage, log review, incident documentation"],
  ["SIEM & endpoint", "Wazuh, Splunk, Elasticsearch, Kibana, Filebeat, Windows Endpoint"],
  ["Network & cloud", "Suricata, AWS, VPC Flow Logs, T-Pot, Conpot, Shodan, Censys"],
  ["IoT & workflow", "AWS IoT Core, MQTT, Python, AI-assisted research and log comparison"],
];

const strengths = [
  {
    icon: Radar,
    number: "01",
    title: "Signal-focused triage",
    text: "I follow evidence across endpoint and network telemetry to separate meaningful indicators from noise.",
  },
  {
    icon: Network,
    number: "02",
    title: "Cross-environment visibility",
    text: "Hands-on work spans Windows, Linux, AWS, IoT, and simulated OT/ICS services.",
  },
  {
    icon: FileCheck2,
    number: "03",
    title: "Actionable documentation",
    text: "Findings are translated into risk notes, remediation steps, and escalation-ready summaries.",
  },
  {
    icon: Clock3,
    number: "04",
    title: "Shift-ready focus",
    text: "Comfortable with evening and overnight monitoring, investigation, and structured handoffs.",
  },
];

const certifications = [
  {
    number: "01",
    status: "Earned · May 4, 2026",
    title: "CompTIA CySA+",
    issuer: "CompTIA",
    image: "/credentials/comptia-cysa-plus-screenshot.png",
    verifyUrl: "https://verify.comptia.org/",
    verifyCode: "fa18a229a3984b85bd0c39662e7ec0d4",
    description: "Threat detection, vulnerability management, SOC operations, and evidence analysis.",
    coverage: ["CS0-003 exam", "Valid through May 4, 2029", "Security operations", "Threat analysis"],
  },
  {
    number: "02",
    status: "Earned · June 5, 2025",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    image: "/credentials/comptia-security-plus-screenshot.png",
    verifyUrl: "https://verify.comptia.org/",
    verifyCode: "00DD5ZXS7ME11272",
    description: "Security concepts, risk management, secure operations, and incident response.",
    coverage: ["SY0-701 exam", "Valid through June 5, 2028", "Risk management", "Secure operations"],
  },
  {
    number: "03",
    status: "Earned · November 18, 2025",
    title: "INE eJPT",
    issuer: "INE Security",
    image: "/credentials/ejpt-screenshot.png",
    description: "Information gathering, exploitation, enumeration, and lateral movement.",
    coverage: ["Reconnaissance", "Enumeration", "Exploitation", "Lateral movement"],
  },
  {
    number: "04",
    status: "Awarded · Summer 2025",
    title: "President's Honour List",
    issuer: "Seneca Polytechnic",
    image: "/credentials/presidents-honour-list-screenshot.png",
    description: "Academic recognition for outstanding achievement in the Cybersecurity and Threat Management program.",
    coverage: ["Academic recognition", "Cybersecurity & Threat Management", "Summer 2025", "Seneca Polytechnic"],
  },
  {
    number: "05",
    status: "In progress",
    title: "Splunk Core Certified Power User",
    issuer: "Splunk",
    mark: "SPL",
    description: "Developing practical proficiency with SPL searches, fields, lookups, reports, dashboards, alerts, and SIEM investigation workflows.",
    coverage: ["SPL searches", "Fields and lookups", "Reports and dashboards", "Alert workflows"],
  },
];

function ProjectCard({ project, isActive = true }) {
  return (
    <article
      className={`project-card carousel-slide${isActive ? " is-active project-enter" : ""}`}
      aria-hidden={!isActive}
    >
      <div className="project-visual">
        <img className="project-cover" src={project.image} alt={`${project.title} architecture illustration`} />
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.id} / {project.kind}</span><span>{project.period}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
        <div className="project-actions">
          <div className="tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          {project.github && (
            <a className="project-github" href={project.github} target="_blank" rel="noreferrer">
              View on GitHub <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function CertificateVisual({ certification }) {
  if (!certification.image) {
    return (
      <div className="certificate-visual" aria-label={`${certification.title} in-progress credential visual`}>
        <div className="certificate-frame in-progress-frame">
          <div className="certificate-header"><span>{certification.issuer}</span><span>Learning path / {certification.number}</span></div>
          <div className="certificate-seal"><ShieldCheck size={38} /><span>In progress</span></div>
          <div className="certificate-mark">{certification.mark}</div>
          <div className="certificate-name">ZhiBo Chen</div>
          <div className="certificate-rule" />
          <div className="certificate-status">Certification preparation in progress</div>
          <div className="certificate-corners" aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="certificate-visual">
      <div className="credential-document">
        <img src={certification.image} alt={`${certification.title} awarded to ZhiBo Chen`} />
      </div>
    </div>
  );
}

function ProjectArchive() {
  return (
    <div className="site archive-page">
      <nav className="nav page-width" aria-label="Project page navigation">
        <a className="brand" href="#top"><span>ZC</span><small>Security Portfolio</small></a>
        <a className="archive-back" href="#work"><ArrowLeft size={16} /> Back to portfolio</a>
      </nav>
      <main className="archive-main page-width">
        <div className="archive-heading">
          <span className="section-label">All work</span>
          <h1>Security projects built around evidence.</h1>
          <p>A complete view of hands-on detection, OT/ICS, and IoT security work.</p>
        </div>
        <div className="projects project-archive">
          {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </main>
      <footer className="archive-footer">
        <div className="footer-bottom page-width">
          <span>© 2026 ZhiBo Chen</span>
          <a href="mailto:czb0728@gmail.com">Get in touch ↗</a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeCertification, setActiveCertification] = useState(0);
  const [route, setRoute] = useState(window.location.hash);
  const isArchive = route.startsWith("#/work");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const controls = document.querySelectorAll("button, a[href]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      controls.forEach((control) => control.classList.add("control-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("control-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 });

    controls.forEach((control, index) => {
      control.classList.add("control-reveal");
      control.style.setProperty("--control-delay", `${(index % 4) * 65}ms`);
      observer.observe(control);
    });

    return () => observer.disconnect();
  }, [route, activeProject, activeCertification]);

  useEffect(() => {
    if (isArchive) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetId = route && route.startsWith("#") ? route.slice(1) : "top";
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, [isArchive, route]);

  const showPrevious = () => setActiveProject((index) => (index - 1 + projects.length) % projects.length);
  const showNext = () => setActiveProject((index) => (index + 1) % projects.length);
  const showPreviousCertification = () => setActiveCertification((index) => (index - 1 + certifications.length) % certifications.length);
  const showNextCertification = () => setActiveCertification((index) => (index + 1) % certifications.length);

  if (isArchive) return <ProjectArchive />;

  return (
    <div className="site">
      <header className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/hero-tech.mp4" type="video/mp4" />
        </video>
        <div className="hero-grid" aria-hidden="true" />
        <nav className="nav page-width" aria-label="Primary navigation">
          <a className="brand" href="#top"><span>ZC</span><small>Security Portfolio</small></a>
          <div className="nav-links">
            <div className="nav-work-menu">
              <button className="nav-work-trigger" type="button" aria-haspopup="menu">
                Work <ChevronDown size={13} />
              </button>
              <div className="nav-work-options" role="menu">
                <a href="#work" role="menuitem"><span>Selected work</span><small>On this page</small><ArrowDownRight size={15} /></a>
                <a href="#/work" role="menuitem"><span>All projects</span><small>Open work page</small><ArrowUpRight size={15} /></a>
              </div>
            </div>
            <a href="#certifications">Achievements</a><a href="#skills">Skills</a><a href="#about">About</a>
          </div>
          <a className="nav-contact" href="mailto:czb0728@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
        </nav>

        <div className="hero-watermark" aria-hidden="true"><strong>00</strong><span>Portfolio / 2026</span></div>
        <div className="hero-content page-width">
          <div className="identity"><span className="hero-name">ZHIBO CHEN</span><span className="hero-role accent">SOC ANALYST</span></div>
          <h1><span className="hero-line">I turn security telemetry into</span><span className="hero-line">clear, actionable findings.</span></h1>
          <div className="hero-bottom">
            <p>Detection, alert triage, and incident documentation across endpoint, network, cloud, IoT, and OT/ICS environments.</p>
            <a href="#work" className="round-link" aria-label="View selected work"><ArrowDownRight size={28} /></a>
          </div>
          <div className="location"><i /><MapPin size={14} /> Toronto · Open to SOC opportunities</div>
        </div>
      </header>

      <main>
        <section className="metrics page-width" aria-label="Portfolio metrics">
          <div className="metric-intro"><span className="section-label">At a glance</span><p>Hands-on security work backed by documented evidence.</p></div>
          <div className="metric"><strong>9,200+</strong><span>Events reviewed</span></div>
          <div className="metric"><strong>365+</strong><span>Findings investigated</span></div>
          <div className="metric"><strong>03</strong><span>Security labs</span></div>
        </section>

        <section className="section editorial-section work-section" id="work">
          <div className="page-width">
            <div className="editorial-heading">
              <div className="section-number" aria-hidden="true"><strong>01</strong><span>/ Work</span></div>
              <div className="section-heading">
                <div><span className="section-label">Selected work</span><h2>Security projects built around evidence.</h2></div>
                <div className="work-intro">
                  <p>Each project connects telemetry collection to investigation, documentation, and a practical security outcome.</p>
                  <a className="view-all" href="#/work">View all projects <ArrowUpRight size={17} /></a>
                </div>
              </div>
            </div>
            <div className="project-stage">
              <button className="carousel-arrow carousel-previous" type="button" onClick={showPrevious} aria-label="Previous project"><ArrowLeft size={22} /></button>
              <div className="projects project-carousel" aria-live="polite">
                {projects.map((project, index) => (
                  <ProjectCard project={project} isActive={index === activeProject} key={project.id} />
                ))}
              </div>
              <button className="carousel-arrow carousel-next" type="button" onClick={showNext} aria-label="Next project"><ArrowRight size={22} /></button>
            </div>
          </div>
        </section>

        <section className="section editorial-section certification-section" id="certifications">
          <div className="page-width">
            <div className="editorial-heading">
              <div className="section-number" aria-hidden="true"><strong>02</strong><span>/ Achievements</span></div>
              <div className="section-heading certification-heading">
                <div><span className="section-label">Achievements</span><h2>Certifications and personal achievements.</h2></div>
                <p>Earned credentials, academic recognition, and active professional development across security operations and investigation.</p>
              </div>
            </div>
            <div className="certificate-stage">
              <button className="carousel-arrow carousel-previous" type="button" onClick={showPreviousCertification} aria-label="Previous certification"><ArrowLeft size={22} /></button>
              <div className="certificate-carousel" aria-live="polite">
                {certifications.map((certification, index) => (
                  <article
                    className={`certificate-card carousel-slide${index === activeCertification ? " is-active project-enter" : ""}`}
                    aria-hidden={index !== activeCertification}
                    key={certification.number}
                  >
                    <CertificateVisual certification={certification} />
                    <div className="certificate-copy">
                      <div className="certificate-meta"><span>{certification.number} / {certification.issuer}</span><span>{certification.status}</span></div>
                      <h3>{certification.title}</h3>
                      <p>{certification.description}</p>
                      <div className="certificate-coverage">
                        <span className="coverage-label">Achievement details</span>
                        <ul>{certification.coverage.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                      {certification.verifyUrl && (
                        <div className="credential-verification">
                          <div><span>Verification code</span><code>{certification.verifyCode}</code></div>
                          <a href={certification.verifyUrl} target="_blank" rel="noreferrer">
                            Verify <ArrowUpRight size={16} />
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
              <button className="carousel-arrow carousel-next" type="button" onClick={showNextCertification} aria-label="Next certification"><ArrowRight size={22} /></button>
            </div>
          </div>
        </section>

        <section className="section dark-panel" id="skills">
          <div className="page-width">
            <div className="section-heading">
              <div><span className="section-label">Capabilities</span><h2>A practical security operations toolkit.</h2></div>
              <p>Tools matter when they support a clear process: collect, investigate, validate, document, and improve.</p>
            </div>
            <div className="skills-list">
              {skills.map(([name, items], index) => (
                <div className="skill-row" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{items}</p><ArrowUpRight size={20} /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-width strengths">
          <div className="section-heading">
            <div><span className="section-label">How I work</span><h2>Built for steady, evidence-led operations.</h2></div>
          </div>
          <div className="strength-grid">
            {strengths.map(({ icon: Icon, number, title, text }) => (
              <article key={number}><div><Icon size={25} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="section about page-width" id="about">
          <div className="about-title"><span className="section-label">About</span><h2>Curious by default.<br /><span>Evidence-driven</span> by practice.</h2></div>
          <div className="about-copy">
            <p>I&apos;m an entry-level SOC Analyst focused on following an alert through the evidence, separating signal from noise, and leaving behind notes another analyst can act on.</p>
            <div className="education">
              <BookOpenCheck size={21} />
              <div><strong>Seneca Polytechnic</strong><span>Graduate Certificate · Cybersecurity & Threat Management · 4.0 GPA</span></div>
            </div>
            <div className="education">
              <BookOpenCheck size={21} />
              <div><strong>York University</strong><span>B.A. Computer Security · Specialized Honours</span></div>
            </div>
            <div className="certs"><span>CompTIA CySA+</span><span>CompTIA Security+</span><span>INE eJPT</span><span>Splunk Power User · In Progress</span></div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-main page-width">
          <span className="section-label">Let&apos;s connect</span>
          <h2>Ready to help turn security data into decisions.</h2>
          <a className="email-link" href="mailto:czb0728@gmail.com">czb0728@gmail.com <ArrowUpRight size={30} /></a>
          <div className="footer-details">
            <span>Toronto, Ontario</span><span>English · Professional</span><span>Mandarin · Native</span>
          </div>
        </div>
        <div className="footer-bottom page-width">
          <span>© 2026 ZhiBo Chen</span>
          <div><a href="https://github.com/DaRealDirtyAlice" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/czbsds" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:czb0728@gmail.com"><Mail size={17} /> Email</a></div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
