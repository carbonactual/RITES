import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, ChevronRight, Compass, Heart, MapPin, Menu, Search, ShieldCheck, Sparkles, Users, X } from 'lucide-react';
import './styles.css';

const gateways = [
  { id: 'find', label: 'FIND', title: 'Find a Grave', copy: 'Search by name, cemetery, or location. Navigate to the exact place and keep its story connected.', icon: MapPin, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { id: 'plan', label: 'PLAN', title: 'Plan Your Legacy', copy: 'Build the life instructions, people, provisions and wishes that should move forward with you.', icon: Compass, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85' },
  { id: 'register', label: 'REGISTER', title: 'Register a Passing', copy: 'Bring family, rites, records, places and responsibilities into one coordinated transition.', icon: Heart, image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85' },
  { id: 'provide', label: 'PROVIDE', title: 'Provide for Those You Love', copy: 'Turn care into structured provision for education, shelter, healthcare, milestones and family needs.', icon: Users, image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85' },
];

const stats = [['2.4M+', 'Lives documented'], ['18,400', 'Graves mapped'], ['36', 'States covered'], ['147K', 'Families protected']];
const continuity = ['Identity', 'People', 'Wishes', 'Documents', 'Provision', 'Places', 'Rites', 'Continuum'];
const prompts = ['Emmanuel Okafor', 'Atan Cemetery', 'Fatimah Bello', 'my family', 'my wishes', 'protect my children'];

function App() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState('find');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const current = gateways.find((g) => g.id === active) || gateways[0];
  const Icon = current.icon;
  const go = (id) => { setActive(id); setMobile(false); document.getElementById('gateway')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); };

  return <div className="rites">
    <header className="header">
      <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}>
        <span className="logo-mark"><i /><b /></span><span><strong>RITES</strong><small>HUMAN CONTINUITY PLATFORM</small></span>
      </button>
      <nav className={mobile ? 'nav nav-open' : 'nav'}>
        {gateways.map(g => <button key={g.id} className={active === g.id ? 'active' : ''} onClick={() => go(g.id)}>{g.label}</button>)}
        <button onClick={() => setOpen(true)}>INTELLIGENCE</button>
      </nav>
      <div className="header-actions"><button className="sign">Sign in</button><button className="begin" onClick={() => setOpen(true)}>Begin <ArrowUpRight size={16}/></button><button className="hamb" onClick={() => setMobile(v => !v)}>{mobile ? <X/> : <Menu/>}</button></div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-text">
          <motion.div className="overline" initial={reduce ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6}}>YOUR RITES. YOUR RULES. FROM BIRTH TO FOREVER.</motion.div>
          <motion.h1 initial={reduce ? false : {opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.08}}>Where <em>love</em><br/>continues.</motion.h1>
          <motion.p className="hero-lead" initial={reduce ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.18}}>Plan. Protect. Remember. The complete platform for everything a life builds — and everything the people left behind need to continue.</motion.p>
          <div className="search-hero"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="What would you like to find or begin?"/><button onClick={()=>setOpen(true)}>Explore <ArrowUpRight size={16}/></button></div>
          <div className="prompt-row">{prompts.slice(0,3).map(p=><button key={p} onClick={()=>{setQuery(p);setOpen(true)}}>{p}</button>)}</div>
        </div>
        <div className="hero-visual">
          <motion.div className="hero-image" initial={reduce ? false : {scale:.96,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1,ease:[.22,1,.36,1]}}>
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=88" alt="Family sharing a quiet moment outdoors"/>
            <div className="image-wash"/><div className="floating-card card-one"><span>CONTINUITY</span><strong>People first.</strong></div><div className="floating-card card-two"><ShieldCheck size={15}/><span>Consent-first</span></div>
          </motion.div>
          <motion.div className="life-orbit" animate={reduce ? undefined : {rotate:360}} transition={{duration:40,repeat:Infinity,ease:'linear'}}><span/><span/><span/></motion.div>
        </div>
      </section>

      <section className="stats">{stats.map(([n,l],i)=><motion.div key={l} initial={reduce ? false : {opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><strong>{n}</strong><span>{l}</span></motion.div>)}</section>

      <section className="begin-section">
        <div className="section-heading"><span>BEGIN ANYWHERE</span><h2>Where would you<br/><em>like to begin?</em></h2></div>
        <div className="gateway-grid">{gateways.map((g,i)=>{const G=g.icon;return <motion.button key={g.id} className={active===g.id?'gateway selected':'gateway'} onClick={()=>go(g.id)} whileHover={reduce?{}:{y:-8}} transition={{type:'spring',stiffness:300,damping:24}}><div className="gateway-photo"><img src={g.image} alt=""/><div/></div><div className="gateway-content"><div className="gateway-icon"><G size={19}/></div><span>{g.label}</span><h3>{g.title}</h3><p>{g.copy}</p><b>Open <ArrowUpRight size={15}/></b></div></motion.button>})}</div>
      </section>

      <section className="gateway-detail" id="gateway">
        <AnimatePresence mode="wait"><motion.div key={current.id} className="detail-copy" initial={reduce?false:{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={reduce?undefined:{opacity:0,x:20}} transition={{duration:.45}}><div className="detail-icon"><Icon size={24}/></div><span className="overline">{current.label}</span><h2>{current.title}</h2><p>{current.copy}</p><button className="gold-link" onClick={()=>setOpen(true)}>Begin {current.label.toLowerCase()} <ArrowUpRight size={16}/></button></motion.div></AnimatePresence>
        <div className="detail-art"><motion.img key={current.image} initial={reduce?false:{scale:1.08,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.7}} src={current.image} alt=""/><div className="detail-overlay"><Icon size={18}/><span>{current.label} FIELD</span></div></div>
      </section>

      <section className="continuum-section">
        <div><span className="overline">THE RITES PLATFORM</span><h2>One life.<br/><em>Many dimensions.</em></h2><p>RITES connects the people, places, decisions, documents, provisions and moments that make a life whole.</p></div>
        <div className="continuum-map">{continuity.map((item,i)=><motion.button key={item} className={`map-node n${i}`} onClick={()=>setOpen(true)} whileHover={reduce?{}:{scale:1.08}}><span>{item}</span></motion.button>)}<div className="map-center">YOU<small>CONTINUITY ROOT</small></div><svg viewBox="0 0 700 500" aria-hidden="true"><path d="M350 250 C180 120 110 180 90 80 M350 250 C520 120 600 190 620 85 M350 250 C190 330 120 390 75 430 M350 250 C510 330 580 390 635 430 M350 250 C350 120 350 70 350 30 M350 250 C350 380 350 420 350 475"/></svg></div>
      </section>

      <section className="ai-section"><div className="ai-glow"/><div className="ai-copy"><span className="overline">RITES INTELLIGENCE</span><h2>Tell RITES what matters.<br/><em>We'll map the rest.</em></h2><p>Voice-guided conversation turns natural language into structured continuity — people, wishes, provisions, records and transitions — without forcing you through forms first.</p><button className="begin large" onClick={()=>setOpen(true)}>Begin a conversation <Sparkles size={16}/></button></div><div className="voice-card"><div className="voice-top"><span>RITES VOICE</span><span>READY</span></div><div className="wave">{Array.from({length:28}).map((_,i)=><i key={i} style={{'--h': `${18 + ((i*17)%58)}px`}}/>)}</div><p>“I want my children to have what they need, and I want my wishes to be clear.”</p><div className="voice-footer"><Users size={16}/> People · Wishes · Provision · Future</div></div></section>

      <section className="closing"><span className="overline">FROM BIRTH TO FOREVER</span><h2>What matters<br/><em>should continue.</em></h2><p>Start with a person, a place, a wish, a document or a responsibility. RITES grows around the life you are already living.</p><button className="begin large" onClick={()=>setOpen(true)}>Begin RITES <ArrowUpRight size={17}/></button></section>
    </main>

    <footer><div><strong>RITES</strong><span>Human continuity platform.</span></div><span>Your rites. Your rules. From birth to forever.</span></footer>

    <AnimatePresence>{open&&<motion.div className="modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}><motion.div className="drawer" initial={reduce?false:{y:40,opacity:0}} animate={{y:0,opacity:1}} exit={reduce?undefined:{y:40,opacity:0}} transition={{type:'spring',damping:28}} onClick={e=>e.stopPropagation()}><div className="drawer-head"><div><span className="overline">RITES INTELLIGENCE</span><h2>Where would you like to begin?</h2></div><button onClick={()=>setOpen(false)}><X/></button></div><p>Start with a name, a place, a wish, a family question or anything you want RITES to help you organize.</p><div className="drawer-input"><Search size={18}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tell RITES what matters..."/></div><div className="drawer-prompts">{prompts.map(p=><button key={p} onClick={()=>setQuery(p)}>{p}<ChevronRight size={15}/></button>)}</div><div className="drawer-note"><ShieldCheck size={17}/><span>RITES is consent-first. Intelligence can prepare and explain; consequential actions remain under explicit authority.</span></div></motion.div></motion.div>}</AnimatePresence>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
