// eslint-disable-next-line
import { motion } from 'motion/react';
import {
  Layers,
  Thermometer,
  ShieldCheck,
  Wind,
  Droplets,
  Sun,
} from 'lucide-react';

const 
fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
};

export default function Engineering() {
  return (
    <div className='w-full space-y-24 overflow-x-hidden pb-24'>
      <EngineeringHeroSection />
      <HullSystemSection />
      <LifeSupportEcosystemSection />
    </div>
  );
}

// ==========================================
// 1. ENGINEERING HERO SECTION
// ==========================================
function EngineeringHeroSection() {
  return (
    <section className='bg-surface/10 border-border/20 relative border-b px-6 py-20 text-center md:px-8 lg:py-28'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,var(--color-accent)_0%,transparent_60%)] opacity-5' />

      <div className='mx-auto max-w-3xl space-y-4'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-accent text-xs font-bold tracking-[0.25em] uppercase'
        >
          Structural Integrity Systems
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className='text-main text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'
        >
          AeroSpace Structural Physics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-muted mx-auto max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg'
        >
          A detailed breakdown of the thermal insulation matrix, structural
          hulls, and life support systems sustaining human operations under
          high-altitude conditions.
        </motion.p>
      </div>
    </section>
  );
}

// ==========================================
// 2. THE HULL SYSTEM SECTION (Sticky Side-By-Side Split)
// ==========================================
function HullSystemSection() {
  const layerTech = [
    {
      title: 'Carbon-Matrix Composite Shielding',
      desc: 'An ultra-dense interwoven outer layout shell designed to distribute structural loads evenly across high-velocity escape pathways.',
      icon: <Layers size={20} className='text-accent' />,
    },
    {
      title: 'Aero-Gel Thermal Interlayer',
      desc: 'Advanced synthetic multi-layer matrix providing insulation against extreme thermal gradients ranging from -150°C up to 1200°C.',
      icon: <Thermometer size={20} className='text-accent' />,
    },
    {
      title: 'Sovereign Micrometeorite Armor',
      desc: 'Self-healing kinetic absorption layers engineered to instantly neutralize high-velocity space debris impacts up to 8mm.',
      icon: <ShieldCheck size={20} className='text-accent' />,
    },
  ];

  return (
    <section className='mx-auto max-w-7xl px-6 md:px-8'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start'>
        {/* Left Column: Sticky Title & Concept Context */}
        <div className='space-y-4 lg:sticky lg:top-28 lg:pr-8'>
          <span className='text-accent text-xs font-bold tracking-widest uppercase'>
            Thermal Protection
          </span>
          <h2 className='text-main text-3xl font-bold tracking-tight sm:text-4xl'>
            The Reinforcement Matrix
          </h2>
          <p className='text-muted text-sm leading-relaxed sm:text-base'>
            Our hull engineering leverages structural physics principles to
            construct modular shells that guarantee safety during extreme
            atmospheric friction.
          </p>
          <div className='bg-surface border-border/40 mt-8 hidden rounded-2xl border p-6 shadow-sm lg:block'>
            <div className='text-accent mb-2 font-mono text-xs'>
              // TELEMETRY RECOGNITION STATUS
            </div>
            <div className='text-main text-sm font-semibold'>
              Structure Validation: 100% Certified
            </div>
            <div className='text-muted mt-1 text-xs'>
              Outer multi-layer systems undergo structural testing profiles
              prior to route deployments.
            </div>
          </div>
        </div>

        {/* Right Column: Scrolling Tech Breakdowns */}
        <div className='space-y-6'>
          {layerTech.map((tech, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className='border-border/40 bg-surface/40 hover:border-accent/30 flex items-start gap-4 rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-colors'
            >
              <div className='bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl'>
                {tech.icon}
              </div>
              <div className='space-y-1.5'>
                <h3 className='text-main text-base font-bold tracking-tight sm:text-lg'>
                  {tech.title}
                </h3>
                <p className='text-muted text-xs leading-relaxed sm:text-sm'>
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. THE LIFE SUPPORT ECOSYSTEM (Premium Grid)
// ==========================================
function LifeSupportEcosystemSection() {
  const ecosystemNodes = [
    {
      title: 'Atmospheric Controls',
      desc: 'Closed-loop oxygen delivery and carbon scrubbers maintaining pressure parameters identical to sea-level metrics.',
      icon: <Wind className='text-accent' />,
    },
    {
      title: 'Hydration Recovery',
      desc: '98% automated fluid collection and purification circuits ensuring long-term systemic self-reliance.',
      icon: <Droplets className='text-accent' />,
    },
    {
      title: 'Solar Energy Management',
      desc: 'High-density photovoltaic layers integrated across hull matrices to store clean power within modular battery systems.',
      icon: <Sun className='text-accent' />,
    },
  ];

  return (
    <section className='mx-auto max-w-7xl space-y-12 px-6 md:px-8'>
      <div className='mx-auto max-w-2xl space-y-2 text-center'>
        <h2 className='text-main text-3xl font-bold tracking-tight sm:text-4xl'>
          Life Support Ecosystem
        </h2>
        <p className='text-muted text-sm sm:text-base'>
          Self-reliant closed-loop configurations engineered to sustain life
          across deep sub-routes.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {ecosystemNodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className='border-border/40 bg-surface/50 rounded-2xl border p-6 text-center shadow-sm transition-shadow hover:shadow-md'
          >
            <div className='bg-accent/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl'>
              {node.icon}
            </div>
            <h3 className='text-main mb-2 text-lg font-bold tracking-tight'>
              {node.title}
            </h3>
            <p className='text-muted text-xs leading-relaxed sm:text-sm'>
              {node.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
