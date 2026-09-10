import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Check,
  Cpu,
  Gauge,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const email = "theyounganimation@gmail.com";

const projects = [
  {
    number: "01",
    title: "Digital Agents",
    summary:
      "Aurora, Athena, and Artemis are three evolving agent systems built around voice, persistent context, proactive behavior, governed tool use, and human-facing observability.",
    outcome:
      "Together, they demonstrate how an agent can move beyond a single-session chatbot into a durable product with continuity, scoped action, monitoring, and recovery.",
    agents: [
      {
        name: "Aurora",
        focus: "Voice-native interaction, continuity, scoped action, and an authenticated mobile experience.",
      },
      {
        name: "Athena",
        focus: "Persistent memory, proactive initiative, tool use, and multi-model coordination.",
      },
      {
        name: "Artemis",
        focus: "Evolving personal context with a private, live view into state, senses, and system health.",
      },
    ],
    tags: ["Voice", "Persistent memory", "Agent observability"],
    metric: "Three evolving systems",
    icon: Bot,
    href: "https://aurora-voice-person-2026.theyounganimation.chatgpt.site",
    linkLabel: "View Aurora brief",
  },
  {
    number: "02",
    title: "AgentWorld",
    summary:
      "A bounded civilization simulation where multiple agents act sequentially against a shared, typed world instead of drifting through an unstructured group chat.",
    outcome:
      "Shows structured multi-agent scheduling, bounded memory, validated shared state, repair behavior, and atomic persistence across a changing environment.",
    tags: ["TypeScript", "Multi-agent", "Atomic state"],
    metric: "Persistent simulated world",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Bloodbound",
    summary:
      "An AI-native RPG where generative narrative is constrained by strict schemas, validation, malformed-output repair, context management, and durable game state.",
    outcome:
      "Proves that creative generation can coexist with product contracts, model-provider flexibility, native UX, automated checks, and rollback-safe persistence.",
    tags: ["SwiftUI", "TypeScript", "Structured generation"],
    metric: "Native + backend coverage",
    icon: Workflow,
  },
  {
    number: "04",
    title: "AI observability dashboard",
    summary:
      "A private operational view that brings agent state, activity, system health, decisions, and source provenance into one inspectable interface.",
    outcome:
      "Makes complex AI behavior reviewable by a human operator while preserving access controls and separating facts, forecasts, and internal state.",
    tags: ["React", "Observability", "Privacy"],
    metric: "10 signal categories",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Local & hybrid AI runtime",
    summary:
      "Hardware-aware model qualification, resumable artifact delivery, runtime discovery, and integration planning for local OpenAI-compatible inference.",
    outcome:
      "Creates a path to lower-cost, lower-latency, and more private AI workloads without pretending a downloaded model is already a production service.",
    tags: ["Local inference", "Model routing", "Windows"],
    metric: "22.33 GiB model verified",
    icon: Cpu,
  },
  {
    number: "06",
    title: "Evidence-led evaluation & deployment",
    summary:
      "Isolated test environments, pinned fixtures, integrity manifests, deterministic receipts, rollback boundaries, and fail-closed evaluation.",
    outcome:
      "Lets a company experiment quickly while keeping claims, production authority, and recovery paths explicit before a pilot earns wider access.",
    tags: ["Evaluation", "Safety", "Deployment"],
    metric: "Receipt-based verification",
    icon: ShieldCheck,
  },
];

const businessOutcomes = [
  {
    title: "Company knowledge systems",
    text: "Search project history, documents, decisions, emails, notes, and procedures—and return an answer with its sources and uncertainty intact.",
  },
  {
    title: "Workflow agents",
    text: "Carry out multi-step work across software tools, APIs, documents, and databases with approval boundaries and visible progress.",
  },
  {
    title: "Project operations",
    text: "Track open issues, RFIs, permits, materials, responsibilities, schedule risk, and the context behind every blocker.",
  },
  {
    title: "Research & sales support",
    text: "Qualify opportunities, assemble account context, prepare follow-ups, monitor next actions, and keep promising work from disappearing.",
  },
  {
    title: "Monitoring & triage",
    text: "Turn alerts and system history into a prioritized, evidence-backed case for the person who owns the next decision.",
  },
  {
    title: "Internal tools & dashboards",
    text: "Replace scattered spreadsheets and repetitive admin work with focused interfaces built around the team's real workflow.",
  },
];

