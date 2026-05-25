import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
// eslint-disable-next-line
import { motion } from 'motion/react';
import { Link } from 'react-router';

// Global framer variants to prevent redundancy and keep files clean
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <div className='w-full space-y-24 overflow-x-hidden pb-24'>
      <HeroSection />
      <MissionSection />
      <MetricsSection />
      <ExperiencesPreviewSection />
    </div>
  );
}

// ==========================================
// 1. HERO SECTION
// ===========================================
function HeroSection() {
  return (
    <section className='relative flex min-h-[85vh] w-full flex-col items-center justify-center px-6 text-center md:px-8'>
      {/* Absolute space background visual asset */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-surface)_0%,transparent_75%)] opacity-70' />

      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='max-w-4xl space-y-6'
      >
        <motion.span
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className='text-accent text-xs font-bold tracking-[0.3em] uppercase md:text-sm'
        >
          Orbital Civilian Transit Systems
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='text-main text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl'
        >
          Beyond the Horizon.
          <br className='hidden sm:inline' /> Within Reach.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className='text-muted mx-auto max-w-2xl text-base leading-relaxed font-normal sm:text-lg md:text-xl'
        >
          AeroSpace delivers unprecedented autonomous logistics architecture and
          premium high-altitude orbital pathways designed for visionaries
          expanding beyond low Earth boundaries.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row'
        >
          <Link
            to='/fleet'
            className='bg-text-main text-bg flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto'
          >
            Explore the Fleet <ArrowRight size={16} />
          </Link>
          <Link
            to='/engineering'
            className='border-border bg-surface/50 hover:bg-surface text-main flex w-full items-center justify-center rounded-full border px-8 py-4 text-sm font-medium backdrop-blur-sm transition-colors sm:w-auto'
          >
            Structural Engineering
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 2. MISSION STATEMENT
// ==========================================
function MissionSection() {
  const statementWords =
    'We believe that space is not a destination to visit, but a completely new dimension for sustainable infrastructure, human discovery, and luxury travel operations.'.split(
      ' ',
    );

  return (
    <section className='mx-auto max-w-5xl px-6 py-12 md:px-8'>
      <div className='border-border/40 bg-surface/30 rounded-3xl border p-8 backdrop-blur-sm sm:p-12 md:p-16'>
        <p className='text-accent mb-6 text-xs font-bold tracking-widest uppercase'>
          Operational Outlook
        </p>
        <motion.h2
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className='text-main text-2xl leading-relaxed font-medium tracking-tight sm:text-3xl md:text-4xl'
        >
          {statementWords.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { opacity: 0.2, y: 5 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className='mr-2 inline-block'
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}

// ==========================================
// 3. METRICS GRID (BENTO BOX)
// ==========================================
function MetricsSection() {
  const metrics = [
    {
      value: '0',
      unit: 'Incident Record',
      label:
        'Uncompromised architectural integrity validated across orbital vectors.',
      icon: <Shield className='text-accent' size={24} />,
    },
    {
      value: '2.4x',
      unit: 'Escape Velocity',
      label:
        'Propulsion acceleration matrices optimized for time-critical escape pathways.',
      icon: <Zap className='text-accent' size={24} />,
    },
    {
      value: '100%',
      unit: 'Reusable Fleet',
      label:
        'Sustainable vertical structural designs mitigating atmospheric micro-pollution.',
      icon: <Globe className='text-accent' size={24} />,
    },
  ];

  return (
    <section className='mx-auto max-w-7xl space-y-8 px-6 md:px-8'>
      <div className='max-w-xl space-y-2'>
        <h2 className='text-main text-3xl font-bold tracking-tight sm:text-4xl'>
          Validated In Transit
        </h2>
        <p className='text-muted text-sm sm:text-base'>
          Empirical flight performance analytics sustaining high-frequency
          execution schedules.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className='border-border/40 bg-surface/50 flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md'
          >
            <div className='bg-accent/10 mb-8 flex h-12 w-12 items-center justify-center rounded-xl'>
              {metric.icon}
            </div>
            <div className='space-y-2'>
              <div className='flex items-baseline gap-2'>
                <span className='text-main text-4xl font-black tracking-tight sm:text-5xl'>
                  {metric.value}
                </span>
                <span className='text-accent text-sm font-bold tracking-wide uppercase'>
                  {metric.unit}
                </span>
              </div>
              <p className='text-muted text-xs leading-relaxed sm:text-sm'>
                {metric.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 4. CORE EXPERIENCES PREVIEW
// ==========================================
function ExperiencesPreviewSection() {
  const experiences = [
    {
      title: 'Low Earth Orbit',
      desc: 'Sustain microgravity modules overlooking blue geometric horizons at 400km altitude gradients.',
      image: '🌐',
    },
    {
      title: 'Lunar Lagrange Point',
      desc: 'Position beyond deep lunar shadows within state-of-the-art permanent modular safe harbors.',
      image: '🌗',
    },
    {
      title: 'Orbital Stations',
      desc: 'Interlinked modular deep-space hubs offering full atmospheric synthesis adjustments.',
      image: '🛰️',
    },
  ];

  return (
    <section className='mx-auto max-w-7xl space-y-8 px-6 md:px-8'>
      <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
        <div className='space-y-2'>
          <h2 className='text-main text-3xl font-bold tracking-tight sm:text-4xl'>
            Curated Pathways
          </h2>
          <p className='text-muted text-sm sm:text-base'>
            Select destination vectors mapped across sovereign luxury
            infrastructures.
          </p>
        </div>
        <Link
          to='/reserve'
          className='text-accent group flex items-center gap-1 text-sm font-bold hover:underline'
        >
          Configure Reservation Parameters{' '}
          <ArrowRight
            size={16}
            className='transition-transform group-hover:translate-x-1'
          />
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className='border-border/40 bg-surface group relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-transform hover:-translate-y-1'
          >
            <div className='mb-4 inline-block text-4xl duration-300 select-none group-hover:scale-110'>
              {exp.image}
            </div>
            <h3 className='text-main mb-2 text-xl font-bold tracking-tight'>
              {exp.title}
            </h3>
            <p className='text-muted text-xs leading-relaxed sm:text-sm'>
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
