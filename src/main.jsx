import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, CircleUserRound, FileText, HeartHandshake, Home, LifeBuoy, Menu, Network, Search, ShieldCheck, Sparkles, X } from 'lucide-react';
import './styles.css';

const zones = [
  { id: 'root', label: 'ROOT', title: 'Identity & People', icon: CircleUserRound, description: 'The people, relationships and identity anchors that make a life legible.', items: ['Identity', 'Family', 'Relationships', 'Household'] },
  { id: 'life', label: 'LIFE', title: 'Safety & Care', icon: LifeBuoy, description: 'The information and pathways needed when life changes suddenly.', items: ['Emergency', 'Health access', 'Travel', 'Care'] },
  { id: 'steward', label: 'STEWARD', title: 'Responsibilities & Assets', icon: Network, description: 'Assets, liabilities, accounts, obligations and succession pathways.', items: ['Assets', 'Liabilities', 'Documents', 'Succession'] },
  { id: 'rite', label: 'RITE', title: 'Wishes & Ceremonies', icon: HeartHandshake, description: 'Wishes and culturally meaningful instructions, held with consent and care.', items: ['Wishes', 'Rites', 'Cemetery', 'Providers'] },
  { id: 'continuum', label: 'CONTINUUM', title: 'Archive & Legacy', icon: Sparkles, description: 'The record that remains useful across generations and transitions.', items: ['Archive', 'Memorial', 'Digital estate', 'Legacy'] },
];

const transitions = [
  { year: 'NOW', title: 'Continuity baseline', detail: 'Identity, trusted people and critical records', state: 'active' },
  { year: 'NEXT', title: 'Review wishes', detail: 'Confirm what should remain known and by whom', state: 'attention' },
  { year: 'FUTURE', title: 'Succession path', detail: 'Connect responsibilities to the people who may carry them', state: 'future' },
];

