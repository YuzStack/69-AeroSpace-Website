import { useState } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Gauge, Users, Orbit } from 'lucide-react';
import { Link } from 'react-router';

// ==========================================
// DATA ARCHITECTURE (Real-World Fidelity)
// ==========================================
const FLEET_DATA = [
  {
    id: 'vessel-stratocruiser',
    name: 'Aero-V Stratocruiser',
    category: 'suborbital',
    capacity: '12 Passengers',
    speed: 'Mach 6.2',
    altitude: '105 km (Kármán Line)',
    desc: 'Engineered for high-altitude luxury excursions and microgravity dining events. Features a full 360-degree panoramic viewing dome constructed from reinforced hybrid-sapphire glass.',
    tier: 'Executive Lounge',
  },
  {
    id: 'vessel-orion',
    name: 'Aero-X Orion Heavy',
    category: 'orbital',
    capacity: '8 Crew + Logistics',
    speed: '27,600 km/h',
    altitude: '420 km Low Earth Orbit',
    desc: 'The backbone of orbital infrastructure logistics. Designed for deep-payload transport, space station modular integration, and rapid automated docking maneuvers.',
    tier: 'Industrial Cargo',
  },
  {
    id: 'vessel-elysium',
    name: 'Stratum Elysium-9',
    category: 'habitat',
    capacity: '24 Permanent Residents',
    speed: 'Synchronous Stationary',
    altitude: '35,786 km Geostationary',
    desc: 'A premium, high-comfort orbital habitat module. Equipped with full closed-loop atmospheric synthesis, artificial gravity rings, and radiation shielding layers.',
    tier: 'Sovereign Suite',
  },
  {
    id: 'vessel-solaris',
    name: 'Aero-Y Solaris Clipper',
    category: 'suborbital',
    capacity: '6 Passengers',
    speed: 'Mach 8.4',
    altitude: '120 km Upper Ionosphere',
    desc: 'Hyper-sonic point-to-point intercontinental transit vessel. Drastically compresses global cross-hemisphere travel times into safe, hour-long orbital sub-routes.',
    tier: 'First Class Premium',
  },
  {
    id: 'vessel-chronos',
    name: 'Chronos Deep Explorer',
    category: 'orbital',
    capacity: '16 Passengers',
    speed: '11.2 km/s (Escape Velocity)',
    altitude: 'Translunar Trajectory',
    desc: 'Optimized for high-velocity transfers between Earth orbits and lunar staging outposts. Built with next-generation magneto-plasma propulsion systems.',
    tier: 'Voyager Deck',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Vessels' },
  { id: 'suborbital', label: 'Suborbital Catalysts' },
  { id: 'orbital', label: 'Heavy Orbital Transports' },
  { id: 'habitat', label: 'Deep Space Habitats' },
];

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFleet = FLEET_DATA.filter(
    vessel => activeCategory === 'all' || vessel.category === activeCategory,
  );

  return (
    <div className='w-full space-y-12 overflow-x-hidden pb-24'>
      <FleetHeroSection />

      {/* Container to link filter action and grid items together cleanly */}
      <div className='mx-auto max-w-7xl space-y-8 px-6 md:px-8'>
        <FleetFilterSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <FleetGridSection filteredFleet={filteredFleet} />
      </div>
    </div>
  );
}

// ==========================================
// 1. FLEET HERO SECTION
// ==========================================
function FleetHeroSection() {
  return (
    <section className='bg-surface/20 border-border/20 relative border-b px-6 py-20 text-center md:px-8 lg:py-28'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_65%)] opacity-5' />

      <div className='mx-auto max-w-3xl space-y-4'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-accent text-xs font-bold tracking-[0.25em] uppercase'
        >
          Orbital Fleet Registry
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className='text-main text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'
        >
          The Architectural Vanguard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-muted mx-auto max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg'
        >
          Browse our active roster of fully reusable transport modules, orbital
          habitats, and hypersonic suborbital vessels built to expand commercial
          operations.
        </motion.p>
      </div>
    </section>
  );
}

// ==========================================
// 2. CATEGORICAL FILTER CONTROL SECTION
// ==========================================
function FleetFilterSection({ activeCategory, setActiveCategory }) {
  return (
    <section className='border-border/30 flex flex-wrap items-center justify-start gap-2 border-b pb-4 sm:justify-center'>
      {CATEGORIES.map(category => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative cursor-pointer rounded-full px-5 py-2.5 text-xs font-medium transition-colors select-none focus:outline-none sm:text-sm ${
              isActive ? 'text-bg font-semibold' : 'text-muted hover:text-main'
            }`}
          >
            {/* Smooth glowing capsule sliding behind active tab */}
            {isActive && (
              <motion.div
                layoutId='activeFilterCapsule'
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className='bg-text-main absolute inset-0 -z-10 rounded-full shadow-sm'
              />
            )}
            {category.label}
          </button>
        );
      })}
    </section>
  );
}

// ==========================================
// 3. FLEET GRID LISTING SECTION
// ==========================================
function FleetGridSection({ filteredFleet }) {
  return (
    <section className='w-full'>
      {/* AnimatePresence handles element layout swaps fluidly when list updates */}
      <motion.div
        layout
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        <AnimatePresence mode='popLayout'>
          {filteredFleet.map(vessel => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={vessel.id}
              className='border-border/40 bg-surface/40 group hover:border-accent/40 flex flex-col justify-between rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-colors'
            >
              <div className='space-y-4'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <span className='text-accent bg-accent/5 border-accent/10 rounded-md border px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase'>
                      {vessel.tier}
                    </span>
                    <h2 className='text-main group-hover:text-accent mt-1 text-xl font-bold tracking-tight transition-colors'>
                      {vessel.name}
                    </h2>
                  </div>
                  <div className='border-border/40 bg-surface text-muted group-hover:text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-colors'>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className='text-muted text-xs leading-relaxed font-normal sm:text-sm'>
                  {vessel.desc}
                </p>

                {/* Performance Engineering Specs Grid */}
                <div className='border-border/20 bg-surface/30 space-y-3 rounded-xl border p-4 text-xs'>
                  <div className='text-muted flex items-center justify-between'>
                    <span className='flex items-center gap-1.5'>
                      <Users size={14} /> Capacity
                    </span>
                    <span className='text-main font-medium'>
                      {vessel.capacity}
                    </span>
                  </div>
                  <div className='text-muted flex items-center justify-between'>
                    <span className='flex items-center gap-1.5'>
                      <Gauge size={14} /> Peak Velocity
                    </span>
                    <span className='text-main font-medium'>
                      {vessel.speed}
                    </span>
                  </div>
                  <div className='text-muted flex items-center justify-between'>
                    <span className='flex items-center gap-1.5'>
                      <Orbit size={14} /> Operating Ceiling
                    </span>
                    <span className='text-main font-medium'>
                      {vessel.altitude}
                    </span>
                  </div>
                </div>
              </div>

              <div className='pt-6'>
                <Link
                  to='/reserve'
                  className='border-border bg-surface/70 text-main hover:bg-text-main hover:text-bg flex w-full items-center justify-center rounded-full border py-3 text-xs font-medium shadow-sm transition-colors sm:text-sm'
                >
                  Configure Configuration Matrix
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