const capabilityGroups = [
  {
    title: "Agent systems",
    icon: Layers3,
    items: [
      "Persistent memory and project context",
      "Multi-step planning and tool execution",
      "Specialized multi-agent coordination",
      "Proactive monitoring and event response",
    ],
  },
  {
    title: "Interfaces & integrations",
    icon: Workflow,
    items: [
      "Internal web applications and dashboards",
      "Voice-first AI interfaces",
      "APIs, databases, files, and business software",
      "Browser and desktop workflow automation",
    ],
  },
  {
    title: "Evaluation & operations",
    icon: ShieldCheck,
    items: [
      "Behavioral evaluation and failure analysis",
      "Observability, provenance, and audit trails",
      "Local and hybrid model infrastructure",
      "Reversible deployment and recovery plans",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Cade Mack, home">
          CM<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>
        <div className="header-status">
          <span aria-hidden="true" /> Available for a focused AI pilot
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Cade Mack · Applied AI &amp; automation</p>
          <h1>
            I turn operational friction into <em>working AI systems.</em>
          </h1>
          <p className="hero-intro">
            From voice and company knowledge to workflow agents and internal
            tools, I build practical software around how people actually work—then
            test whether it saves time, reduces risk, or creates revenue.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              Explore selected work <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#company-value">
              What I can build for a company
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Applied AI systems architecture artwork">
          <Image
            src="/architecture-constellation.png"
            alt="An abstract network of signals, data, decisions, and tools converging into one engineered system"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="visual-caption">
            <span>Applied systems / 2026</span>
            <p>Signal → context → decision → action → evidence</p>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Areas of practice">
        <p><span>01</span> Agent systems</p>
        <p><span>02</span> Internal tools</p>
        <p><span>03</span> Data &amp; integrations</p>
        <p><span>04</span> Evaluation &amp; deployment</p>
      </section>

      <section className="section-shell work-intro" id="work">
        <div className="section-kicker">Selected work</div>
        <div>
          <h2>Built for real constraints.</h2>
          <p>
            My projects go beyond prompt wrappers. They deal with continuity,
            system state, tools, latency, privacy, partial failures, and the
            operational proof required before an AI system earns trust.
          </p>
        </div>
      </section>

      <section className="project-grid" aria-label="Selected projects">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span>{project.number}</span>
                <Icon aria-hidden="true" />
              </div>
              <div className="project-card-copy">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {project.agents ? (
                  <div className="agent-list" aria-label="Digital agent systems">
                    {project.agents.map((agent) => (
                      <div key={agent.name}>
                        <strong>{agent.name}</strong>
                        <span>{agent.focus}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="outcome-block">
                  <span>Why it matters</span>
                  <p>{project.outcome}</p>
                </div>
              </div>
              <div className="project-card-footer">
                <ul aria-label={`${project.title} technologies and themes`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="metric-row">
                  <strong>{project.metric}</strong>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel} <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="evidence-band section-shell" aria-label="Selected evidence">
        <div>
          <strong>18 / 18</strong>
          <p>focused orchestration checks passed</p>
        </div>
        <div>
          <strong>10</strong>
          <p>operational signal categories unified</p>
        </div>
        <div>
          <strong>22.33 GiB</strong>
          <p>local model artifact delivered and verified</p>
        </div>
        <div>
          <strong>End to end</strong>
          <p>architecture through deployment and recovery</p>
        </div>
      </section>

      <section className="capabilities section-shell" id="capabilities">
        <div className="capabilities-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Technical depth, translated into business outcomes.</h2>
          <p>
            I can own the path from an ambiguous workflow problem to a testable
            internal product—including the architecture, interface, integration,
            evaluation, and operational handoff.
          </p>
        </div>
        <div className="capability-groups">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title}>
                <div className="capability-title"><Icon aria-hidden="true" /><h3>{group.title}</h3></div>
                <ul>
                  {group.items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="stack-line" aria-label="Technical stack">
          <span>Working stack</span>
          <p>TypeScript · JavaScript · Python · React · Next.js · SQLite · PowerShell · APIs · Cloudflare Workers · local inference · model routing</p>
        </div>
      </section>

      <section className="company-value section-shell" id="company-value">
        <div className="value-heading">
          <p className="eyebrow">What I can build for your company</p>
          <h2>Start with the work people already wish were easier.</h2>
        </div>
        <div className="outcome-grid">
          {businessOutcomes.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pilot section-shell" id="approach">
        <div className="pilot-heading">
          <p className="eyebrow">A low-risk way to start</p>
          <h2>One problem. One measurable pilot.</h2>
          <p>
            No giant AI transformation plan. We identify one expensive friction
            point, define what success means, and earn the next step with evidence.
          </p>
        </div>
        <ol className="pilot-steps">
          <li><span>01</span><div><h3>Find the friction</h3><p>Talk to the people doing the work and locate the repeated task, delay, or information gap that actually costs something.</p></div></li>
          <li><span>02</span><div><h3>Define the proof</h3><p>Choose a narrow workflow and agree on useful measures—time saved, errors reduced, faster response, or revenue protected.</p></div></li>
          <li><span>03</span><div><h3>Build with the users</h3><p>Prototype around real inputs and real constraints, while keeping authority, privacy, and failure behavior explicit.</p></div></li>
          <li><span>04</span><div><h3>Measure and decide</h3><p>If the pilot creates value, expand deliberately. If it does not, stop with a clear record of what was learned.</p></div></li>
        </ol>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-label">
          <p className="eyebrow">About Cade</p>
          <figure className="about-portrait">
            <Image
              src="/cade-mack-portrait-business-v2.png"
              alt="Portrait of Cade Mack"
              width={1024}
              height={1536}
              sizes="(max-width: 720px) 100vw, 26vw"
            />
            <figcaption>
              <strong>Cade Mack</strong>
              <span>Applied AI &amp; automation</span>
            </figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <h2>A builder who understands both the system and the jobsite.</h2>
          <p className="about-lead">
            My background combines commercial solar and construction experience
            with intensive independent work in AI agents, software, automation,
            and digital cognitive systems.
          </p>
          <div className="about-columns">
            <p>
              That combination matters. I do not approach a company with “AI is
              exciting.” I look for the handoff that breaks, the document nobody
              can find, the status people reconstruct from five systems, or the
              repetitive process consuming expensive human attention.
            </p>
            <p>
              I am most useful where the problem is messy, the answer crosses
              software boundaries, and a generic chatbot is not enough. I can
              investigate, prototype, pressure-test, and explain the result in
              language that both operators and decision-makers can use.
            </p>
          </div>
          <p className="collaboration-note">
            I lead product direction, requirements, architecture, boundaries, and
            verification, and use Codex extensively as an implementation
            collaborator. That is part of my engineering workflow—not something I hide.
          </p>
        </div>
      </section>

      <section className="closing section-shell">
        <p className="eyebrow">Available for applied AI &amp; automation work</p>
        <h2>Bring me the workflow everyone has learned to work around.</h2>
        <p>
          I’ll help determine whether AI can improve it, build the smallest useful
          proof, and measure the result before anyone commits to a larger system.
        </p>
        <a className="primary-link" href={`mailto:${email}`}>
          Email Cade <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <footer>
        <p>© 2026 Cade Mack · Applied AI &amp; Automation</p>
        <a href={`mailto:${email}`}>{email}</a>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