function App() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState('root');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [query, setQuery] = useState('');
  const current = zones.find((zone) => zone.id === active) ?? zones[0];

  const filteredItems = useMemo(() => {
    if (!query.trim()) return current.items;
    return current.items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [current, query]);

  const go = (id) => {
    setActive(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <button className="brand" onClick={() => go('root')} aria-label="RITES home">
          <span className="brand-mark"><span /></span>
          <span><strong>RITES</strong><small>HUMAN CONTINUITY</small></span>
        </button>
        <nav className={mobileOpen ? 'nav open' : 'nav'}>
          {zones.map((zone) => <button key={zone.id} className={active === zone.id ? 'nav-link active' : 'nav-link'} onClick={() => go(zone.id)}>{zone.label}</button>)}
        </nav>
        <div className="top-actions">
          <button className="icon-button" onClick={() => setAssistantOpen(true)} aria-label="Open RITES intelligence"><Search size={17} /></button>
          <button className="primary-button" onClick={() => setAssistantOpen(true)}>Begin continuity <ArrowUpRight size={16} /></button>
          <button className="menu-button" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="eyebrow"><span className="pulse-dot" /> A living record, not a static file</motion.div>
            <motion.h1 initial={reduce ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}>Everything that matters,<br /><em>carried forward.</em></motion.h1>
            <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .22 }}>RITES gives people and families a trusted continuity layer for identity, relationships, wishes, responsibilities, transitions and legacy.</motion.p>
            <div className="hero-actions">
              <button className="primary-button large" onClick={() => setAssistantOpen(true)}>Create your continuity <ChevronRight size={18} /></button>
              <button className="ghost-button" onClick={() => document.getElementById('field')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}>Explore the field</button>
            </div>
            <div className="trust-line"><ShieldCheck size={15} /> Consent-first · Private by design · Built to evolve</div>
          </div>

          <div className="continuity-field" id="field" aria-label="RITES continuity field">
            <div className="field-orbit orbit-a" /><div className="field-orbit orbit-b" />
            <motion.div className="field-core" animate={reduce ? undefined : { scale: [1, 1.035, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
              <span>YOU</span><small>CONTINUITY ROOT</small>
            </motion.div>
            {zones.map((zone, index) => {
              const Icon = zone.icon;
              return <motion.button key={zone.id} className={`field-node node-${index} ${active === zone.id ? 'selected' : ''}`} onClick={() => go(zone.id)} whileHover={reduce ? {} : { scale: 1.06 }} whileTap={reduce ? {} : { scale: .97 }}><Icon size={17} /><span>{zone.label}</span></motion.button>;
            })}
            <div className="connection c1" /><div className="connection c2" /><div className="connection c3" /><div className="connection c4" /><div className="connection c5" />
          </div>
        </section>

        <section className="zone-section">
          <div className="section-intro">
            <div><span className="section-kicker">THE CONTINUITY FIELD</span><h2>One life. Many dimensions.<br /><span>One connected record.</span></h2></div>
            <p>RITES does not force life into a linear checklist. Each object can become a doorway into the relationships, events and responsibilities around it.</p>
          </div>
          <div className="zone-grid">
            {zones.map((zone) => { const Icon = zone.icon; return <motion.button key={zone.id} className={`zone-card ${active === zone.id ? 'active' : ''}`} onClick={() => go(zone.id)} whileHover={reduce ? {} : { y: -5 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }}><div className="zone-icon"><Icon size={20} /></div><span>{zone.label}</span><h3>{zone.title}</h3><p>{zone.description}</p><div className="card-footer"><span>Open field</span><ArrowUpRight size={15} /></div></motion.button>; })}
          </div>
        </section>

        <section className="workspace">
          <div className="workspace-head"><div><span className="section-kicker">ACTIVE CONTEXT · {current.label}</span><h2>{current.title}</h2><p>{current.description}</p></div><div className="search-box"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find within this context" aria-label="Find within context" /></div></div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -10 }} transition={{ duration: .3 }} className="context-panel">
              <div className="context-main"><div className="context-symbol">{React.createElement(current.icon, { size: 26 })}</div><div><span className="mini-label">CONNECTED OBJECTS</span><h3>{current.label} field</h3><p>These are entry points into a larger continuity graph. The data model stays relational; the interface stays human.</p></div></div>
              <div className="object-list">{filteredItems.map((item, index) => <motion.button key={item} initial={reduce ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .045 }}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><ChevronRight size={16} /></motion.button>)}{filteredItems.length === 0 && <div className="empty">No matching object in this context.</div>}</div>
            </motion.div>
          </AnimatePresence>
        </section>

        <section className="transition-section">
          <div className="section-intro"><div><span className="section-kicker">TRANSITION ENGINE</span><h2>When life changes,<br /><span>the record changes with it.</span></h2></div><p>Transitions are first-class events in RITES. Birth, marriage, relocation, incapacity, succession and death can reshape relationships, permissions and responsibilities.</p></div>
          <div className="timeline">{transitions.map((item, i) => <motion.div className="timeline-item" key={item.year} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: i * .1 }}><div className={`timeline-dot ${item.state}`} /><span>{item.year}</span><h3>{item.title}</h3><p>{item.detail}</p></motion.div>)}</div>
        </section>

        <section className="closing"><div className="closing-glow" /><span className="section-kicker">THE NEXT STEP</span><h2>Start with what matters.<br /><em>RITES will grow around it.</em></h2><p>Begin with identity, a person, a wish, a document or a responsibility. The system does not require you to understand the whole map before you enter it.</p><button className="primary-button large" onClick={() => setAssistantOpen(true)}>Begin continuity <ArrowUpRight size={18} /></button></section>
      </main>

      <footer><div><strong>RITES</strong><span>Human continuity infrastructure.</span></div><span>Part of the Carbon Actual ecosystem.</span></footer>

      <AnimatePresence>
        {assistantOpen && <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setAssistantOpen(false)}><motion.aside className="assistant" initial={reduce ? false : { x: 35, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={reduce ? undefined : { x: 35, opacity: 0 }} transition={{ type: 'spring', damping: 28 }} onClick={(e) => e.stopPropagation()}><div className="assistant-head"><div><span className="section-kicker">RITES INTELLIGENCE</span><h2>Where should we begin?</h2></div><button className="icon-button" onClick={() => setAssistantOpen(false)} aria-label="Close"><X size={18} /></button></div><p>Start anywhere. RITES can map the surrounding context as your continuity record develops.</p><div className="prompt-grid">{['Build my identity root','Map my family','Record my wishes','Prepare for a transition'].map((prompt) => <button key={prompt} onClick={() => { setAssistantOpen(false); go(prompt.includes('family') ? 'root' : prompt.includes('wishes') ? 'rite' : prompt.includes('transition') ? 'continuum' : 'root'); }}>{prompt}<ArrowUpRight size={15} /></button>)}</div><div className="assistant-note"><Sparkles size={16} /><span>Intelligence is an orchestration boundary. Providers can change without changing the RITES experience.</span></div></motion.aside></motion.div>}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
